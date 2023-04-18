import Task from './model';
import Column from '../column/model';
import CommentService from '../comment/service';
import BoardService from '../board/service';

import { reorder, move } from '@app/utils/dnd';

const populateOptions = {
  task: [
    {
      model: 'User',
      path: 'users'
    },
    {
      model: 'Comment',
      path: 'comments'
    }
  ]
};

const populateColumnOptions = {
  model: 'Task',
  path: 'tasks',
  populate: [
    {
      model: 'User',
      path: 'users'
    },
    {
      model: 'Comment',
      path: 'comments'
    }
  ]
};

class TaskService {
  static createTask = async (columnId, body, user) => {
    const task = new Task({
      task: body.task
    });

    task.logs.push({
      action: `Task created by ${user.name}`,
      date: new Date()
    })

    await Column.findOne({ _id: columnId }, (err, column) => {
      if (column === null || err) {
        return new Error('Column not found');
      }
      task.save();

      column.tasks.push(task);
      column.save();
    });

    return task.getData();
  };

  static updateTask = async (id, body, user) => {
    const task = await Task.findOne({ _id: id }, (err, task) => {
      if (task === null || err) {
        return new Error('Task not found');
      }

      task.logs.push({
        action: `Updated task title to ${body.task} by ${user.name}`,
        date: new Date()
      })

      task.task = body.name;
      task.save();
    })
      .populate(populateOptions.task);

    TaskService.isTask(task);

    const newTask = task.getData();

    return { ...newTask, task: body.task };
  };

  static deleteTask = async (id) => {
    const task = await Task.findOne({ _id: id });

    TaskService.isTask(task);

    task.comments.forEach(comment => {
      CommentService.deleteAllCommentsInTask(comment._id);
    });

    await Task.deleteOne({ _id: id });
    return {
      status: true,
      id
    };
  };

  static addUser = async (taskId, userId, user) => {
    const task = await Task.findOne({ _id: taskId });

    if (task.users.indexOf(userId) === -1) {
      task.users.push(userId);
      task.logs.push({
        action: `User '${user.name}' subscribed to the task`,
        date: new Date()
      });
    } else {
      task.users = task.users.filter(id => id != userId);
      task.logs.push({
        action: `User '${user.name}' unsubscribed from the task`,
        date: new Date()
      });
    }

    await task.save();

    const updatedTask = await Task.findOne({ _id: taskId })
      .populate(populateOptions.task);

    return updatedTask.getData();
  };

  static addMark = async (taskId, mark, user) => {
    await TaskService.isMark(mark);

    const task = await Task.findOne({ _id: taskId });

    if (task.marks.some((color) => color === mark)) {
      task.marks = task.marks.filter((color) => color !== mark);

      task.logs.push({
        action: `Mark ${mark} deleted by ${user.name}`,
        date: new Date()
      });
    } else {
      task.logs.push({
        action: `Mark ${mark} added by ${user.name}`,
        date: new Date()
      });
      task.marks.push(mark);
    }

    if (task.marks.length) {
      // sort A-Z
      task.marks = task.marks.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
    }

    await task.save();

    const updatedTask = await Task.findOne({ _id: taskId })
      .populate(populateOptions.task);

    return updatedTask.getData();
  };

  static changeStatus = async (taskId, status, user) => {
    await TaskService.isStatus(status);

    const task = await Task.findOne({ _id: taskId });

    task.logs.push({
      action: task.status ? `Status changed from '${task.status}' to '${status}' by ${user.name}` : `Status changed to '${status}' by ${user.name}`,
      date: new Date()
    });
    task.status = status;

    await task.save();

    const updatedTask = await Task.findOne({ _id: taskId })
      .populate(populateOptions.task);

    return updatedTask.getData();
  };

  static moveTask = async (body, user) => {
    const { source, destination, taskId } = body;

    if (!destination) {
      return;
    }

    const columnStart = await Column.findOne({ _id: source.droppableId })
      .populate(populateColumnOptions);

    if (source.droppableId === destination.droppableId) {
      const reorderTasks = reorder(columnStart.tasks, source.index, destination.index);

      columnStart.tasks = reorderTasks;

      await columnStart.save();
    }

    if (source.droppableId !== destination.droppableId) {
    const columnEnd = await Column.findOne({ _id: destination.droppableId })
      .populate(populateColumnOptions);

      const updatedTasks = move(
        columnStart.tasks,
        columnEnd.tasks,
        source,
        destination
      );

      for (const key in updatedTasks) {
        if (key == columnStart._id) {
          columnStart.tasks = updatedTasks[key];
          await columnStart.save();
        }

        if (key == columnEnd._id) {
          columnEnd.tasks = updatedTasks[key];
          await columnEnd.save();
        }
      }
    }

    const task = await Task.findOne({ _id: taskId });
    task.logs.push({
      action: `Task moved by ${user.name}`,
      date: new Date()
    });
    await task.save();

    if (body && body.boardId) {
      const updatedBoard = await BoardService.getBoardById(body.boardId);

      return updatedBoard;
    }
  };

  static isTask = async (task) => {
    if (!task) {
      throw Error('Task not found');
    }
  };

  static isMark = async (mark) => {
    const marksExample = ['green', 'yellow', 'orange', 'red', 'purple', 'blue'];

    if (!marksExample.some((color) => color === mark)) {
      throw Error('Color uncorrect');
    }
  };

  static isStatus = async (status) => {
    const statusesExample = ['ready for develop', 'develop', 'on hold', 'review', 'test', 'done'];

    if (!statusesExample.some((s) => s === status)) {
      throw Error('Status uncorrect');
    }
  };
}

export default TaskService;

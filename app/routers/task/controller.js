import Response from 'core/response';
import TaskService from './service';

import { statusCodes } from '@app/constants/status';

class TaskController {
  createTask = async (request, response) => {
    try {
      const { body, user } = request;
      const { columnId } = request.params;

      if (!columnId) {
        return new Error('Column not found');
      }

      const task = await TaskService.createTask(columnId, body, user);

      if (task instanceof Error) {
        throw new Error(task.message);
      }

      Response.success(response, task);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message);
    }
  };

  updateTask = async (request, response) => {
    try {
      const { taskId } = request.params;
      const { body, user } = request;

      const task = await TaskService.updateTask(taskId, body, user);

      Response.success(response, task);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  deleteTask = async (request, response) => {
    try {
      const { taskId } = request.params;

      if (taskId === '5d371dab03b795511c6012dc') {
        throw Error('Not enough rights to delete.');
      }

      const task = await TaskService.deleteTask(taskId);

      Response.success(response, task);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  updateUserOnTask = async (request, response) => {
    try {
      const { taskId } = request.params;
      const { userId } = request.body;
      const { user } = request

      const task = await TaskService.addUser(taskId, userId, user);

      Response.success(response, task);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  addMarkOnTask = async (request, response) => {
    try {
      const { taskId } = request.params;
      const { body: { mark }, user } = request;

      const task = await TaskService.addMark(taskId, mark, user);

      Response.success(response, task);
    } catch (error) {
        const { message } = error;

        console.warn(error);
        Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  changeStatus = async (request, response) => {
    try {
      const { taskId } = request.params;
      const { body: { status }, user } = request;

      const task = await TaskService.changeStatus(taskId, status, user);

      Response.success(response, task);
    } catch (error) {
        const { message } = error;

        console.warn(error);
        Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  moveTask = async (request, response) => {
    try {
      const {body, user} = request;
      const updatedBoard = await TaskService.moveTask(body, user);

      Response.success(response, updatedBoard);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };
}

export default TaskController;

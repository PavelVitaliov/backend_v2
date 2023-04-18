import Comment from './model';
import Task from '../task/model';

class CommentService {
  static createComment = async(data, taskId) => {
    const { email, name, comment, user } = data;
    console.log({ data });
    if (!(email && name && comment)) {
      throw Error('Email, name or comment of undefined');
    }

    const newComment = new Comment({
      email,
      name,
      comment,
    });

    await Task.findOne({ _id: taskId }, (err, task) => {
      if (task === null || err) {
        throw Error('Task not found');
      }
      newComment.save();

      task.logs.push({
        action: `Comment added by ${name}`,
        date: new Date()
      });

      task.comments.push(newComment);
      task.save();
    });

    return {
      comment: newComment.getData()
    };
  };

  static deleteComment = async (commentId, taskId, user) => {
    const task = await Task.findOne({ _id: taskId });

    if (task === null) {
      throw Error('Task not found');
    }

    const comment = await Comment.findOne({ _id: commentId });

    CommentService.isComment(comment);

    task.comments = task.comments.filter(id => id != commentId);
    task.logs.push({
      action: `Comment deleted by ${user.name}`,
      date: new Date()
    });
    await task.save();

    await Comment.findOneAndDelete({ _id: commentId });

    return {
      status: true,
      commentId
    };
  };

  static deleteAllCommentsInTask = async (commentId) => {
    await Comment.findOneAndDelete({ _id: commentId });
  };

  static isComment = async (comment) => {
    if (!comment) {
      throw Error('Comment not found');
    }
  }
}

export default CommentService;

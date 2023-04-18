import Response from 'core/response';

import CommentService from './service';

class CommentController {
  createComment = async (request, response) => {
    try {
      const data = request.body;
      const { taskId } = request.params;

      const comment = await CommentService.createComment(data, taskId);

      Response.success(response, comment);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message);
    }
  };

  deleteComment = async (request, response) => {
    try {
      const { user, params: { commentId }, body: { taskId } } = request;

      const comment = await CommentService.deleteComment(commentId, taskId, user);

      Response.success(response, comment);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message);
    }
  };
}

export default CommentController;

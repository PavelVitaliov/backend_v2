import Response from 'core/response';
import BoardService from './service';

import { statusCodes } from '@app/constants/status';

class BoardController {
  getBoards = async (request, response) => {
    try {
      const { user } = request;
      const boards = await BoardService.getBoards(user);

      Response.success(response, boards);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  getBoardsById = async (request, response) => {
    try {
      const { boardId } = request.params;

      const board = await BoardService.getBoardById(boardId);

      Response.success(response, board);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  createBoard = async (request, response) => {
    try {
      const { body, user } = request;

      const board = await BoardService.createBoard(body, user);
      Response.success(response, board);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message);
    }
  };

  updateBoard = async (request, response) => {
    try {
      const { boardId } = request.params;
      const { body } = request;

      const board = await BoardService.updateBoard(boardId, body);

      Response.success(response, board);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  deleteBoard = async (request, response) => {
    try {
      const { boardId } = request.params;

      if (boardId === '5d36ed04fc4d89142cb39340' || boardId === '5e3ee21e2d0a982bf49b8169') {
        throw Error('Not enough rights to delete.');
      }

      const board = await BoardService.deleteBoard(boardId);

      Response.success(response, board);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  };

  patchUserOnBoard = async (request, response) => {
    try {
      const { boardId } = request.params;
      const { userId, role } = request.body;

      const board = await BoardService.patchUserOnBoard(boardId, userId, role);

      Response.success(response, board);
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.NOT_FOUND);
    }
  }
}

export default BoardController;

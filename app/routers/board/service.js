import Board from './model';
import ColumnService from '../column/service';
import { extractDataFromModelInstances } from '@app/utils/models';
import { roles } from 'constants/roles';
import { isPossibleRole } from 'utils/role';

const populateBoardOptions = {
  admin: 'admin',
  viewer: 'viewer',
  developer: 'developer',
  columns: {
    model: 'Column',
    path: 'columns',
    select: 'title _id',
    populate: {
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
    }
  }
};

class BoardService {
  static getBoards = async (user) => {
    const boardsFor = {
      admin: null
    };

    for (let key in roles) {
      boardsFor[key] = null;
    }

    const resultBoards = {};

    for (let key in boardsFor) {
      boardsFor[key] = await Board.find({[key]: { _id: user._id }})
        .populate(populateBoardOptions.admin)
        .populate(populateBoardOptions.developer)
        .populate(populateBoardOptions.viewer)
        .populate([populateBoardOptions.columns]);

      resultBoards[key] = extractDataFromModelInstances(boardsFor[key]);
    }

    return resultBoards;
  };

  static getBoardById = async (id) => {
    const board = await Board.findOne({ _id: id })
      .populate(populateBoardOptions.admin)
      .populate(populateBoardOptions.developer)
      .populate(populateBoardOptions.viewer)
      .populate([populateBoardOptions.columns]);

    BoardService.isBoard(board);

    return board.getData();
  };

  static createBoard = async (data, user) => {
    const board = new Board({
      title: data.title,
      admin: user
    });

    await board.save();

    return board.getData();
  };

  static updateBoard = async (id, body) => {
    const board = await Board.findOneAndUpdate({ _id: id }, { $set: body })
      .populate(populateBoardOptions.admin)
      .populate(populateBoardOptions.developer)
      .populate(populateBoardOptions.viewer)
      .populate([populateBoardOptions.columns]);

    BoardService.isBoard(board);

    const newBoard = board.getData();
    return { ...newBoard, title: body.title };
  };

  static deleteBoard = async (id) => {
    const board = await Board.findOne({ _id: id })
      .populate(populateBoardOptions.users)
      .populate([populateBoardOptions.columns]);

    BoardService.isBoard(board);

    board.columns.forEach(column => {
      ColumnService.deleteColumn(column._id);
    });

    await Board.deleteOne({ _id: id });

    return {
      status: true,
      id
    };
  };

  static patchUserOnBoard = async (boardId, userId, role) => {
    const board = await Board.findOne({ _id: boardId })
      .populate(populateBoardOptions.developer)
      .populate(populateBoardOptions.viewer);

    BoardService.isBoard(board);

    // role === 'developer' || 'viewer' || ''
    const possibleRoles = Object.values(roles);

    possibleRoles.forEach((role) => {
      board[role] = board[role].filter(({_id}) => _id != userId);
    });

    if (isPossibleRole(role)) {
      board[role].push(userId);
    }

    await board.save();

    const updatedBoard = await Board.findOne({ _id: boardId })
      .populate(populateBoardOptions.admin)
      .populate(populateBoardOptions.developer)
      .populate(populateBoardOptions.viewer)
      .populate([populateBoardOptions.columns]);

    return updatedBoard.getData();
  };

  static isBoard = board => {
    if (!board) {
      throw Error('Board not found');
    }
  };
}

export default BoardService;

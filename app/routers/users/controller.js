import Response from 'core/response';

import { statusCodes } from '@app/constants/status';
import UserServise from './service';

class UserController {
  getAuthenticatedUser = async (request, response) => {
    try {
      if (!request.user) {
        throw new Error('User not found');
      }
      Response.success(response, { user: request.user });
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.UNAUTHORIZED);
    }
  };

  getUsers = async (request, response) => {
    try {
      const { query: { name } } = request;

      const users = await UserServise.getUsers(name);

      Response.success(response, { users });
    } catch (error) {
      const { message } = error;

      console.warn(error);
      Response.error(response, message, statusCodes.UNAUTHORIZED);
    }
  }
}

export default UserController;

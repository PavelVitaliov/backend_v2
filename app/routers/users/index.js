import { USER_PREFIX } from 'constants';
import UserController from './controller';
import Router from 'core/router';
import authenticateJwt from 'middleware/auth';

class UserRouter extends Router {
  static PREFIX = USER_PREFIX;

  static CONTROLLER = UserController;

  static MIDDLEWARE = [
    authenticateJwt // the middleware is used in app level
  ];

  static ROUTES = [
    {
      method: 'get',
      path: '',
      middleware: [],
      controllerMethod: ({ getUsers }) => getUsers,
    },
    {
      method: 'get',
      path: '/current',
      middleware: [],
      controllerMethod: ({ getAuthenticatedUser }) => getAuthenticatedUser,
    },
  ];
}

export default UserRouter;

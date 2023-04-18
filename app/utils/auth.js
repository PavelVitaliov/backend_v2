import moment from 'moment';
import jwt from 'jsonwebtoken';
import config from '@config';
import bcrypt from 'bcryptjs';

export const createToken = (id) => {
  const payload = {
    sub: { id },
    exp: moment().add(1, 'day').unix(),
  };

  return jwt.sign(payload, config.app.secret);
};

export const encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hash(password, 10);

  return encryptedPassword;
};

export const disableMiddlewareForAuthRoutes = (middleware) => (req, res, next) => {
  if (req.url.match(/sign[iu][np]/)) {
    next();
    return
  } else {
    return middleware(req, res, next);
  }
};

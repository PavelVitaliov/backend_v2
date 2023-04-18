import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import { API_PREFIX } from 'constants';
import Passport from './routers/auth/passport';
import AuthRouter from './routers/auth';
import UserRouter from './routers/users';
import BoardRouter from './routers/board';
import ColumnRouter from './routers/column';
import TaskRouter from './routers/task';
import CommentRouter from './routers/comment';
import authenticateJwt from 'middleware/auth';
import { disableMiddlewareForAuthRoutes } from 'utils/auth';

class App {
  app = express();

  config = {};

  routers = [
    AuthRouter,
    UserRouter,
    BoardRouter,
    ColumnRouter,
    TaskRouter,
    CommentRouter
  ];

  constructor(config) {
    this.config = config;
    this.setUpConfig();
    this.setUpMongo();
    this.setUpRouters();
  }

  setUpConfig() {
    const { config } = this;
    this.app.set('secret', config.app.secret);
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    // this.app.use(morgan(config.app.loggerMode));
    this.app.use(cors());

    this.app.use(Passport.initialize());
    this.app.use(Passport.session());
    Passport.init(config.app.secret);

    this.app.use(disableMiddlewareForAuthRoutes(authenticateJwt));
  }

  setUpMongo() {
    const { config } = this;
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db.url, {
      retryWrites: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: this.config.db.retryDelay,
      connectTimeoutMS: this.config.db.retryDelay,
      socketTimeoutMS: this.config.db.retryDelay,
    })
      .then(() => { console.log('Database is connected'); })
      .catch(err => {
        console.log(`Can not connect to the database ${err}`);
        // Retry to connect to the database on startup
        if (this.config.db.maxRetries > 0) {
          console.log(`Retry attempt ${this.config.db.maxRetries}. Retrying in ${this.config.db.retryDelay / 1000} seconds...`);
          this.config.db.maxRetries--;
          return new Promise(resolve => setTimeout(resolve, this.config.db.retryDelay))
            .then(() => this.setUpMongo());
        } else {
          console.log(`Can not connect to the database ${err}`);
          process.exit(1);
        }
      });
  }

  setUpRouters() {
    this.app.use(API_PREFIX, this.routers.map((Router) => new Router().init()));
  }
}

export default App;

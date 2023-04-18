const mongoUrl = 'mongodb+srv://root:root@angular-edu-app-db.gvpze.mongodb.net/interns-database?retryWrites=true&w=majority';

const secret = 'test';
const loggerMode = 'dev';

const port = Number(process.env.PORT) || 5000;
const dbUrl = process.env.MONGO_DB_PORT || mongoUrl;

const config = {
  app: {
    port,
    secret,
    loggerMode,
  },
  db: {
    url: dbUrl,
    maxRetries: process.env.MAX_RETRIES || 10, // Maximum number of retries
    retryDelay: process.env.RETRY_DELAY || 5000, // Retry delay in milliseconds (1 second)
  },
};

export default config;

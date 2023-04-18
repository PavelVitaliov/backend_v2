const secret = 'test';
const loggerMode = 'combined';

const port = Number(process.env.PORT) || 80;
const dbUrl = process.env.MONGO_DB_PORT;

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

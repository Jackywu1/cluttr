/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';

import routes from './routes';

const router = () => {
  const app = express.Router();

  app.get('/twitter/tweets/:userid', routes.userTweets);
  app.get('/twitter/:user', routes.userProfile);

  return app;
};

export default router;

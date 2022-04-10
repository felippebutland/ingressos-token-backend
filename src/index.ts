import { router } from '@shared/http/routes';
import express from 'express';
import 'express-async-errors';
import config from './config';

const app = express();

app.use(express.json());
app.use(router);

app.listen(config.PORT, () => {
  console.log('Server is running');
});

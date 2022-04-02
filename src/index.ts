import express from 'express';
import config from './config';
const app = require('./shared/http/server');

app.use(express.json());

app.listen(config.PORT, () => {
  console.log('\n');
  console.log(`🚀`);
  console.log(`Running on port: ${config.PORT}`);
});

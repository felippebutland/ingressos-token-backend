import app from '@shared/http/server';
import express from 'express';
import config from './config';

app.use(express.json());

app.listen(config.PORT, () => {
  console.log('\n');
  console.log(`🚀`);
  console.log(`Running on port: ${config.PORT}`);
});

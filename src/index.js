const app = require('./shared/http/server');



app.listen(process.env.APP_PORT, () => {
  console.log(process.env)
  console.log('\n');
  console.log(`🚀`);
  console.log(`Running on port: ${process.env.APP_PORT}`);
});

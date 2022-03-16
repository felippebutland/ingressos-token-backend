const { Router} = require('express');
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

// const {
//   errorHandler,
//   schemaValidator,
// } = require('../middlewares');


const app = express();

app.use(cors());
app.use(express.json());

// for (const group of routes.reverse()) {
//   const router = Router();

//   for (const route of group.routes) {
//     route.middlewares = route.middlewares || [];

//     if (route.handler && 'schema' in route.handler) {
//       route.middlewares.unshift(schemaValidator(route.handler.schema));
//     }

//     const defaultHandler = (req, res) => res.status(501).send();

//     router[route.method.toLowerCase()](
//       route.path,
//       ...route.middlewares,
//       route.handler || defaultHandler
//     );
//   }

  // const handlers = [router];
  // if (group.prefix) handlers.unshift(group.prefix);

//   app.use(...handlers);
// }

// app.use(errorHandler);

module.exports = app;

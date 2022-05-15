const express = require('express');
const app = express();
const port = 3000;
const page = `
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Welcome!</h1>
  </body>
</html>
`;

app.get(
  '/hello',
  (request) => {
    console.log(request.path);
  }
)

app.get(
  '/test',
  (request, response) => {
    console.log(request.path);
    response.send(page);
  }
)

app.get(
  '/users/:name',
  (request, response) => {
    response.send("Welcome " + request.params.name);
  }
)

//Gamma, Praxis, check Albert Heijn

app.get(
  '/user/:name',
  (request, response) => {
    message = request.params.name;
    const render = `
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Welcome ${message}!</h1>
  </body>
</html>
`;

    console.log(message);
    response.send(render);
  }
)

app.listen(
  port,
  () => {
    console.log(`Now listening on port ${port}`)
    }
  );
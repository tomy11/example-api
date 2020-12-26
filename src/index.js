import express from 'express';
import Routers from './router/routers';
const app = express();
const port = 3000;

app.use('/', Routers);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
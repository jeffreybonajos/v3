const express = require("express");
const next = require("next");
const cookieParser = require('cookie-parser');
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const userRouter = require('./server/routers/user')

const COOKIE_SECRET = 'test'

app.prepare().then(() => {
  const server = express();
  
  server.use(express.json())
  server.use(cookieParser(COOKIE_SECRET))
  server.use(cors())

  server.use(userRouter);

  server.get("*", (req, res) => {
    return handle(req, res);
  });


  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

});
  

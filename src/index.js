/** Import main dependencies */
const { createServer } = require('http');
const { parse } = require('url');
const dotenv = require('dotenv');
const next = require('next');

// Init DotEnv configuration
dotenv.config();

// Instance the next application and set env.
const app = next({ dev: process.env.NODE_ENV !== 'production' });
// Get method handle for return via custom http server.
const handle = app.getRequestHandler();

// Wait next application when finish preprare and then define our custom http server.
app.prepare().then(() => {
  createServer((req, res) => {
    // Get method and url for return custom /health-check endpoint.
    if(req.method === 'GET' && req.url === '/health-check'){
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify({ status: 'OK' }));
    } else {
      // Return the handle method of the Next Application.
      handle(req, res, parse(req.url, true));
    }
  }).listen(process.env.NODE_PORT || 3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.NODE_PORT || 3000}`)
  });
});

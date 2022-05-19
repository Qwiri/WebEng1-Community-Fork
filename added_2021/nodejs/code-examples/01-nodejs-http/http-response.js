const http = require("http");
const server = http.createServer((req, res) => {
    const response = `<!DOCTYPE html>
    <html><head>
      <meta charset="UTF-8">
      <title>Hello World</title>
    </head><body>
    <h1>Hello World</h1>
    <p>Requested via ${req.method}</p>
    <p>Request-URL: ${req.url}</p>
    </body></html>`;
    res.end(response, "utf8");
});
server.listen(8000);

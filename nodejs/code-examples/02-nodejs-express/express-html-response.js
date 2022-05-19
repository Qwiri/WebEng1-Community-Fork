const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res
        .type("html") // text/html
        .send(`<!DOCTYPE html>
    <html><head>
      <meta charset="UTF-8">
      <title>Hello World</title>
    </head><body>
    <h1>Hello World</h1>
    <p>Requested via ${req.method}</p>
    <p>Request-URL: ${req.url}</p>
    </body></html>`);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

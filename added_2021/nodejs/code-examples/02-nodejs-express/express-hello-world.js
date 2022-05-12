const express = require('express');
const app = express();
const port = 8000;

app.get('/', (_req, res) => {
    return res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

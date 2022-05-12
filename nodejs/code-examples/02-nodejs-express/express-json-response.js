const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  // Note: this example differs from the original slides in this fork.
  return res.json({
    data: 'Hello World!'
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});

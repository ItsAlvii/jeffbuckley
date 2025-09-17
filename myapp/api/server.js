const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from API' });
});

app.get('/test', (req, res) => {
  res.json({ message: 'This is a test route' });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}/`);
});

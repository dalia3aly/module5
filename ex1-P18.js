// Lab Exercise 1 Page 18

const express = require('express');

// Server 1
const app1 = express();
const port1 = 3000;
app1.get('/', (req, res) => {
  res.send('Hello World - Server 1');
});
app1.listen(port1, () => {
  console.log(`Server 1 listening at http://localhost:${port1}`);
});



// Server 2
const app2 = express();
const port2 = 4000;
app2.get('/', (req, res) => {
  res.send('Hello World - Server 2');
});
app2.listen(port2, () => {
  console.log(`Server 2 listening at http://localhost:${port2}`);
});

const express = require('express');
const path = require('path');
const productsRoutes = require('./routes/productsRoutes');
const app = express();

const { allProducts } = require('./models/productsModels');

app.get('/api/all-products', (req, res) => {
  res.json(allProducts);
});


// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', productsRoutes); 

// You can set up routes here, e.g.,
app.get('/', (req, res) => {
  res.send('Welcome to Melodistic!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;


// Path: server.js
// Compare this snippet from models\productsModels.js:
// // models/productsModels.js



const express = require('express');
const app = express();
const port = 3000;
const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');

const friendRoutes = require('./routes/friendRoutes');

// parse requests of content-type - application/json
app.use(express.json());

app.use('/', express.static('public'));
app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes);
app.use('/friends', friendRoutes);

// starts the backend app on the given port

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    });
    
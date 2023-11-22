const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
const routes = require('./routes/routes');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/logisticDB' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected!'));

app.use('/api', routes);

app.listen(PORT , () => {
    console.log(`Server is running on the port : ${PORT}`);
})
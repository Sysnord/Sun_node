const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

const mainRoutes = require('./routes/main');
const addRoutes = require('./routes/add');
const reportRoutes = require('./routes/reports');

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use('/',mainRoutes);
app.use('/add',addRoutes);
app.use('/reports',reportRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
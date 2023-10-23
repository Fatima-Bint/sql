// const express = require('express');
// const bodyParser = require('body-parser');
// const mealRoutes = require('./routes/meals');

// const app = express();

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // View engine
// app.set('view engine', 'ejs');

// // Routes
// app.use('./routes/meals.js', mealRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const routes = require('./router/routes');

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


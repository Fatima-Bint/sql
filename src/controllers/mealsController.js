const db = require('../../config/database');

exports.getAllMeals = (req, res) => {
  db.select('*').from('meals').then(data => {
    res.render('meals', { meals: data });
  });
};

exports.getMealById = (req, res) => {
  const id = req.params.id;
  db.select('*').from('meals').where({ id }).first().then(meal => {
    res.render('meal', { meal });
  });
};

exports.addMeal = (req, res) => {
  const meal = req.body;
  db('meals').insert(meal).then(() => {
    res.redirect('/meals');
  });
};

exports.updateMeal = (req, res) => {
  const id = req.params.id;
  const updatedMeal = req.body;
  db('meals').where({ id }).update(updatedMeal).then(() => {
    res.redirect(`/meals/${id}`);
  });
};

exports.deleteMeal = (req, res) => {
  const id = req.params.id;
  db('meals').where({ id }).del().then(() => {
    res.redirect('/meals');
  });
};

module.exports = exports;

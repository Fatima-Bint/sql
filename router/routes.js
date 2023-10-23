const express = require('express');
const router = express.Router();
const mealController = require('../src/controllers/mealController');
const orderController = require('../src/controllers/orderController');

router.get('/meals', mealController.getAllMeals);
// Add more routes as needed.

module.exports = router;

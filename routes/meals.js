const express = require('express');
const router = express.Router();
const mealsController = require('../src/controllers/mealsController');

router.get('/', mealsController.getAllMeals);
router.get('/:id', mealsController.getMealById);
router.post('/', mealsController.addMeal);
router.put('/:id', mealsController.updateMeal);
router.delete('/:id', mealsController.deleteMeal);

module.exports = router;

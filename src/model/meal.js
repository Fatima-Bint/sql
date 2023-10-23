const { Model } = require('objection');
const knex = require('../../config/knex');
Model.knex(knex);

class Meal extends Model {
  static get tableName() {
    return 'meals';
  }
}

module.exports = Meal;

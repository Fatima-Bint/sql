const { Model } = require('objection');
const knex = require('../../config/knex');
Model.knex(knex);

class Order extends Model {
  static get tableName() {
    return 'orders';
  }

  static get relationMappings() {
    const User = require('./user');
    const Meal = require('./meal');

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'orders.username',
          to: 'users.username'
        }
      },
      meal: {
        relation: Model.BelongsToOneRelation,
        modelClass: Meal,
        join: {
          from: 'orders.meal_id',
          to: 'meals.id'
        }
      }
    };
  }
}

module.exports = Order;


exports.cancelAllOrders = async (req, res) => {
    try {
      await Order.query().delete();
      res.json({ message: 'All orders cancelled' });
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
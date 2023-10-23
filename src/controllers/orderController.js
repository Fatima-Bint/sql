const Order = require('../model/order');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.query().withGraphFetched('[user, meal]');
    res.json(orders);
  } catch (err) {
    res.status(500).send(err);
  }
};

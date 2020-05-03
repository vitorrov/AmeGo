import Order from '../models/Order';

class DeliveredController {
  async update(req, res) {
    const order = await Order.findByPk(req.params.orderid);

    if (order.done) {
      return res.status(401).json({ error: 'Esse produto já foi entregue' });
    }

    await order.update({
      end_date: Date.now(),
      done: true,
    });

    return res.json(order);
  }
}

export default new DeliveredController();

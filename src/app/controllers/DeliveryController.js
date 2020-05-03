import { Op } from 'sequelize';
import { startOfDay, endOfDay, parseISO } from 'date-fns';
import Order from '../models/Order';

class DeliveryController {
  async index(req, res) {
    const orders = await Order.findAll({
      where: { distributor_id: req.params.id, done: false, canceled: false },
    });

    if (orders.length === 0) {
      return res.json({ error: 'No pendent deliveries found' });
    }

    return res.json(orders);
  }

  async show(req, res) {
    const orders = await Order.findAll({
      where: {
        distributor_id: req.params.id,
        done: true,
      },
    });

    if (orders.length === 0) {
      return res.json({ error: 'No completed deliveries found' });
    }

    return res.json(orders);
  }

  async update(req, res) {
    const order = await Order.findByPk(req.params.orderid);

    if (!order) {
      return res.json({ error: 'Order not found, check if the id is correct' });
    }

    if (order.start_date !== null) {
      return res
        .status(401)
        .json({ error: 'Delivery progress already started for this order' });
    }

    // Se for antes que 8am e depois que 6pm não pode começar entrega

    const { start_date } = req.body;

    const searchDate = parseISO(start_date);

    const dayDeliveries = await Order.findAll({
      where: {
        distributor_id: order.distributor_id,
        start_date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
        },
      },
    });

    if (dayDeliveries.length >= 5) {
      return res
        .status(401)
        .json({ error: 'You can only do five deliveries a day' });
    }

    const current_hour = new Date().getHours();

    if (current_hour < 8 || current_hour > 18) {
      order.start_date = new Date();
    } else {
      return res
        .status(401)
        .json({ error: 'You can only start a delivery between 8am and 18pm' });
    }

    await order.update({
      start_date: new Date(),
    });

    return res.json(order);
  }
}

export default new DeliveryController();

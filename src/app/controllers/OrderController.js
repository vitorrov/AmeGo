import Order from '../models/Order';
import User from '../models/User';
import Distributor from '../models/Distributor';

import OrderdeleteMail from '../jobs/OrderdeleteMail';
import NewdeliveryMail from '../jobs/NewdeliveryMail';
import Queue from '../../lib/Queue';

class OrderController {
  async store(req, res) {
    const distributor_id = 1;
    const recipient_id = req.userId;

    const user = await User.findByPk(recipient_id);
    const [firstName] = user.name.split(' ');

    const order = await Order.create({
      recipient_id,
      distributor_id,
      product: 'KitKat',
      start_date: Date.now(),
    });
    const distributor = await Distributor.findByPk(order.distributor_id);
    const { product } = order;
    const userAddress = `${user.street}, ${user.number} - ${user.complement}, ${user.city}, ${user.state}, ${user.zip} `;

    await Queue.add(NewdeliveryMail.key, {
      distributor,
      order,
      product,
      userAddress,
    });

    return res.json({
      success: `Legal, ${firstName}! Seu pedido foi realizado e agora é só aguardar.`,
    });
  }

  async update(req, res) {
    const order = await Order.findByPk(req.params.id);

    const { recipient_id, distributor_id, product } = req.body;

    if (recipient_id && !(recipient_id !== order.recipient_id)) {
      return res.status(401).json({
        error:
          'This is the same recipient that is already registered for this order',
      });
    }

    if (distributor_id && !(distributor_id !== order.distributor_id)) {
      return res.status(401).json({
        error:
          'This is the same distributor that is already registered for this order',
      });
    }

    if (product && !(product !== order.product)) {
      return res.status(401).json({
        error:
          'This is the same product name that is already registered for this order',
      });
    }

    await order.update(req.body);

    return res.json(order);
  }

  async delete(req, res) {
    const order = await Order.findByPk(req.params.id);
    const { product } = order;

    if (!order) {
      return res.status(400).json({ error: 'Order id does not exist' });
    }

    const distributor = await Distributor.findByPk(order.distributor_id);

    await order.destroy();

    await Queue.add(OrderdeleteMail.key, {
      distributor,
      order,
      product,
    });

    return res.json({
      success: `Order #${order.id} was deleted succesfully`,
    });
  }
}

export default new OrderController();

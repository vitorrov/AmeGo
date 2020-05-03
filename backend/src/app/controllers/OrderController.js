import Order from '../models/Order';
import User from '../models/User';
import Distributor from '../models/Distributor';

import NewdeliveryMail from '../jobs/NewdeliveryMail';
import Queue from '../../lib/Queue';

const config = require('../../config/twilio');
// eslint-disable-next-line import/order
const client = require('twilio')(config.accountSid, config.authToken);

class OrderController {
  async store(req, res) {
    // const distributor_id = Math.floor(Math.random() * 5);
    const distributor_id = 1;
    const recipient_id = req.userId;

    const user = await User.findByPk(recipient_id);
    const [firstName] = user.name.split(' ');

    const order = await Order.create({
      recipient_id,
      distributor_id,
      product: 'KitKat',
    });
    const distributor = await Distributor.findByPk(order.distributor_id);
    const [firstNameDistributor] = distributor.name.split(' ');
    const { product } = order;
    const userAddress = `${user.street}, ${user.number} - ${user.complement}, ${user.city}, ${user.state}, ${user.zip} `;

    await Queue.add(NewdeliveryMail.key, {
      distributor,
      order,
      product,
      userAddress,
    });

    await client.messages.create({
      to: distributor.phone,
      from: config.phoneNumber,
      body: `E aí ${firstNameDistributor}, nova entrega da Ame Go registrada para você!`,
    });

    return res.json({
      success: `Legal, ${firstName}! Seu pedido foi realizado e agora é só aguardar.`,
    });
  }
}

export default new OrderController();

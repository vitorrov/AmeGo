import Order from '../models/Order';
import File from '../models/File';

class DeliveredController {
  async update(req, res) {
    const order = await Order.findByPk(req.params.orderid);

    if (!req.file) {
      return res.status(400).json({ error: 'You need to upload a signature' });
    }

    if (order.done) {
      return res
        .status(401)
        .json({ error: 'Delivery progress already finished for this order' });
    }

    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    await order.update({
      end_date: new Date(),
      done: true,
      signature_id: file.id,
    });

    return res.json(order);
  }
}

export default new DeliveredController();

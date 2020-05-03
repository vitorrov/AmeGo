import Order from '../models/Order';

class DeliveryController {
  async index(req, res) {
    const orders = await Order.findAll({
      where: { distributor_id: req.userId },
    });

    if (orders.length === 0) {
      return res.json({ error: 'Você ainda não realizou nenhuma entrega' });
    }

    return res.json(orders);
  }

  async update(req, res) {
    const order = await Order.findByPk(req.params.orderid);

    if (!order) {
      return res.json({
        error: 'Número de entrega não localizado em nosso sistema',
      });
    }

    if (req.userId !== order.distributor_id) {
      return res.json({
        error: 'Você só pode iniciar entregas atribuídas a você',
      });
    }

    if (order.start_date !== null) {
      return res.status(401).json({
        error:
          'Parece que você já iniciou o progresso de entrega para esse pedido',
      });
    }

    await order.update({
      start_date: Date.now(),
    });

    return res.json(order);
  }
}

export default new DeliveryController();

import Mail from '../../lib/Mail';

class OrderdeleteMail {
  get key() {
    return 'OrderdeleteMail';
  }

  async handle({ data }) {
    const { distributor, order } = data;

    await Mail.sendMail({
      to: `${distributor.name} <${distributor.email}>`,
      subject: `FastFeet | Entrega #${order.id} deletada`,
      template: 'deletion',
      context: {
        distributor: distributor.name,
        order: order.id,
        product: order.product,
      },
    });
  }
}

export default new OrderdeleteMail();

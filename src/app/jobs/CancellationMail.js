import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { distributor, order } = data;

    await Mail.sendMail({
      to: `${distributor.name} <${distributor.email}>`,
      subject: `FastFeet | Entrega #${order.id} cancelada`,
      template: 'cancellation',
      context: {
        distributor: distributor.name,
        order: order.id,
      },
    });
  }
}

export default new CancellationMail();

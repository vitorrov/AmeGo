import Mail from '../../lib/Mail';

class NewdeliveryMail {
  get key() {
    return 'NewdeliveryMail';
  }

  async handle({ data }) {
    const { distributor, order, userAddress } = data;

    await Mail.sendMail({
      to: `${distributor.name} <${distributor.email}>`,
      subject: 'Ame Go | Nova entrega registrada para você!',
      template: 'new',
      context: {
        distributor: distributor.name,
        order: order.id,
        product: order.product,
        userAddress,
      },
    });
  }
}

export default new NewdeliveryMail();

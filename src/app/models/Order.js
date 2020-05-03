import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        done: Sequelize.BOOLEAN,
        canceled: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'recipient_id',
      as: 'recipientId',
    });
    this.belongsTo(models.Distributor, {
      foreignKey: 'distributor_id',
      as: 'distributorId',
    });
  }
}

export default Order;

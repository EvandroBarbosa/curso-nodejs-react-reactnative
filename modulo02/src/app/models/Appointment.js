import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  // Fazendo o relacionamento entre tabelas
  /*
    Quando há mas de um relacionamento a uma mesma tabela,
    é preciso apelidar os relacionamento, para quando o sequelize for
    fazer os relacionamentos isso não gera um conflito pois ele ja sabe
    quem pertence a cada relação.
   */
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;

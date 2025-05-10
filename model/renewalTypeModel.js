import { DataTypes, Model } from 'sequelize';

class RenewalType extends Model {
  static initModel(sequelize) {
    RenewalType.init(
      {
        renewalid: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        renewalType: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Renewal type must not be empty' },
          },
        },
        createdBy: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Created by must not be empty' },
          },
        },
      },
      {
        sequelize,
        modelName: 'RenewalType',
        tableName: 'renewal_types',
        timestamps: true,
      }
    );
    return RenewalType;
  }

  static associate(models) {
    RenewalType.hasMany(models.RenewalUpdate, {
      foreignKey: 'renewalId',
      as: 'RenewalUpdates',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

export default RenewalType;

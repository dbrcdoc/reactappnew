
import { DataTypes, Model } from 'sequelize';
import RenewalType from './renewalTypeModel.js';

class RenewalUpdate extends Model {
  static initModel(sequelize) {
    RenewalUpdate.init(
      {
        renewalId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: RenewalType,
            key: 'renewalid',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        docId: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: { msg: 'Doc Id must not be empty' },
          },
        },
        regNo: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Reg No must not be empty' },
          },
        },
        date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          validate: {
            isDate: { msg: 'Date must be a valid date' },
          },
        },
        validUpto: {
          type: DataTypes.DATEONLY,
          allowNull: true,
          validate: {
            isDate: { msg: 'Valid Upto must be a valid date' },
          },
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        downloads: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0,
          validate: {
            isInt: { msg: 'Downloads must be an integer' },
            min: 0,
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
        modelName: 'RenewalUpdate',
        tableName: 'renewal_updates',
        timestamps: true,
      }
    );
    return RenewalUpdate;
  }

  static associate(models) {
    RenewalUpdate.belongsTo(models.RenewalType, {
      foreignKey: 'renewalId',
      as: 'RenewalType',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

export default RenewalUpdate;

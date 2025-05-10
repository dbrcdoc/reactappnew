import { DataTypes, Model } from 'sequelize';

class Expense extends Model {
  static initModel(sequelize) {
    Expense.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        Model: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Model must not be empty' },
          },
        },
        CashAvg: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'CashAvg must be a number' },
            min: 0,
          },
        },
        load_unload: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'load_unload must be a number' },
            min: 0,
          },
        },
        uria_exp: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'uria_exp must be a number' },
            min: 0,
          },
        },
        pod: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'pod must be a number' },
            min: 0,
          },
        },
        deisel_avg: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'deisel_avg must be a number' },
            min: 0,
          },
        },
        createdBy: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Expense',
        tableName: 'expenses',
        timestamps: true,
      }
    );
    return Expense;
  }
}

export default Expense;

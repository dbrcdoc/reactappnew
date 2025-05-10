import { DataTypes, Model } from 'sequelize';

class VehicleRoute extends Model {
  static initModel(sequelize) {
    VehicleRoute.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        source: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Source must not be empty' },
          },
          field: 'source',
        },
        destination: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Destination must not be empty' },
          },
          field: 'destination',
        },
        Model: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Model must not be empty' },
          },
          field: 'model',
        },
        VIA: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'via',
        },
        Route: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'route',
        },
        Kilometer: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'Kilometer must be a number' },
            min: 0,
          },
          field: 'kilometer',
        },
        border: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'Border must be a number' },
            min: 0,
          },
          field: 'border',
        },
        border_dtl: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'border_dtl',
        },
        delhi_toll: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'Delhi_toll must be a number' },
            min: 0,
          },
          field: 'delhi_toll',
        },
        union: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'Union must be a number' },
            min: 0,
          },
          field: 'union',
        },
        guard_police: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'Guard_police must be a number' },
            min: 0,
          },
          field: 'guard_police',
        },
        munsiyana: {
          type: DataTypes.FLOAT,
          allowNull: true,
          validate: {
            isFloat: { msg: 'Munsiyana must be a number' },
            min: 0,
          },
          field: 'munsiyana',
        },
        createdBy: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'createdBy',
        },
        updatedBy: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'updatedBy',
        },
      },
      {
        sequelize,
        modelName: 'VehicleRoute',
        tableName: 'vehicle_routes',
        timestamps: true,
      }
    );
    return VehicleRoute;
  }
}

export default VehicleRoute;

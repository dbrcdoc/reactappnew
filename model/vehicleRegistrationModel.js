import { DataTypes, Model } from 'sequelize';

class VehicleRegistration extends Model {
  static initModel(sequelize) {
    VehicleRegistration.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        registrationNumber: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: { msg: 'Registration number must not be empty' },
          },
        },
        registrationDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          validate: {
            isDate: { msg: 'Registration date must be a valid date' },
          },
        },
        typeOfVehicle: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        dealerNameAndAddress: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ownerName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Owner name must not be empty' },
          },
        },
        fullAddressPermanent: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        classOfVehicle: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ownership: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        makersName: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        typeOfBody: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        numberOfCylinders: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            isInt: { msg: 'Number of cylinders must be an integer' },
            min: 0,
          },
        },
        engineNumber: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        horsePowerBHP: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            isInt: { msg: 'Horse power must be an integer' },
            min: 0,
          },
        },
        makersClassification: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        seatingCapacity: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            isInt: { msg: 'Seating capacity must be an integer' },
            min: 0,
          },
        },
        vehicleColor: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        norms: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        monthYearOfManufacture: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        chassisNumber: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        fuel: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        cubicCapacity: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            isInt: { msg: 'Cubic capacity must be an integer' },
            min: 0,
          },
        },
        unladenWeightKgs: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            isInt: { msg: 'Unladen weight must be an integer' },
            min: 0,
          },
        },
        ladenGVWeightKgs: {
          type: DataTypes.INTEGER,
          allowNull: true,
          validate: {
            isInt: { msg: 'Laden/GV weight must be an integer' },
            min: 0,
          },
        },
        hypothecation: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        registrationAuthority: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'VehicleRegistration',
        tableName: 'vehicle_registrations',
        timestamps: true,
      }
    );
    return VehicleRegistration;
  }
}

export default VehicleRegistration;

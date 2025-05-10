import { DataTypes, Model } from 'sequelize';

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'First name must not be empty' },
            len: { args: [2, 50], msg: 'First name length must be between 2 and 50 characters' },
          },
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Last name must not be empty' },
            len: { args: [2, 50], msg: 'Last name length must be between 2 and 50 characters' },
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: { msg: 'Email must not be empty' },
            isEmail: { msg: 'Email must be a valid email address' },
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: 'Password must not be empty' },
            len: { args: [8, 100], msg: 'Password length must be between 8 and 100 characters' },
          },
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'user',
          validate: {
            isIn: {
              args: [['user', 'admin', 'moderator']],
              msg: 'Role must be one of user, admin, or moderator',
            },
          },
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
      }
    );
  }
}

export default User;

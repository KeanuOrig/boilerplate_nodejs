import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; // Import the Sequelize instance

class User extends Model {

}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize, // Pass the Sequelize instance
    modelName: 'User', // Set the model name
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    paranoid: true, // Enable soft deletion (deletedAt)
    underscored: true, // Use snake_case for attribute names
    tableName: 'users', // Set the table name
  }
);

export default User;

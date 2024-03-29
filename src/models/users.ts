import { DataTypes } from 'sequelize';
import { sequelize } from "../config/database";

export const UsersModel = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  user_image: {
    type:DataTypes.STRING(40),
    allowNull:true
  },
  
});


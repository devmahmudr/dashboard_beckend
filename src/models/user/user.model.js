import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

class userModel extends Model {}

userModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    last_name: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    isAdmin:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  },
  {
    tableName: "users",
    sequelize,
    paranoid: true,
    timestamps: false,
  }
);


export default userModel;
import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

class DoctorModel extends Model {}

Model.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nextWorkDay: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  { sequelize, timestamps: false, modelName: "doctor" }
);

export default DoctorModel;

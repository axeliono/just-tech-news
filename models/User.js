const { Model, Datatypes, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create User Model
class User extends Model {}

User.init(
  {
    //Column Definitions
    id: {
      // special sequelize datatypes object provide what type of data it is
      type: DataTypes.INTEGER,
      //not null
      allowNull: false,
      //primary key
      primaryKey: true,
      //autoincrement
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //length of password
        len: [4],
      },
    },
  },
  {
    //table config options
    sequelize,
    //pass in sequelize connection
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;

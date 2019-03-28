'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING,
    online_timestamp: DataTypes.BIGINT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
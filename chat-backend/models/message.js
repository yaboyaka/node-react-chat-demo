'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING,
    text: DataTypes.TEXT,
    created_at: DataTypes.BIGINT
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};
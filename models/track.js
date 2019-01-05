'use strict';
module.exports = (sequelize, DataTypes) => {
  const track = sequelize.define(
    'track',
    {
      track_name: DataTypes.STRING,
      track_duration: DataTypes.STRING
    },
    {}
  );
  track.associate = function(models) {
    track.belongsTo(models.album);
  };
  return track;
};

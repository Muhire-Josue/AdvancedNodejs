module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Blog.associate = models => {
    Blog.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return Blog;
};

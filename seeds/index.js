const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedTags = require('./tag-seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedTags();
  console.log('--------------');

  await seedCategories();
  console.log('--------------');

  process.exit(0);
};

seedAll();
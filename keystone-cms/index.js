require('dotenv/config');
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'keystone-cms';
const adapterConfig = { mongoUri: process.env.DB_URI };

const PostSchema = require('./lists/posts.js');


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList('Post', PostSchema);

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true })],
};

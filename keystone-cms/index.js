require('dotenv/config');
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'keystone-cms';
const adapterConfig = { mongoUri: process.env.DB_URI };

const PostSchema = require('./lists/posts.js');
const UserSchema = require('./lists/users.js');


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList('Post', PostSchema);
keystone.createList('User', UserSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identifyField: 'email',
    identifyField: 'username',
    secretField: 'password',
    protectIdentities: true
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true, authStrategy: authStrategy })],
};

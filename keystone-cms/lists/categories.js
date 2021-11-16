const { Text, Relationship } = require('@keystonejs/fields');
const { AutoIncrement  } = require('@keystonejs/fields-auto-increment');

module.exports = {
  fields: {
    name: { type: Text },
    posts: { type: Relationship, ref: 'Post', many: true}
  }
}

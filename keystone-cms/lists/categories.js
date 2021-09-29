const { Text } = require('@keystonejs/fields');
const { AutoIncrement  } = require('@keystonejs/fields-auto-increment');

module.exports = {
  fields: {
    categoryName: { type: Text },
  }
}

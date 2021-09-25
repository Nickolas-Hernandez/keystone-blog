const { Text, Password } = require('@keystonejs/fields');

module.exports = {
  fields: {
    email: { type: Text, isUnique: true },
    username: { type: Text, isUnique: true },
    password: { type: Password },
  }
}

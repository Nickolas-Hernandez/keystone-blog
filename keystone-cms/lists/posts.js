const { Text, File } = require('@keystonejs/fields');

module.exports = {
  fields: {
    title: { type: Text, isRequired: true },
    image: {type: File}
    // image field
    // date field
  }
}

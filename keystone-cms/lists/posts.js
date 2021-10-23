const { Text, File, DateTime, Select, Checkbox, Relationship } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const fileAdapter = new LocalFileAdapter({
  src: '../../images',
});

module.exports = {
  fields: {
    title: { type: Text, isRequired: true },
    image: {type: File, adapter: fileAdapter},
    content: {
      type: Wysiwyg,
      editorConfig: {
        branding: false,
      },
    },
    // createdAt: {
    //   type: DateTime,
    //   format: 'yyyy/dd/mm HH:mm'
    // }
    category: { type: Relationship, ref: 'Category'},
    isFeatured: { type: Checkbox }
  }
}

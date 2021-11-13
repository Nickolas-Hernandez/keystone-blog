const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

module.exports = {
 type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identifyField: 'email',
    secretField: 'password',
    protectIdentities: true
  }
}

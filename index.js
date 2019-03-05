module.exports = {
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      classes: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'comma-dangle': 'off'
  }
}

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      customSyntax: 'postcss-styled-syntax'
    }
  ],
  rules: {
    'function-no-unknown': null,
    'annotation-no-unknown': null,
    'function-name-case': null,
    'value-keyword-case': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'no-empty-source': null,
    'import-notation': null
  }
};

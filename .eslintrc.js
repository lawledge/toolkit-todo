module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    // 'jsx-quotes': [2, 'prefer-single'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-prototype-builtins': 0,
    'no-confusing-arrow': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'operator-linebreak': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'prefer-destructuring': 0,
    'global-require': 0,
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
    'comma-dangle': 0,
    'arrow-parens': 0,
    'react/jsx-curly-newline': 0,
    semi: 0,
    'no-undef': 0,
    'no-console': 0,
    'prettier/prettier': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unreachable': 1,
    quotes: [2, 'single', { avoidEscape: true }],
    'func-names': 0,
    'react/jsx-fragments': [1, 'element'],
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'react/prop-types': 1,
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/forbid-prop-types': 0,
    'react/no-children-prop': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-indent': 0,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 2,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    indent: 0,
    'arrow-body-style': 0,
    'no-unused-vars': 1,
    'no-else-return': ['error', { allowElseIf: true }],
    'no-plusplus': 0,
    'no-shadow': 0,
    'spaced-comment': 1,
    'max-len': 1,
    'class-methods-use-this': 0,
    'no-mixed-operators': [
      0,
      {
        allowSamePrecedence: 1,
      },
    ],
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'object-curly-spacing': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': 0,
    'template-tag-spacing': 0,
  },
};

module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'true', // <--- THIS IS THE NEW RULE to empty array dependencies
  },
};

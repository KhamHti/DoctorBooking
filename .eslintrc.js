module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks', 'react'],
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0, // <--- THIS IS THE NEW RULE to empty array dependencies
    'react-native/no-inline-styles': 0,
  },
};

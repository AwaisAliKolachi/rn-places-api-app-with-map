module.exports = {
  plugins: [ [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: './.env',
      },
    ], 'react-native-reanimated/plugin'],
  presets: ['module:@react-native/babel-preset'],
};
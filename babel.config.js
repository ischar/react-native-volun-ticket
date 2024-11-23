module.exports = {
  presets: ['babel-preset-expo'], // Expo 프로젝트일 경우
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      allowUndefined: true,
    }],
  ],
};
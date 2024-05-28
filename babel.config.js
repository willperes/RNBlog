module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@/components': './src/components',
          '@/domain': './src/domain',
          '@/routes': './src/routes',
          '@/screens': './src/screens',
          '@/theme': './src/theme',
        },
      },
    ],
  ],
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            "@AppImages": './app/assets/images/index.js',
            "@ReduxActions": './app/redux/actions.js',
            "@ReduxStore": './app/redux/store.js',
            "@Loader": './app/components/Loader.js',
            "@Toast": './app/components/Toast.js',
            "@withLoader": './app/actions/withLoader.js',
            "@withToast": './app/actions/withToast.js',
          },
        },
      ],
    ],
  };
};

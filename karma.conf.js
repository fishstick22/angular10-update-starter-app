// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angular10-update-starter-app'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    // https://stackoverflow.com/questions/44460733/how-to-configure-karma-to-include-global-scss-files-for-an-angular-cli-project/44498689#44498689
    // files: [
    //   { pattern: './src/test.ts', watched: false },
    //   { pattern: './src/dummy.scss', watched: true,  included: true, served: true },
    //   { pattern: './src/styles.scss', watched: true,  included: true, served: true }
    // ],
    // preprocessors: {
    //   './src/test.ts': ['@angular/cli'],
    //   './src/dummy.scss': ['scss'],
    //   './src/styles.scss': ['scss']
    // },

    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};

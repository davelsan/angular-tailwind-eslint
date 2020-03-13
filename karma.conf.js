// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage-istanbul-reporter',
      'karma-verbose-reporter',
      '@angular-devkit/build-angular/plugins/karma'
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/homepage-ng'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml', 'verbose'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadless: {
          base: 'Chrome',
          flags: [
              '--headless',
              '--disable-gpu',
              '--no-sandbox',
              '--remote-debugging-port=9222',
          ]
      }
    },
    browsers: [
        'Chrome',
        'ChromeHeadless',
    ],
  });
};

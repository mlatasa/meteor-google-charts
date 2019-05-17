Package.describe({
  name: 'mlatasa:google-charts',
  summary: 'Easy Google Charts for Meteor',
  version: '0.0.9',
  git: 'https://github.com/mlatasa/meteor-google-charts'
});

Package.onUse(function(api) {
  api.use('underscore');
  api.versionsFrom('1.4.2');
  api.addFiles('mlatasa_google-charts.js');
  api.export(['drawChart'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mlatasa:google-charts');
  api.addFiles('mlatasa_google-charts-tests.js');
});

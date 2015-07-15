Package.describe({
  name: 'girassolbit:materialize-stylus',
  version: '0.0.1',
  summary: 'A Meteor package that adds Materialize with Stylus in your Application',
  git: 'https://github.com/girassolbit/meteor-materialize-stylus.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.addFiles('materialize-stylus.js');
});


//
// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('girassolbit:materialize-stylus');
//   api.addFiles('materialize-stylus-tests.js');
// });

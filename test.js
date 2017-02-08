require('angular');
require('angular-mocks/angular-mocks');
require('angular-route');
require('./node_modules/angular-resource/angular-resource.js');
require('./client/angular/index');

const testsContext = require.context('./test', true, /\.spec\.js/);
testsContext.keys().forEach(testsContext);
require('angular');
require('angular-mocks/angular-mocks');
require('./modules');
require('./requireAngular.js');

const testsContext = require.context('./test', true, /\.spec\.js/);
testsContext.keys().forEach(testsContext);
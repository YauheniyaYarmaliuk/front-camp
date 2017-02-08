require('angular');
require('angular-mocks/angular-mocks');
require('./modules');
//require('./client/angular/index.js');
require('./requireAngular.js');
//require ('./client/angular/app.js');
const testsContext = require.context('.', true, /\.spec\.js/);
testsContext.keys().forEach(testsContext);
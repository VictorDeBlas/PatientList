'use strict';

var angular = require('angular');

module.exports = angular.module('medtep.patient-list', [

	require('./services'),
	require('./routes')
])

.name;
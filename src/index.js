'use strict';

var angular = require('angular');

module.exports = angular.module('medtep', [

	require('./patient-list'),

	require('angular-route')
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/patientList'
	});
})

.name;

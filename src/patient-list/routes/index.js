'use strict';

var angular = require('angular');

module.exports = angular.module('medtep.patient-list.routes', [

	require('angular-route'),
])

.config(require('./PatientListRoute.config'))

.name;
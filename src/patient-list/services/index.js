'use strict';

var angular = require('angular');

module.exports = angular.module('medtep.patient-list.services', [
])

.factory('patientListRemote', require('./PatientListRemote.factory'))
.factory('patientListService', require('./PatientListService.factory'))
.factory('patientStatusService', require('./PatientStatusService.factory'))
.factory('patientStatusRemote', require('./PatientStatusRemote.factory'))

.name;
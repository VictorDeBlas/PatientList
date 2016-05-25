'use strict';

var angular = require('angular');

module.exports = angular.module('medtep.patient-list.services', [
])

//.factory('Item', require('./Item.factory'))
.factory('patientListRemote', require('./PatientListRemote.factory'))
.factory('patientListService', require('./PatientListService.factory'))

.name;
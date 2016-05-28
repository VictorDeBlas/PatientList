'use strict';

module.exports = PatientStatusRemoteFactory;

/* @ngInject */
function PatientStatusRemoteFactory($http) {
	var service = {
		loadPatientStatus: loadPatientStatus
	};
	return service;

	//////

	function loadPatientStatus(params) {
		return $http({
			url:  'https://demo3417391.mockable.io/patient_status',
			method: 'GET',
			params: params
		}).then( function(response) {
				return response.data.results;
			});
	}
}
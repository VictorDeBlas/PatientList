'use strict';

module.exports = PatientListRemoteFactory;

/* @ngInject */
function PatientListRemoteFactory($http) {
	var service = {
		loadPatients: loadPatients,
		loadMorePatients: loadMorePatients
	};
	return service;

	//////

	function loadPatients() {
		return $http.get('https://demo3417391.mockable.io/patients')
			.then( function(response) {
				return response.data.results;
			});
	}

	function loadMorePatients() {
		//var startItem = page * 5, endItem = startItem + 5;
		return $http.get('https://demo3417391.mockable.io/patients')
			.then( function(response) {
				return response.data.results;
			});
	}
}
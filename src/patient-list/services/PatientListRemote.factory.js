'use strict';

module.exports = PatientListRemoteFactory;

/* @ngInject */
function PatientListRemoteFactory($http) {
	var service = {
		loadPatients: loadPatients,
		loadMorePatients: loadPatients
	};
	return service;

	//////

	function loadPatients(page) {
		return $http({
			url:  'https://demo3417391.mockable.io/patients',
			method: 'GET',
			params: {
				page: page
			}
		}).then( function(response) {
				return {
					patients: response.data.results,
					nextPage: response.data.next_page
				};
			});
	}
}
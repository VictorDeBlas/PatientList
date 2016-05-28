'use strict';

module.exports = PatientListService;

/* @ngInject */
function PatientListService(patientListRemote) {
	var service = {
		loadPatients: loadPatients,
		loadMorePatients:loadMorePatients
	};

	return service;

	//////


	function loadPatients(params) {

		return patientListRemote.loadPatients(params)
			.then( function(response) {
				return response;
			});
	}

	function loadMorePatients(page) {
		return patientListRemote.loadMorePatients(page)
			.then( function(response) {
				return response;
			});
	}
	
}
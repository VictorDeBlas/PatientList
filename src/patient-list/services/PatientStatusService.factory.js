'use strict';

module.exports = PatientStatusService;

/* @ngInject */
function PatientStatusService(patientStatusRemote) {
	var service = {
		loadPatientStatus: loadPatientStatus
	};

	return service;

	//////


	function loadPatientStatus(params) {

		return patientStatusRemote.loadPatientStatus(params)
			.then( function(response) {
				return response;
			});
	}
	
}
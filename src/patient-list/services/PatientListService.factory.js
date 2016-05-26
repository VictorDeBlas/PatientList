'use strict';

module.exports = ItemListService;

/* @ngInject */
function ItemListService(patientListRemote) {
	var service = {
		loadPatients: loadPatients,
		loadMorePatients:loadMorePatients
	};

	return service;

	//////


	function loadPatients() {

		return patientListRemote.loadPatients()
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
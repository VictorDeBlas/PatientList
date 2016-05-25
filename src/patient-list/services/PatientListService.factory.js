'use strict';

module.exports = ItemListService;

/* @ngInject */
function ItemListService(patientListRemote) {
	var service = {
		loadPatients: loadPatients,
		loadMorePatients:loadMorePatients,
		getTotalItems: getTotalItems
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

	function getTotalItems() {
		return patientListRemote.getTotalItems()
			.then( function(response) {
				return response;
			});
	}
	
}
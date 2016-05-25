'use strict';

module.exports = PatientListRemoteFactory;

/* @ngInject */
function PatientListRemoteFactory($http) {
	var service = {
		loadPatients: loadPatients,
		loadMorePatients: loadMorePatients,
		getTotalItems: getTotalItems
	};
	return service;

	//////

	function loadPatients() {
		return $http.get('https://demo3417391.mockable.io/patients')
			.then( function(response) {
				console.log(response);
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

	function getTotalItems() {
		return $http.get('/src/item-list/services/items.json')
			.then( function(response) {
				return response.data.items.length;
			});
	}
}
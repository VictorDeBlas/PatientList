'use strict';

module.exports = PatientListRouteConfig;

/* @ngInject */
function PatientListRouteConfig($routeProvider) {
	$routeProvider.when('/patientList', {
		template: require('./PatientListRoute.tpl.html'),
		controller: PatientListRouteController,
		controllerAs: 'vm',
		resolve: {
			items: PatientListResolver,
			totalItems: PatientListTotalResolver
		}
	});
}

/* @ngInject */
function PatientListResolver(patientListService) {
	return patientListService.loadPatients();
}

function PatientListTotalResolver(patientListService) {
	return patientListService.getTotalItems();
}

/* @ngInject */
function PatientListRouteController(patients, totalItems, patientListService) {
	var vm = this, page = 0, numberPatients = totalItems;

	vm.patients = patients;
	vm.loadMorePagesAvailable = true;

	vm.loadMore = loadMorePatients;

	///////


	/////// PUBLIC FUNCTIONS

	function loadMorePatients() {
		page += 1;
		patientListService.loadMorePatients(page)
			.then(loadMoreSuccess);
	}

	
	/////// PRIVATE FUNCTIONS

	function loadMoreSuccess( response ) {
		vm.patients.push.apply(vm.patients, response);

		if ( vm.patients.length >= numberPatients ) {
			vm.loadMorePagesAvailable = false;
		}
	}
	
}

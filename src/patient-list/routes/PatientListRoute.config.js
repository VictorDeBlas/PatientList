'use strict';

module.exports = PatientListRouteConfig;

/* @ngInject */
function PatientListRouteConfig($routeProvider) {
	$routeProvider.when('/patientList', {
		template: require('./PatientListRoute.tpl.html'),
		controller: PatientListRouteController,
		controllerAs: 'vm',
		resolve: {
			patients: PatientListResolver
		}
	});
}

/* @ngInject */
function PatientListResolver(patientListService) {
	return patientListService.loadPatients();
}


/* @ngInject */
function PatientListRouteController(patients) {
	//patientListService
	var vm = this;

	vm.sort = {
		column: 'surname',
		descending: false
	};
	vm.head = {
		name: 'Name',
		surname: 'Surname',
		id: 'Id'
	};
	vm.patients = patients;
	
	vm.changeSorting = changeSorting;

	///////


	/////// PUBLIC FUNCTIONS

	function changeSorting(column) {
		var sort = vm.sort;
		if (sort.column === column) {
			sort.descending = !sort.descending;
		} else {
			sort.column = column;
			sort.descending = false;
		}
	}

	//http://stackoverflow.com/questions/19122942/angular-js-sorting-rows-by-table-header
	//http://jsfiddle.net/vojtajina/js64b/14/

	
	/////// PRIVATE FUNCTIONS

	
	
}

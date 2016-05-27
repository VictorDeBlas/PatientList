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

	vm.orderByField = 'name';
	vm.reverseSort = false;
	vm.patients = patients;
	
	vm.changeSorting = changeSorting;

	///////


	/////// PUBLIC FUNCTIONS

	


	//http://stackoverflow.com/questions/19122942/angular-js-sorting-rows-by-table-header
	//http://jsfiddle.net/vojtajina/js64b/14/

	
	/////// PRIVATE FUNCTIONS

	
	
}

'use strict';

module.exports = PatientListRouteConfig;

/* @ngInject */
function PatientListRouteConfig($routeProvider) {
	$routeProvider.when('/patientList', {
		template: require('./PatientListRoute.tpl.html'),
		controller: PatientListRouteController,
		controllerAs: 'vm',
		resolve: {
			patientsInfo: PatientListResolver,
			status: PatientStatusResolver
		}
	});
}

/* @ngInject */
function PatientListResolver(patientListService) {
	return patientListService.loadPatients(1);
}

/* @ngInject */
function PatientStatusResolver(patientStatusService) {
	return patientStatusService.loadPatientStatus();
}


/* @ngInject */
function PatientListRouteController(patientsInfo, status, patientListService) {
	
	var vm = this;

	vm.orderByField = 'name';
	vm.reverseSort = false;
	vm.patients = patientsInfo.patients;
	vm.status = status;
	vm.page = 1;
	vm.hasMorePages = ( patientsInfo.nextPage ) ? true : false;

	vm.loadMorePatients = loadMorePatients;

	activate();

	function activate(){
		generatePatientStatusArray();
	}


	///////////////////// PUBLIC FUNCTIONS

	function loadMorePatients() {
		vm.page = vm.page + 1;
		patientListService.loadMorePatients(vm.page)
			.then( loadMorePatientsSuccess );
	}


	///////////////////// PRIVATE FUNCTIONS

	function generatePatientStatusArray() {
		var actualStatus, statusArrayLength = vm.status.length;

		for ( var i = 0; i < statusArrayLength; i++ ) {
			actualStatus = vm.status[i];
			if ( vm.patients[ actualStatus.patient - 1 ] ) {
				vm.patients[ actualStatus.patient - 1 ].status = actualStatus.status;
			}
		}
	}

	function loadMorePatientsSuccess( response ) {
		vm.patients = vm.patients.concat(response.patients);
		vm.hasMorePages = (response.nextPage) ? true : false;
		generatePatientStatusArray();
	}

}

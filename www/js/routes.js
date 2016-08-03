angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.aboutUs', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('tabsController.contactUs', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('principal', {
    url: '/page5',
    templateUrl: 'templates/principal.html',
    controller: 'principalCtrl'
  })

  .state('departments', {
    url: '/page6',
    templateUrl: 'templates/departments.html',
    controller: 'departmentsCtrl'
  })

  .state('centralLibrary', {
    url: '/page7',
    templateUrl: 'templates/centralLibrary.html',
    controller: 'centralLibraryCtrl'
  })

  .state('campusHostels', {
    url: '/page8',
    templateUrl: 'templates/campusHostels.html',
    controller: 'campusHostelsCtrl'
  })

  .state('transport', {
    url: '/page9',
    templateUrl: 'templates/transport.html',
    controller: 'transportCtrl'
  })

  .state('facultyContacts', {
    url: '/page10',
    templateUrl: 'templates/facultyContacts.html',
    controller: 'facultyContactsCtrl'
  })

  .state('adminAccounts', {
    url: '/page11',
    templateUrl: 'templates/adminAccounts.html',
    controller: 'adminAccountsCtrl'
  })

  .state('examBranch', {
    url: '/page12',
    templateUrl: 'templates/examBranch.html',
    controller: 'examBranchCtrl'
  })

  .state('electricalElectronicsEngineering', {
    url: '/page13',
    templateUrl: 'templates/electricalElectronicsEngineering.html',
    controller: 'electricalElectronicsEngineeringCtrl'
  })

  .state('informationTechnology', {
    url: '/page14',
    templateUrl: 'templates/informationTechnology.html',
    controller: 'informationTechnologyCtrl'
  })

  .state('eCE', {
    url: '/page15',
    templateUrl: 'templates/eCE.html',
    controller: 'eCECtrl'
  })

  .state('computerScienceEngineering', {
    url: '/page16',
    templateUrl: 'templates/computerScienceEngineering.html',
    controller: 'computerScienceEngineeringCtrl'
  })

  .state('basicSciencesAndHumanities', {
    url: '/page17',
    templateUrl: 'templates/basicSciencesAndHumanities.html',
    controller: 'basicSciencesAndHumanitiesCtrl'
  })

  .state('centralLibrary2', {
    url: '/page18',
    templateUrl: 'templates/centralLibrary2.html',
    controller: 'centralLibrary2Ctrl'
  })

  .state('campusHostels2', {
    url: '/page19',
    templateUrl: 'templates/campusHostels2.html',
    controller: 'campusHostels2Ctrl'
  })

  .state('adminAccounts2', {
    url: '/page21',
    templateUrl: 'templates/adminAccounts2.html',
    controller: 'adminAccounts2Ctrl'
  })

  .state('page', {
    url: '/page22',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('examBranch2', {
    url: '/page23',
    templateUrl: 'templates/examBranch2.html',
    controller: 'examBranch2Ctrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});
/**
 * @ngdoc controller
 * @name appointerxApp.main.controller:MainController
 * @description
 * Controls mainly nothing currently
 */

(function () {
  'use strict';

  // register the controller as MainController
  angular
    .module('appointerxApp.main')
    .controller('MainController', MainController);

  /**
   * @ngdoc function
   * @name appointerxApp.main.provider:MainController
   * @description
   * Provider of the {@link appointerxApp.main.controller:MainController MainController}
   *
   * @param {Service} $scope The scope service to use
   * @param {Service} $http The http service to use
   */

  // MainController.$inject = [];

  function MainController() {
    var vm = this;
  }

})();

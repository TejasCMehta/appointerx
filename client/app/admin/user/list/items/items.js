  /**
   * @ngdoc overview
   * @name appointerxApp.admin.user.list.items
   * @requires ui.router
   * @requires components/listImage
   *
   * @description
   * The `appointerxApp.admin.user.list.items` module which provides:
   *
   * - {@link appointerxApp.admin.user.list.items.controller:UserItemsController UserItemsController}
   */

(function () {
  'use strict';

  angular
    .module('appointerxApp.admin.user.list.items', [
      'ui.router',
      'appointerxApp.listImage'
    ]);

})();

'use strict';
/**
 * @ngInject
 */
function HeaderController() {
  var vm = this;
  vm.menuItems = menu();

  console.log('HeaderController ist geladen...');

  function menu() {
    return ['list', 'create'];
  }

}
module.exports = HeaderController;
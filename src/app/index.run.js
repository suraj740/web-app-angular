(function() {
  'use strict';

  angular
    .module('newWebProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

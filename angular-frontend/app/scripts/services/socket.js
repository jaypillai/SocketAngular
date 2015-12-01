'use strict';
/*angular.module('chatApp')
.factory('chatSocket', function (socketFactory) {
      var socket = socketFactory();
      socket.forward('broadcast');
      return socket;
  });
*/

angular.module('chatApp')
.factory('chatSocket',socketService);
   

socketService.$inject = ['$rootScope', 'api'];

/* $ngInject */
function socketService($rootScope, api) {

    var socket = window.io(api),
        service = {
            on: on,
            remove: removeSocket
        };

    return service;

    function on(eventName, callback) {
        socket.on(eventName, callback);
    }

    function removeSocket() {
        socket.removeAllListeners();
    }
}


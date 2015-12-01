

chatApp = angular
  .module('chatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.bootstrap',
    'ngRoute'
  ])
  .value('nickName', 'Anonymous')
  .constant('api', 'http://185.13.90.140:8081/');

chatApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html'
        }).when('/gallery', {
            templateUrl: 'views/gallery.html'
        }).when('/', {
            templateUrl: 'views/main.html'
        }).otherwise({
            redirectTo: '/'
        });
});
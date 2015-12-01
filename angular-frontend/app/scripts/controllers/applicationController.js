'use strict';

angular.module('chatApp')
.controller('applicationController', function ($log, $scope, chatSocket, $location) {
  
  $scope.goLocation = function(screen){
    $(".navDetails .btn-primary").removeClass("btn-primary").addClass("btn-default");
    if(screen=="home"){
      $location.path("/");
      $("#option1").parent().removeClass("btn-default").addClass("btn-primary");
    }else if(screen == "gallery"){
      $location.path("/");
      $("#option2").parent().removeClass("btn-default").addClass("btn-primary");
    }else{
      $location.path("/");
      $("#option3").parent().removeClass("btn-default").addClass("btn-primary");
    }
  };
  
  

  
});


angular.module('chatApp')
.controller('galleryController', function ($log, $scope, chatSocket, $location) {
  
  $scope.goLocation = function(screen){
    $(".navDetails .btn-primary").removeClass("btn-primary").addClass("btn-default");
    if(screen=="home"){
      $location.path("/");
      $("#option1").parent().removeClass("btn-default").addClass("btn-primary");
    }else if(screen == "gallery"){
      $location.path("/");
      $("#option2").parent().removeClass("btn-default").addClass("btn-primary");
    }else{
      $location.path("/");
      $("#option3").parent().removeClass("btn-default").addClass("btn-primary");
    }
  };
  
  

  
});

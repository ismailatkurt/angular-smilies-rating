

var app = angular.module('angularSmiliesRatingDemo', ['angular-smilies-rating']);

app
  .controller('DemoController', DemoController);

DemoController.$inject = ['$scope'];

function DemoController($scope) {


  var self = this;

  $scope.values = "Angular Smilies Rating Demo";

  $scope.demoModel = "";

}

var app = angular.module('angularSmiliesRatingDemo', ['angular-smilies-rating']);

app
  .controller('DemoController', DemoController);

DemoController.$inject = ['$scope'];

function DemoController($scope) {


  var self = this;

  $scope.values = {
    "sad": "sad",
    "neutral": "neutral",
    "normal": "normal",
    "happy": "happy"
  };

  $scope.demoModel = "";

}

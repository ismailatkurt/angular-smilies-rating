(function () {

  var smiliesRating = angular.module('angular-smilies-rating', []);

  var smileyTemplate = '<input id="$1" type="radio" name="$2" ng-model="$3" value="$1" /><label class="drinkcard-cc $1" for="$1"></label>';

  smiliesRating.directive('smiliesRating', ['$compile', function ($compile) {
    return {
      restrict: 'E',
      require: 'ngModel',
      transclude: true,
      scope: {
        values: '=',
        ngModel: '=',
        width: '@'
      },
      link: function (scope, element) {
        var htmlText = '<div class="cc-selector-2">';
        angular.forEach(scope.values, function (value, key) {
          htmlText += '<input id="' + key + '" type="radio" name="smileyTemplate" ng-model="mood" value="' + value + '" />' +
            '<label class="drinkcard-cc ' + key + '" for="' + key + '" style="width: '+scope.width+'; height: '+scope.width+';"></label>';
        });
        htmlText += '</div>';

        console.log(scope.width);

        htmlText = $compile(htmlText)(scope);

        element.append(htmlText);

        element.bind('click', function() {
          scope.$apply(function() {
            scope.ngModel = scope.mood;
          });
        });

      }
    }
  }]);

})();
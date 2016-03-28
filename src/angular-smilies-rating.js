(function () {

  var smiliesRating = angular.module('angular-smilies-rating', []);

  var smileyTemplate = '<input id="$1" type="radio" name="$2" ng-model="$3" value="$1" /><label class="drinkcard-cc $1" for="$1"></label>';

  smiliesRating.directive('smiliesRating', function () {
    return {
      restrict: 'E',
      require: 'ngModel',
      transclude: true,
      scope: {
        values: '@',
        ngModel: '=',
        width: '@'
      },
      template: '<div class="cc-selector-2"><input id="sad" type="radio" name="mood" ng-model="mood" value="sad" /> <label class="drinkcard-cc sad" for="sad"></label><input id="neutral" type="radio" name="mood" ng-model="mood" value="neutral" /> <label class="drinkcard-cc neutral" for="neutral"></label><input id="normal" type="radio" name="mood" ng-model="mood" value="normal" /> <label class="drinkcard-cc normal" for="normal"></label><input id="happy" type="radio" name="mood" ng-model="mood" value="happy" /> <label class="drinkcard-cc happy" for="happy"></label></div>',
      link: function (scope, element, attrs) {
        console.log(scope.values);
        scope.ngModel = 'hopp';
        scope.mood = '';

        element.bind('click', function() {
          scope.$apply(function() {
            scope.ngModel = scope.mood;
          });
        });

      }
    }
  });

})();
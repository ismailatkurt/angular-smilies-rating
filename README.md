# Angular Smilies Rating Directive Component

Instead of traditional star rating, this component uses smiley in order to rate.

 **1. Installation**


    bower install angular-smilies-rating

Do not forget to include js & css files.

    <script src="../bower_components/angular-smilies-rating/dist/angular-smilies-rating.min.js"></script>

    <link rel="stylesheet" href="../bower_components/angular-smilies-rating/dist/angular-smilies-rating.css">

 **2. Usage**

In your controller set values as below:

      $scope.values = {
        "sad": "sad",
        "neutral": "neutral",
        "normal": "normal",
        "happy": "happy"
      };

      $scope.demoModel = "";

In view:

    <smilies-rating values="values" ng-model="demoModel"></smilies-rating>


Now selected smiley will be returned with the value that you have set in your values array in controller.
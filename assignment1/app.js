(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope) {
    $scope.lunch = '';
    $scope.messageColor = '';
    $scope.borderColor = '';
    $scope.checkLunch = function() {
      var filteredArray = filterArray($scope.lunch.split(','))
      if (filteredArray.length > 3) {
        $scope.message = "Too much!";
        $scope.messageColor = 'green';
        $scope.borderColor = 'green-border';
      } else if (filteredArray.length > 0) {
        $scope.message = "Enjoy!";
        $scope.messageColor = 'green';
        $scope.borderColor = 'green-border';
      } else {
        $scope.message = "Please enter data first";
        $scope.messageColor = 'red'
        $scope.borderColor = 'red-border';
      }
    }

    function filterArray(arr) {
      return arr.filter(String);
    }
  }

})();

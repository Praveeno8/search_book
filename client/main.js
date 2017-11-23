angular.module('app', ['chart.js'])
.controller('MyCtrl',['$interval','$http','$scope',function($interval,$http,$scope){
        var refresh = function(){
            var id=[];
            var exchange_rate=[];
            $http.get('/showbooks').then(function successCallback(response) {
                console.log("response value is",response.data);
                $scope.filteredList = response.data;
               }, function errorCallback(response) {
               console.log("responce value is",response);
            });
        };  
         $scope.resetAll = function()
         {
             $scope.filteredList = $scope.allItems ; 
             $scope.newEmpId = '';
             $scope.newName = '';
             $scope.newEmail = '';
             $scope.searchText = ''; 
         }  
         $scope.add = function()
         {
             $scope.allItems.push({EmpId : $scope.newEmpId, name : $scope.newName, Email:$scope.newEmail});
             $scope.resetAll();  
         } 
          $scope.search = function()
          { 
              console.log("search records are",$scope.searchText);
              $http.get('/showbooks/'+$scope.searchText).then(function successCallback(response){
                  $scope.filteredList = response.data;
                  console.log("response value is",response);
              },function errorCallback(response){
                console.log("response value is",response);
              });
          }  
         //$scope.resetAll();   
      refresh();
    //$interval(refresh, 300000);
}]);

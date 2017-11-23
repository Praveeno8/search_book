angular.module('app', [])
.controller('MyCtrl',['$interval','$http','$scope',function($interval,$http,$scope){
        //this function is for showing the default books //
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
           //this is for search query and get the result//
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
      refresh();
    //$interval(refresh, 300000);
}]);

require('./content.css');

angular.module('views').controller("ContentCtrl", ['$scope','$http',function($scope,$http) {
    $scope.msg="User 'tksne' logged in. Say hello to Sven" ;

    //$http.get('http://localhost:8082/api/parties');
    $http({
        method: 'GET',
        url: 'http://localhost:8082/api/parties'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        for (i=0;i<response.data.length;i++){
            console.log(response.data[i]);


        }
        $scope.parties=response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

}]);


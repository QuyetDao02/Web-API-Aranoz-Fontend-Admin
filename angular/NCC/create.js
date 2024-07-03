var myApp = angular.module('MyApp', []);
myApp.controller('nccCtrl', function ($scope, $http) {
    $scope.db = {};
    $scope.addData = function () {
        $http({
            method: 'POST',
            url: current_url + "/api/NhaCungCap/Add-Supplier",
            data: $scope.db,

        }).then(function (res) {
            $scope.data = res.data;
            alert("Thêm bản ghi thành công");
            window.location.href = "../NCC/NhaCungCap.html"

        });
    };
});
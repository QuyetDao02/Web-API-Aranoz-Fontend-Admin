var myApp = angular.module('MyApp', []);
myApp.controller('HDNCtrl', function ($scope, $http) {
    $scope.loaisp = {};
    $scope.addData = function () {
        $http({
            method: 'POST',
            url: current_url + "/api/HoaDonNhap/Add-Input-Bill",
            data: $scope.loaisp,

        }).then(function (res) {
            $scope.data = res.data;
            alert("Thêm bản ghi thành công");
            window.location.href = "../HDN/index.html"

        });
    };
});
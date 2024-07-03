var myApp = angular.module('MyApp', []);
myApp.controller('LoaiDNTCtrl', function ($scope, $http) {
    $scope.loaisp = {};
    $scope.addData = function () {
        $http({
            method: 'POST',
            url: current_url + "/api/LoaiDoNoiThat/Them-LoaiDoNoiThat",
            data: $scope.loaisp,

        }).then(function (res) {
            $scope.data = res.data;
            alert("Thêm bản ghi thành công");
            window.location.href = "../LOAIDNT/LoaiDNT.html"

        });
    };
});
var app = angular.module('MyApp', []);
app.controller("NhaCungCapCtrl", function ($scope, $http) {

    $scope.listsup;
    $scope.NhaCungCap = function () {
        $http({
            method: 'GET',
            url: current_url + '/api/NhaCungCap/get-all-sup',
        }).then(function (response) {
            $scope.listsup = response.data;
            console.log($scope.listsup)
            makeScript('js/main.js')
        });
    };
    $scope.delete = function (id) {
        var ktra = confirm(
            "Bạn có chắc muốn xóa bản ghi này ra khỏi danh sách không?"
        );
        if (ktra) {
            $http({
                method: "DELETE",
                url: current_url + "/api/NhaCungCap/Get-Sup-Id?id=" + id,
            }).then(function (res) {
                $scope.data = res.data;
                alert("Xóa bản ghi thành công");
                $scope.NhaCungCap();
            });
        }
    };

});
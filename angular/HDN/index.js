var app = angular.module('MyApp', []);
app.controller("HDNCtrl", function ($scope, $http) {

    $scope.listLoaiSanPham;
    $scope.HoaDonNhap = function () {
        $http({
            method: 'GET',
            url: current_url + '/api/HoaDonNhap/get-all-input-bill',
        }).then(function (response) {
            $scope.listLoaiSanPham = response.data;
            console.log($scope.listLoaiSanPham)
            makeScript('js/main.js')
        });
    };
    $scope.delete = function (id) {
        var ktra = confirm(
            "Bạn có chắc muốn xóa loại sản phẩm này ra khỏi danh sách không?"
        );
        if (ktra) {
            $http({
                method: "DELETE",
                url: current_url + "/api/HoaDonNhap/delete-input-bill?id=" + id,
            }).then(function (res) {
                $scope.data = res.data;
                alert("Xóa loại sản phẩm thành công");
                $scope.HoaDonNhap();
            });
        }
    };

});

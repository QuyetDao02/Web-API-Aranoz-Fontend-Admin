var myapp = angular.module('MyApp', []);
myapp.controller('HDNCtrl', function ($scope, $http) {
    $scope.category = {};

    // Lấy mã hóa đơn nhập từ URL query string
    var id = window.location.search.substring(window.location.search.indexOf('id')+3);

    // Gửi yêu cầu GET đến API để lấy thông tin hóa đơn nhập
    $http({
        url: current_url + "/api/HoaDonNhap/Get-Input-Bill-Id/" + id,
        method: "GET"
    }).then(function (res) {
        $scope.category = res.data;
        console.log($scope.category)
    });

    // Hàm lưu dữ liệu khi người dùng thay đổi thông tin hóa đơn nhập
    $scope.savedata = function () {
        // Gửi yêu cầu PUT đến API để cập nhật thông tin hóa đơn nhập
        $http({
            method: 'PUT',
            url: current_url + "/api/HoaDonNhap/Update-Input-Bill",
            data: $scope.category,
        }).then(function (res) {
            $scope.data = res.data;
            alert("Thay đổi thông tin bản ghi thành công");
            window.location.href = "../HDN/index.html";
            // window.location.reload;
        });
    }
});
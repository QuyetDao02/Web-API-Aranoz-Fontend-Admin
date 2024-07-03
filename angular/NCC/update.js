var myapp = angular.module('MyApp', []);
myapp.controller('nccCtrl', function ($scope, $http) {
    $scope.db = {};
    
    // Lấy mã sản phẩm hiển thị thông tin
    var id = window.location.search.substring(window.location.search.indexOf('id') + 3);
    
    // Lấy thông tin của nhà cung cấp
    $http({
        url: current_url + "/api/NhaCungCap/Get-Sup-Id/" + id,
        method: "GET"
    }).then(function (res) {
        $scope.db = res.data;
        console.log($scope.db)
    });
    
    // Cập nhật thông tin của nhà cung cấp
    $scope.savedata = function () {
        $http({
            method: 'PUT',
            url: current_url + "/api/NhaCungCap/Update-Supplier",
            data: $scope.db,
        }).then(function (res) {
            $scope.data = res.data;
            alert("Thay đổi thông tin bản ghi thành công");
            window.location.href = "../NCC/NhaCungCap.html"
            // window.location.reload;
        });
    };
});
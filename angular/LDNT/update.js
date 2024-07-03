var myapp = angular.module('MyApp', [])
myapp.controller('LoaiDNTCtrl', function ($scope, $http) {
    $scope.category = {};
    //Lấy mã sản phẩm hiển thị thông tin
    
    var id = window.location.search.substring(window.location.search.indexOf('id')+3);
    $http({
        url: current_url + "/api/LoaiDoNoiThat/Get-category-Id/" + id,
        method: "GET"
    }
    ).then(function (res) {
        $scope.category = res.data;
        console.log($scope.category)
        
    });

    $scope.savedata = function () {
        $http({
            method: 'PUT',
            url: current_url + "/api/LoaiDoNoiThat/Sua-LoaiDoNoiThat",
            data: $scope.category,
        }).then(function (res) {

                $scope.data = res.data;
                alert("Thay đổi thông tin bản ghi thành công");
                window.location.href = "../LOAIDNT/LoaiDNT.html"
                // window.location.reload;
            
        });

    }


});
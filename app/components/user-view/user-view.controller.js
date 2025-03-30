console.log("load user-view");
app.controller('UserViewController', function($scope, $routeParams, $location, UserService) {
    const id = $routeParams.id;
    console.log("user-view");
    UserService.getById(id).then(user => {
      if (!user) {
        $location.path('/404');
      } else {
        $scope.user = user;
  
        // емуляція доступу: "Driver" не має доступу до перегляду
        if (user.user_type === 'Driver') {
          $location.path('/403');
        }
      }
    });
  });
  
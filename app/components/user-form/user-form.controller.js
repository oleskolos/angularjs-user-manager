app.controller('UserFormController', function($scope, $location, $routeParams, UserService) {
    $scope.user = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      user_type: 'Driver'
    };
    $scope.error = null;
    const id = $routeParams.id;
  
    if (id) {
      UserService.getById(id).then(user => {
        if (!user) return $location.path('/404');
        $scope.user = angular.copy(user);
      });
    }
  
    $scope.save = function(form) {
      if (form.$invalid) return;
  
      const action = id ? UserService.update($scope.user) : UserService.add($scope.user);
      action.then(() => {
        $location.path('/users');
      }).catch(err => {
        $scope.error = err;
      });
    };
  
    $scope.cancel = function() {
      $location.path('/users');
    };
  });
  
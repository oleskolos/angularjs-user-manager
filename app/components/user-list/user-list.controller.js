console.log("user-list cont");
app.controller('UserListController', function($scope, UserService) {
  console.log("UserListController loaded");

    $scope.users = [];
  
    function loadUsers() {
      UserService.getAll().then(users => {
        $scope.users = users;
      });
    }
  
    $scope.deleteUser = function(id) {
      if (confirm('Delete this user?')) {
        UserService.delete(id).then(loadUsers);
      }
    };
  
    loadUsers();
  });
  
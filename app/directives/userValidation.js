app.directive('userValidation', function(UserService, $q) {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ngModel) {
        if (attrs.name === 'password') {
          ngModel.$validators.passwordStrength = function(value) {
            return /[A-Za-z]/.test(value) && /\d/.test(value) && value.length >= 8;
          };
        }
  
        if (attrs.name === 'email') {
          ngModel.$validators.emailValid = function(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          };
        }
  
        if (attrs.name === 'username') {
          ngModel.$asyncValidators.uniqueUsername = function(value) {
            return UserService.getAll().then(users => {
              const isEdit = scope.user && scope.user.id;
              const exists = users.some(u => u.username === value && (!isEdit || u.id !== scope.user.id));
              return exists ? $q.reject() : true;
            });
          };
        }
      }
    };
  });
  
console.log("routes");

app.config(function($routeProvider) {
  console.log("$routeProvider", $routeProvider);

  $routeProvider
    .when('/users', {
      templateUrl: 'app/components/user-list/user-list.html',
      controller: 'UserListController'
    })
    .when('/users/view/:id', {
      templateUrl: 'app/components/user-view/user-view.html',
      controller: 'UserViewController'
    })
    .when('/users/edit/:id?', {
      templateUrl: 'app/components/user-form/user-form.html',
      controller: 'UserFormController'
    })    
    .when('/403', {
      templateUrl: 'app/components/errors/403.html'
    })
    .when('/404', {
      templateUrl: 'app/components/errors/404.html'
    })
    .otherwise({
      redirectTo: '/users'
    });

  console.log("route check complete");
});

angular.module('kwiki.auth', [])

.factory('AuthFactory', function ($http, $location, $window, $rootScope) {
  var AuthFact = {};

  AuthFact.addUser = function (userObject) {
    return $http({
      method: 'POST',
      url: $rootScope.host + '/signup',
      data: userObject
    });
  };

  AuthFact.checkUser = function (userObject) {
    return $http({
      method: 'POST',
      url: $rootScope.host + '/login',
      data: userObject
    });
  };

  AuthFact.logOut = function () {
    $http({
      method: 'POST',
      url: $rootScope.host + '/logout'
    }).then(function (res) {
      $window.localStorage.removeItem('com.kwiki');
      $location.path('/login');
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  AuthFact.isAuth = function () {
    return $window.localStorage.getItem('com.kwiki');
  };

  return AuthFact;
})

.controller('AuthCtrl', function ($scope, $rootScope, $state, $window, AuthFactory) {
  $scope.addUser = function (username, password) {
    var userObject = {
      username: username,
      password: password
    };
    AuthFactory.addUser(userObject)
    .then(function (res) {
      $scope.checkUser(username, password);
    })
    .catch(function (err) {
      throw err;
    });
  };
  $scope.checkUser = function (username, password) {
    var userObject = {
      username: username,
      password: password
    };

    AuthFactory.checkUser(userObject).then(function (res) {
      $window.localStorage.setItem('com.kwiki', JSON.stringify(res.data));
      $rootScope.user = res.data;

      $state.go('match');
    });
  };


  $scope.logOut = function () {
    AuthFactory.logOut();
  };
});



























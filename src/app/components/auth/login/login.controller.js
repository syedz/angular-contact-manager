function LoginController(AuthService) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };

  ctrl.loginUser = function(event) {
    return AuthService
      .login(event.user)
      .then(function(user) {
        console.log('SUCCESS', user);
      }, function(reason) {
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);

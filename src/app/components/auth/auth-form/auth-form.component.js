var authForm = {
  templateUrl: './auth-form.html',
  bindings: {
    user: '<',
    onSubmit: '&',
    button: '@',
    message: '@'
  },
  controller: 'AuthFormController'
};

angular
  .module('components.auth')
  .component('authForm', authForm);

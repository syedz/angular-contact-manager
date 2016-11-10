var contactDetail = {
  bindings: {
    contact: '<',
    onSave: '&',
    onUpdate: '&'
  },
  templateUrl: './contact-detail.html',
  controller: 'ContactDetailController'
};

angular
  .module('components.contact')
  .component('contactDetail', contactDetail);

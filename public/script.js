angular.module('app', [])
  .controller('AppController', function ($http) {
    var vm = this

    getHomeworks()

    vm.submit = function (input) {
      saveHomework(input)
    }

    function getHomeworks () {
      $http.get('/api/homework')
        .then(function success (response) {
          vm.homeworks = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function saveHomework (data) {
      $http.post('/api/homework', data)
        .then(function success (response) {
          console.log(response)
          getHomeworks()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }
  })

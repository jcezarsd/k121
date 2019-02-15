angular.module('k121')
    .factory('sorteioService', ['$resource', function ($resource) {

        return $resource(API_URL + 'sorteio/:params', {}, {});

    }]);

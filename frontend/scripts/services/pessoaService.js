angular.module('k121')
    .factory('pessoaService', ['$resource', function ($resource) {

        return $resource(API_URL + 'pessoas/:params', {}, {
            update: {
                method: "PUT"
            }
        });

    }]);

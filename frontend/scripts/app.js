angular
    .module('k121', ['ngResource', 'ngRoute'])
    .config(($routeProvider, $locationProvider) => {

		$locationProvider.hashPrefix('');

        $routeProvider

            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })

            .when('/pessoa', {
                templateUrl: 'views/novaPessoa.html',
                controller: 'PessoaController'
            })

            .when('/pessoa/:id', {
                templateUrl: 'views/novaPessoa.html',
                controller: 'PessoaController'
            })

            .otherwise({
                redirectTo: '/'
            });

    })
	.controller('AppCtrl', ["$scope", "$rootScope", "$route", "$location",
		function($scope, $rootScope, $route, $location) {

			$scope.mensagem = {
				show: false,
				target: 'all'
			};

			function showMessage(texto, tipo, hideOnRouteChange, target) {

				$scope.mensagem = {
					texto: texto,
					tipo: tipo,
					show: true,
					hideOnRouteChange: hideOnRouteChange !== undefined ? hideOnRouteChange : true
				};

			}

			function hideMessage() {

				$scope.mensagem.show = false;

			}

			// Evento de mudanca de rota
			$scope.$on('$routeChangeSuccess', function(scope, next, current) {

				if (!$scope.mensagem)
					return;

				if (!$scope.mensagem.hideOnRouteChange)
					$scope.mensagem.hideOnRouteChange = true;
				else
					hideMessage();

			});

			// Evento de exibição de mensagem
			$scope.$on('showMessageEvent', function(event, texto, tipo, hideOnRouteChange, target) {
				showMessage(texto, tipo, hideOnRouteChange, target);
			});

			// Evento para remover mensagem
			$scope.$on('hideMessageEvent', function(event) {
				hideMessage();
			});

		}

	]);

const API_URL = "/";

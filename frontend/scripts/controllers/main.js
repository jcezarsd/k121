angular.module('k121')
    .controller('MainController', function ($scope, $rootScope, pessoaService, $location, sorteioService) {

        $scope.pessoas = [];

        function buscaPessoas() {

            pessoaService.query(

				(pessoas) => {

					$scope.pessoas = pessoas;

				}, (erro) => {

					$scope.$emit('showMessageEvent', "Houve algum problema ao tentar buscar as pessoas cadastradas!", 'danger');

				}

			);

        };

        buscaPessoas();

        $scope.remover = (pessoa) => {

            if(confirm('Você têm certeza que deseja excluir?')) {

                pessoaService.delete({params: pessoa._id}, buscaPessoas, (erro) => {

					$scope.$emit('showMessageEvent', "Houve algum problema ao tentar excluir essa pessoa!", 'danger');

				});

			}

		}

		$scope.goTo = (route) => {

			$location.path(route);

		}

        $scope.sortear = () => {

            sorteioService.query(

                (pessoas) => {

					$scope.pessoas = pessoas;
					$scope.$emit('showMessageEvent', "Sorteio realizado com sucesso! Um e-mail foi enviado para cada um dos participantes", 'success');

                }, (erro) => {

					$scope.$emit('showMessageEvent', "Houve algum problema ao sortear as pessoas!", 'danger');

				}

			);

        };

    });

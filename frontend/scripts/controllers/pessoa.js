angular.module('k121')
    .controller('PessoaController', function ($scope, $location, $rootScope, $routeParams, pessoaService) {

        if($routeParams.id) {

            pessoaService.get({params: $routeParams.id},
                (pessoa) => {

					$scope.pessoa = pessoa;
					$scope.isEdicao = true;

                }, (erro) => {

                    $scope.$emit('showMessageEvent', erro, 'danger', false);

				}

			);

        } else {

			$scope.pessoa = new pessoaService();

        }

        $scope.save = () => {

			$scope.isEdicao ? $scope.update() : $scope.create();

        };

        $scope.create = () => {

            $scope.pessoa.$save()
                .then(() => {

                    $scope.pessoa = new pessoaService();
					$scope.$emit('showMessageEvent', "Pessoa cadastrada com sucesso", 'success', false);
                    $location.path("#/");

                }).catch((erro) => {

					$scope.mensagem = {texto: "Houve algum problema ao tentar cadastrar essa pessoa, contate o administrador ou tente novamente mais tarde."};

                });
        };

        $scope.update = () => {

            $scope.pessoa.$update(
                {params: $scope.pessoa._id},

                () => {

                    $scope.pessoa = new pessoaService();
					$scope.$emit('showMessageEvent', "Pessoa atualizada com sucesso", 'success', false);
					$location.path("#/");

                }, (erro) => {

					$scope.mensagem = {texto: "Houve algum problema ao tentar editar essa pessoa, contate o administrador ou tente novamente mais tarde."};

				}

			);

		}

		$scope.goTo = (route) => {

			$location.path(route);

		}

    });

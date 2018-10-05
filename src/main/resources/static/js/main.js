var appDbz = angular.module('dbzmod', ['ngAnimate', 'ngRoute']);

appDbz.config(function($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider.when('/personagenspainel', {
            templateUrl: './views/principal.html',
            controller: 'PersonagensController',
            controllerAs: 'vm'
        });

        $routeProvider.when('/personagens/new', {
            templateUrl: './views/criar-personagem.html',
            controller: 'CriacaoController',
            controllerAs: 'vm'
        });

        $routeProvider.otherwise({ redirectTo: '/personagenspainel'})


    });

/*
Loval provider retira a necessidade de usar # no endereço da pagina... mas precisa estar config no back
    (...)$locationProvider){

        $locationProvider.html5Mode(true);
    (...)
*/
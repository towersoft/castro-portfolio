(function () {
    'use strict';

    angular
        .module('kstro', ["ngRoute"])
        .config(kstrConfig);

    kstrConfig.$inject = ['$routeProvider'];

    function kstrConfig($routeProvider) {

        var BASE_PUBLIC_URL = 'js/app';

        $routeProvider.when("/", {
            templateUrl: BASE_PUBLIC_URL + "/home/description.html"
        });
        $routeProvider.when("/projects", {
            template: "<project-list></project-list>"
        });
        $routeProvider.when("/skills", {
            templateUrl: BASE_PUBLIC_URL + "/skill/skills.html",
            controller: "SkillController",
            controllerAs: "skillCtrl"
        });

        $routeProvider.otherwise({
            templateUrl: BASE_PUBLIC_URL + "/error/404.html"
        });

    }

})();
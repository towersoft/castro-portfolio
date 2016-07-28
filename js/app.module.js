(function () {
    'use strict';

    angular.module('kstro', ["ngRoute"]).config(kstrConfig);

    kstrConfig.$inject = ['$routeProvider'];

    function kstrConfig($routeProvider) {

        var BASE_PUBLIC_URL = 'js/app';

        $routeProvider.when("/", {
            templateUrl: BASE_PUBLIC_URL + "/home/description.html"
        });
        $routeProvider.when("/projects", {
            templateUrl: BASE_PUBLIC_URL + "/project/projects.html",
            controller: "ProjectController",
            controllerAs: "projectCtrl"
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
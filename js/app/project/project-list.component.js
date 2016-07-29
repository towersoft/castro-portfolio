(function () {
    'use strict';

    angular
        .module('kstro')
        .component('projectList', {
            templateUrl: 'js/app/project/projects.html',
            controller: ProjectListController,
            controllerAs: 'projectsCtrl'
        });

    //ProjectListController.$inject = ['$http'];

    function ProjectListController() {
        var self = this;

        self.title = "Projects";

    }

})();
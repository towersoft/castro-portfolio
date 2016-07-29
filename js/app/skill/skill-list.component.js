(function () {
    'use strict';

    angular
        .module('kstro')
        .component('skillList', {
            templateUrl: 'js/app/skill/skills.html',
            controller: SkillListController,
            controllerAs: 'skillsCtrl'
        });

    //SkillListController.$inject = [];

    function SkillListController() {
        var self = this;

    }

})();
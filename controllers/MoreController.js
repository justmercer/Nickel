(function() {
    'use strict';

    angular
        .module('app')
        .controller('MoreController', MoreController);
        MoreController.$inject = [];
    function MoreController() {
        var vm = this;
        vm.sponsors = [{name:"James Thompson",amount:200,since:"01/01/2015"},{name:"Meagan Bridges",amount:3100000,since:"12/31/2017"}];
        console.log("sponsors")
        activate();
        ////////////////

        function activate() { }
    }
})();
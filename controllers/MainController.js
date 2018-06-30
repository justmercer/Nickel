(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$timeout'];
    function MainController($timeout) {
        var vm = this;
        $timeout(function(){
            $("#carousel").carousel();
       
           $("a.left").click(function() {
               $("#carousel").carousel("prev");
           });
           $("a.right").click(function() {
           $("#carousel").carousel("next");
           });
        },0)

        activate();

        ////////////////

        function activate() { }
    }
})();
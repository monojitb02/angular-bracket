'use strict';

module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            views: {
                'pages': {
                    template: require('../templates/dashBoard.html'),
                    controller: 'dashBoardCtrl'
                }
            }
        });
};

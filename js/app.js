var mainModule = angular.module('hikick', ['ngRoute']);
mainModule
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/dashboard.html', {
                    templateUrl: 'dashboard.html'
                })
                .when('/general-forms.html', {
                    templateUrl: 'general-forms.html'
                })
                .when('/form-layouts.html', {
                    templateUrl: 'form-layouts.html'
                })
                .when('/form-validation.html', {
                    templateUrl: 'form-validation.html'
                })
                .when('/form-wizards.html', {
                    templateUrl: 'form-wizards.html'
                })
                .when('/wysiwyg.html', {
                    templateUrl: 'wysiwyg.html'
                })
                .when('/buttons.html', {
                    templateUrl: 'buttons.html'
                })
                .when('/icons.html', {
                    templateUrl: 'icons.html'
                })
                .when('/typography.html', {
                    templateUrl: 'typography.html'
                })
                .when('/alerts.html', {
                    templateUrl: 'alerts.html'
                })
                .when('/tabs-accordions.html', {
                    templateUrl: 'tabs-accordions.html'
                })
                .when('/sliders.html', {
                    templateUrl: 'sliders.html'
                })
                .when('/graphs.html', {
                    templateUrl: 'graphs.html'
                })
                .when('/widgets.html', {
                    templateUrl: 'widgets.html'
                })
                .when('/extras.html', {
                    templateUrl: 'extras.html'
                })
                .otherwise({
                    redirectTo: '/dashboard.html'
                });

            /*.when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'chapter.html',
                controller: 'ChapterCtrl',
                controllerAs: 'chapter'
            });*/
            /*
                        $locationProvider.html5Mode(true);*/
        }
    ]);
var log = function() {
    console.log("loaded");
}

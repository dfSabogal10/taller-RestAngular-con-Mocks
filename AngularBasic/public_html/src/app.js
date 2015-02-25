(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule', 'sportsmanModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/sport', {
				templateUrl: 'src/modules/sport/sport.tpl.html'
			}).otherwise('/');
		}]);
       
        mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/sportsman', {
				templateUrl: 'src/modules/sportsman/sportsman.tpl.html'
			}).otherwise('/');
		}]);

	//Configuración módulo sport
	var sportModule = angular.module('sportModule', ['CrudModule', 'MockModule']);

	sportModule.constant('sport.context', 'sports');

	sportModule.config(['sport.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
            
        //Configuración módulo sportsman
	var sportsmanModule = angular.module('sportsmanModule', ['CrudModule', 'MockModule']);

	sportsmanModule.constant('sportsman.context', 'sportsman');

	sportsmanModule.config(['sportsman.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
})();
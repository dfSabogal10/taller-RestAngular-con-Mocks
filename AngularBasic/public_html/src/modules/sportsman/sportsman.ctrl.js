(function () {
	var app = angular.module('sportsmanModule');

	app.controller('sportsmanCtrl', ['$scope', 'CRUDUtils', 'sportsman.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
		}]);
})();



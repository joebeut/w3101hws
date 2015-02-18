(function () {
	'use strict';

	var app = angular.module('app', []);

	app.controller('MainCtrl', function ($http) {
		var main = this;

		$http.get('http://localhost:3000/users')
			.success(function (data) {
				main.users = data;
				console.log(data);
			});

		main.addUser = function (user) {
			$http.post('http://localhost:3000/users', user)
				.success(function (data) {
					console.log("yay it worked");
					main.users = data;
				});
			main.users.push({firstName: main.user.firstName, lastName: main.user.lastName});
		};
	});
})();
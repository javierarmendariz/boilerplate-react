define([], function () {

	'use strict';

	var Component = {

		// is Localhost ?
		isLocalHost: function () {

			var hostname = document.location.hostname;
			var isLocalhost = false;

			if (0 === hostname.indexOf('localhost')) {
				isLocalhost = true;
			}

			return isLocalhost;
		}
	};

	return Component;

});
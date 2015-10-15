define([], function () {

	'use strict';

	var Component = React.createClass({

		id: 'UA-60160846-1',
		appName: 'CV',
		appVersion: '1.0',

		getInitialState: function () {

			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			return null;
		},

		trackPage: function (page) {
			ga('send', {
				hitType: 'pageview',
				page: page
			});
		},

		trackScreenView: function (screenView) {
			if (!!screenView) {
				ga('send', {
					hitType: 'screenview',
					screenName: screenView
				});
			}
		},

		componentDidMount: function () {
			ga('create', this.id, 'auto');


			var fieldsObjects = this.props.fieldsObjects;
			// By now we are going to track everything using the pageview hit type
			this.trackPage(fieldsObjects.screenView);
		},

		componentDidUpdate: function () {
			var fieldsObjects = this.props.fieldsObjects;
			this.trackScreenView(fieldsObjects.screenView);
		},

		render: function () {
			return false;
		},

	});

	return Component;

});
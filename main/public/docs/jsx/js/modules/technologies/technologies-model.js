/**
* Main Menu Model.
* @module Technologies-Model
* @requires module:backbone
* @example
* // JSON Result
* {
*   "title": "The light side of the force"
* }
*/
define(['backbone'], function (Backbone) {

    'use strict';

	var Model = Backbone.Model.extend({
	    	urlRoot: 'http://localhost:3000/technologies-component'
		});

	return Model;

});




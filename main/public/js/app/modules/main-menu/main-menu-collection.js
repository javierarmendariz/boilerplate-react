/**
* Main Menu Collection.
* @module Main-Menu-Collection
* @requires module:backbone
* @example
* // JSON Result
* [
*   {
*     "href": "/#/about-me",
*     "label": "Me"
*   },
*   {
*     "href": "/#/what-do-i-do",
*     "label": "Work"
*   },
*   {
*     "href": "/#/technologies",
*     "label": "Tech"
*   },
*   {
*     "href": "/#/contact-me",
*     "label": "Contact"
*   }
* ]
*/

define(['backbone'], function (Backbone) {

    'use strict';

	var Collection = Backbone.Collection.extend({

            url: function () {

            	var urlString = 'http://www.jearwebdevelopment.com/wp/wp-json/pages/47';

            	if (EnvironmentConfiguration.isLocalHost()) {
					urlString = 'http://localhost:3000/main-menu';
            	}

				return urlString;

            },

            parse: function (response) {

            	if (!EnvironmentConfiguration.isLocalHost()) {
                	response = response.meta.links;
            	}

            	return response;
            }

        });

	return Collection;

});
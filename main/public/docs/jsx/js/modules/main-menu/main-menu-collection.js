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
		// url: 'http://www.jearwebdevelopment.com/wp/wp-json/pages/47',
            url: 'http://localhost:3000/main-menu'

            /*
            parse: function (response) {
                return response.meta.links;
            }
            */

        });

	return Collection

});
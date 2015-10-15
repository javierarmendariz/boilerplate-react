/**
* The title for the Tecnologies Module
* @module Technologies-Title
* @requires module:react-backbone
* @example
* // JXS
* <h1>{this.props.model.get('title')}</h1>
*/

define(['react-backbone'], function (ReactBackbone) {

	'use strict';

    var Component = React.createClass({

        mixins: ['modelChangeAware'],

        render: function () {
            return (
            <h1>{this.props.model.get('title')}</h1>
            );
        }

    });

    return Component;

});

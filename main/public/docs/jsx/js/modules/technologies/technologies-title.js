/**
* The title for the Tecnologies Module
* @module Technologies-Title
* @requires module:react-backbone
* @example
* // JXS
* <h1>{this.props.model.get('title')}</h1>
*/

define(['react-backbone'], function (ReactBackbone) {

    var Component = React.createClass({displayName: "Component",

        mixings: ['modelChangeAware'],

        render: function () {
        console.log(this);
            return (
            React.createElement("h1", null, this.props.model.get('title'))
            );
        }

    });

    return Component;

});

/**
* A link for the Top Main Menu bar (MainMenuLink).
* @module Main-Menu-Link
* @example
* // JSX
* <li>
*       <a href={this.props.model.get('href')} className="link-animation">{this.props.model.get('label')}</a>
* </li>
*/

define([], function () {

    var Component = React.createClass({displayName: "Component",

        render: function () {
            return (
                React.createElement("li", null, 
                React.createElement("a", {href: this.props.model.get('href'), className: "link-animation"}, this.props.model.get('label'))
                )
            );
        }

    });

    return Component;

});

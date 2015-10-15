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

    'use strict';

    var Component = React.createClass({

        render: function () {
            return (
                <li>
                <a href={this.props.model.get('href')} className="link-animation">{this.props.model.get('label')}</a>
                </li>
            );
        }

    });

    return Component;

});

/**
* Contains a list of links elements (MainMenuItems).
* @module Main-Menu-Items
* @requires module:react-backbone
* @requires ./main-menu-link.jsx
* @example
* // JSX
* <ul className="nav navbar-nav">
*       {
*           this.props.collection.map(function (model) {
*               return <MainMenuLink model={model} key={model.cid} />
*           })
*       }
* </ul>
* @see module:Main-Menu-Link
*/

define(['react-backbone', './main-menu-link.jsx'], function (ReactBackbone, MainMenuLink) {

    'use strict';

    var Component = React.createClass({

        mixins: ['collectionChangeAware'],

        render: function () {

            return (
                <ul className="nav navbar-nav">
                    {
                        this.props.collection.map(function (model) {
                            return <MainMenuLink model={model} key={model.cid} />
                        })
                    }
                </ul>
            );

        }

    });

    return Component;

});

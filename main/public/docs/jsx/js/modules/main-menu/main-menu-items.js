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

    var Component = React.createClass({displayName: "Component",

        mixins: ['collectionChangeAware'],

        render: function () {

            return (
                React.createElement("ul", {className: "nav navbar-nav"}, 
                    
                        this.props.collection.map(function (model) {
                            return React.createElement(MainMenuLink, {model: model, key: model.cid})
                        })
                    
                )
            );

        }

    });

    return Component;

});

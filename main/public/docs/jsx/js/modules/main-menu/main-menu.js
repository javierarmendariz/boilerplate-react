/**
* The Main Menu navigation top bar (MainMenu).
* @module Main-Menu
* @namespace Main-Menu
* @requires module:backbone
* @requiers module:component-ajax
* @requires module:react-sticky
* @requires module:./main-menu-items.jsx
* @requires module: ./Main-Menu-Collection.js
* @example
* // JSX
* <section id="main-menu">
*       <Grid fluid={true}>
*           <Row className="menu">
*               <Col xs={12} sm={12} md={12} lg={12} className="no-padding">
*                   <ReactSticky>
*                       <nav className="navbar" ref="navbar" role="navigation" id="topmenu">
*                           <MainMenuItems collection={this.collectionItems} />
*                       </nav>
*                   </ReactSticky>
*               </Col>
*           </Row>
*       </Grid>
* </section>
* @see module:Main-Menu-Items
* @see module:Main-Menu-Collection
*/

define(['backbone', 'component-ajax' ,'react-sticky', './main-menu-items.jsx', './main-menu-collection.js'], function (Backbone, ComponentAjax, ReactSticky, MainMenuItems, MainMenuCollection) {

    'use strict';

    Backbone.ajax = function () {
        return ComponentAjax.apply(this, arguments);
    };

    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;

    var View = React.createClass({displayName: "View",

        model: null,

        getInitialState: function () {
            this.collectionItems = new MainMenuCollection();
            this.collectionItems.fetch({reset: true});

            return null;
        },

        render: function() {
            return (
                React.createElement("section", {id: "main-menu"}, 

                React.createElement(Grid, {fluid: true}, 
                React.createElement(Row, {className: "menu"}, 
                React.createElement(Col, {xs: 12, sm: 12, md: 12, lg: 12, className: "no-padding"}, 
                React.createElement(ReactSticky, null, 
                    React.createElement("nav", {className: "navbar", ref: "navbar", role: "navigation", id: "topmenu"}, 
                    React.createElement(MainMenuItems, {collection: this.collectionItems})
                    )
                )
                )
                )
                )

                )
            );
        }
    });

    return View;
});

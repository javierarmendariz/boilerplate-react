/**
* This includes a dynamic header and technologies list (Technologies-List) feeded with a Backbone Collection.
* @module Technologies
* @namespace Technologies
* @requires module:backbone
* @requires module:./technologies-list.jsx
* @requires module:./technologies-title.jsx
* @see module:Technologies-List
* @see module:Technologies-Title
* @see module:Technologies-Collection
* @see module:Technologies-Model
*/

define(['backbone', './technologies-list.jsx', './technologies-title.jsx', './technologies-collection.js', './technologies-model.js'], function (Backbone, TechnologiesList, TechnologiesTitle, TechnologiesCollection, TechnologiesModel) {

    'use strict';

    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;

    var Module = React.createClass({displayName: "Module",

    getInitialState: function () {
        this.collectionList = new TechnologiesCollection({reset: true});
        this.collectionList.fetch();

        this.model = new TechnologiesModel();
        this.model.fetch();

        return null;
    },

        render: function () {
            return(
                React.createElement("section", {id: "technologies"}, 
                    React.createElement(Grid, null, 
                        React.createElement(Row, null, 
                            React.createElement(Col, {xs: 12, sm: 12, md: 12, lg: 12, xl: 12}, 
                                React.createElement(TechnologiesTitle, {model: this.model}), 
                                React.createElement("hr", null)
                            )
                        ), 
                        React.createElement(TechnologiesList, {collection: this.collectionList})
                    )
                )
            );
        }
    });

    return Module;

});

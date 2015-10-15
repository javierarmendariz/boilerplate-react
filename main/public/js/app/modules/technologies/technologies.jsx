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

    var Module = React.createClass({

    getInitialState: function () {
        this.collectionList = new TechnologiesCollection({reset: true});
        this.collectionList.fetch();

        this.model = new TechnologiesModel({title: "The light side of the force"});
        // this.model.fetch();

        return null;
    },

        render: function () {
            return(
                <section id="technologies">
                    <Grid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <TechnologiesTitle model={this.model} />
                                <hr />
                            </Col>
                        </Row>
                        <TechnologiesList  collection={this.collectionList} />
                    </Grid>
                </section>
            );
        }
    });

    return Module;

});

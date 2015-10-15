/**
* Contains a list of technologies items (TechnologiesList).
* @module Technologies-List
* @requires module:react-backbone
* @requires module:./technologies-item.jsx
* @example
* // JSX
* <Row>
* {
*      this.props.collection.map(function (model) {
*          return <TechnologiesItem model={model} key={model.cid} />
*      })
* }
* </Row>
* @see module:Technologies-Item
*/

define(['react-backbone', './technologies-item.jsx'], function (ReactBackbone, TechnologiesItem) {

    'use strict';

    var Row = ReactBootstrap.Row;

    var Component = React.createClass({

        mixins: ['collectionChangeAware'],

        render: function () {

            return (
                <Row>
                    {
                        this.props.collection.map(function (model) {
                            return <TechnologiesItem model={model} key={model.cid} />
                        })
                    }
                </Row>
            );
        }
    });

    return Component;

});

/**
* Technology Item that contains an icon, name and description (TechnologiesItem).
* @module Technologies-Item
* @requires module:classnames
* @example
* // JSX
* <Col xs={10} xsOffset={1} sm={6} smOffset={0} md={4} mdOffset={0} className="technologies-item text-center">
*      <p className="text-center technology-icon-container">
*          <span className={className}></span>
*      </p>
*      <h2 className="text-center">{model.get('name')}</h2>
*      <p>
*          {model.get('description')}
*      </p>
*</Col>
*/

define(['classnames'], function (Classnames) {

    'use strict';

    var Col = ReactBootstrap.Col;

    var Component = React.createClass({displayName: "Component",

        render: function () {

            var model = this.props.model;
            var className = Classnames(
                model.get('icon'),
                {
                    'technology-icon': true,
                }
            );

            return (
                React.createElement(Col, {xs: 10, xsOffset: 1, sm: 6, smOffset: 0, md: 4, mdOffset: 0, className: "technologies-item text-center"}, 
                    React.createElement("p", {className: "text-center technology-icon-container"}, 
                        React.createElement("span", {className: className})
                    ), 
                    React.createElement("h2", {className: "text-center"}, model.get('name')), 
                    React.createElement("p", null, 
                        model.get('description')
                    )
                )
            );
        }

    });

    return Component;

})

/**
* Contains the main image an header at top (IntroLaunch).
* @module Intro-Launch
* @namespace Intro-Launch
* @example
* // JSX
* <section id="intro-launch">
*       <Grid fluid={true} elementType={'div'} className="height-inherit">
*           <Row componentClass={'div'} className="title vertical-align-center height-inherit">
*               <div id="landing-darkness"></div>
*               <Col xs={12} sm={12} md={12} lg={12} id="landing-header-text">
*                   <h1>Javier <br /> Armendariz</h1>
*                   <hr />
*                   <h3 className="text-center">An one single page front end web developer<br/> and Javascript lover!</h3>
*               </Col>
*           </Row>
*       </Grid>
* </section>
*/

define([], function () {
    'use strict';

    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;

    var View = React.createClass({displayName: "View",
        render: function () {
            return (
                React.createElement("section", {id: "intro-launch"}, 
                    React.createElement(Grid, {fluid: true, elementType: 'div', className: "height-inherit"}, 
                        React.createElement(Row, {componentClass: 'div', className: "title vertical-align-center height-inherit"}, 
                            React.createElement("div", {id: "landing-darkness"}), 
                            React.createElement(Col, {xs: 12, sm: 12, md: 12, lg: 12, id: "landing-header-text"}, 
                                React.createElement("h1", null, "Javier ", React.createElement("br", null), " Armendariz"), 
                                React.createElement("hr", null), 
                                React.createElement("h3", {className: "text-center"}, "An one single page front end web developer", React.createElement("br", null), " and Javascript lover!")
                            )
                        )
                    )
                )
            );
        }
    });

    return View;

});

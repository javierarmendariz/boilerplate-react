/**
* Module with some text content (AboutMe).
* @module About-Me
* @namespace About-Me
* @example
* // JSX
* <section id="about-me">
*     <Grid>
*         <Row>
*             <Col xs={12} sm={12} md={12} lg={12} xl={12}>
*                 <h1>About Me</h1>
*                 <hr />
*             </Col>
*         </Row>
*         <Row>
*             <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} className="section-box">
*                 <p>
*                 I am a <b>Computer Engineer</b> with 5 years of experience in Web Development. I started programming with PHP, some .Net and Flash. But I have to say Javascript changed my life and my professional career. Now, all my development is based on the <b>Javascript&apos;s world</b>; Backbonejs, Underscorejs, CSS Less, Highchartjs, Slickgrid, jQuery plugins, Requirejs, Nodejs.
*                 </p>
*                 <p>
*                 I really enjoy developing <b>One Single Page applications</b>, always focused in the Web performance and <b>cross browser</b> compatibility.
*                 </p>
*                 <p>
*                 When it comes to team work, I consider it is the best strategy to reach out any goal.
*                 </p>
*                 <p>
*                 Actually, I live in Aguascalientes, Mexico. And I am willing to travel all around the globe!
*                 </p>
*             </Col>
*         </Row>
*     </Grid>
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
                React.createElement("section", {id: "about-me"}, 
                    React.createElement(Grid, null, 
                        React.createElement(Row, null, 
                            React.createElement(Col, {xs: 12, sm: 12, md: 12, lg: 12, xl: 12}, 
                                React.createElement("h1", null, "About Me"), 
                                React.createElement("hr", null)
                            )
                        ), 
                        React.createElement(Row, null, 
                            React.createElement(Col, {xs: 10, xsOffset: 1, sm: 8, smOffset: 2, md: 8, mdOffset: 2, className: "section-box"}, 
                                React.createElement("p", null, 
                                "I am a ", React.createElement("b", null, "Computer Engineer"), " with 5 years of experience in Web Development. I started programming with PHP, some .Net and Flash. But I have to say Javascript changed my life and my professional career. Now, all my development is based on the ", React.createElement("b", null, "Javascript's world"), "; Backbonejs, Underscorejs, CSS Less, Highchartjs, Slickgrid, jQuery plugins, Requirejs, Nodejs."
                                ), 
                                React.createElement("p", null, 
                                "I really enjoy developing ", React.createElement("b", null, "One Single Page applications"), ", always focused in the Web performance and ", React.createElement("b", null, "cross browser"), " compatibility."
                                ), 
                                React.createElement("p", null, 
                                "When it comes to team work, I consider it is the best strategy to reach out any goal."
                                ), 
                                React.createElement("p", null, 
                                "Actually, I live in Aguascalientes, Mexico. And I am willing to travel all around the globe!"
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

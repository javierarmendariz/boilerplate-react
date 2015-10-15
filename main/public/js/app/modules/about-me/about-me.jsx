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

    var View = React.createClass({
        render: function () {
            return (
                <section id="about-me">
                    <Grid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <h1>About Me</h1>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} className="section-box">
                                <p>
                                I am a <b>Computer Engineer</b> with 5 years of experience in Web Development. I started programming with PHP, some .Net and Flash. But I have to say Javascript changed my life and my professional career. Now, all my development is based on the <b>Javascript&apos;s world</b>; Backbonejs, Underscorejs, CSS Less, Highchartjs, Slickgrid, jQuery plugins, Requirejs, Nodejs.
                                </p>
                                <p>
                                I really enjoy developing <b>One Single Page applications</b>, always focused in the Web performance and <b>cross browser</b> compatibility.
                                </p>
                                <p>
                                When it comes to team work, I consider it is the best strategy to reach out any goal.
                                </p>
                                <p>
                                Actually, I live in Aguascalientes, Mexico. And I am willing to travel all around the globe!
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>
            );
        }
    });

    return View;
});

/**
* Module with some text content (ContactMe).
* @module Contact-Me
* @namespace Contact-Me
* @example
* // JSX
* <section id="contact-me">
*         <Grid>
*
*                 <Row>
*                         <Col xs={12} sm={12} md={12} lg={12} xl={12}>
*                                 <h1>Let's work together!</h1>
*                                 <hr />
*                         </Col>
*                 </Row>
*
*                 <Row>
*
*                         <Col xs={11} xsOffset={1} sm={5} smOffset={4} md={4} mdOffset={4} lg={4} lgOffset={4} className="section-box">
*                                 <div className="social-media">
*                                         <span className="symbol">roundedemail</span>
*                                         <a href="emailto:jear2003@hotmail.com" className="link-animation">
*                                                 Email: jear2003@hotmail.com
*                                         </a>
*                                 </div>
*
*                                 <div className="social-media">
*                                         <span className="symbol">roundedlinkedin</span>
*                                         <a href="https://mx.linkedin.com/pub/javier-armendariz/15/4b6/270" target="_blank" className="link-animation">
*                                                 Linkedin: javier-armendariz
*                                         </a>
*                                 </div>
*
*                                 <div className="social-media">
*                                         <span className="symbol">roundednewsvine</span>
*                                         <a href="https://bitbucket.org/jear2003" target="_blank" className="link-animation">
*                                                 Bitbucket: jear2003
*                                         </a>
*                                 </div>
*                         </Col>
*                 </Row>
*         </Grid>
* </section>
*/

define([], function () {

    'use strict';

    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;

    var View = React.createClass({        

        render: function () {

            var isIE = false;
            var navigatorName = window.navigator.appName;
            if (-1 !== navigatorName.indexOf('Microsoft Internet Explorer')) {            
                isIE = true;
            }

            return (
                <section id="contact-me">
                        <Grid>

                                <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <h1>Let's work together!</h1>
                                                <hr />
                                        </Col>
                                </Row>

                                <Row>

                                        <Col xs={11} xsOffset={1} sm={5} smOffset={4} md={4} mdOffset={4} lg={4} lgOffset={4} className="section-box">
                                                <div className="social-media">
                                                        {isIE ? '' : <span className="symbol">roundedemail</span> }
                                                        <a href="mailto:jear2003@hotmail.com" className="link-animation">
                                                                Email: jear2003@hotmail.com
                                                        </a>
                                                </div>

                                                <div className="social-media">
                                                        {isIE ? '' : <span className="symbol">roundedlinkedin</span> }                                                        
                                                        <a href="https://mx.linkedin.com/pub/javier-armendariz/15/4b6/270" target="_blank" className="link-animation">
                                                                Linkedin: javier-armendariz
                                                        </a>
                                                </div>

                                                <div className="social-media">
                                                        {isIE ? '' : <span className="symbol">roundednewsvine</span> }                                                        
                                                        <a href="https://bitbucket.org/jear2003" target="_blank" className="link-animation">
                                                                Bitbucket: jear2003
                                                        </a>
                                                </div>
                                        </Col>
                                </Row>
                        </Grid>
                </section>
            );
        }
    });

    return View;

});

define(['google-analytics', 'scroll-to', 'intro-launch', 'main-menu', 'about-me', 'technologies', 'what-do-i-do', 'contact-me'],
function (GoogleAnalytics, ScrollTo, IntroLaunch, MainMenu, AboutMe, Technologies, WhatDoIDo, ContactMe) {

    'use strict';

    var View = React.createClass({

        googleAnalytics: {
            page: 'Homepage',
            screenView: null
        },

        componentWillReceiveProps: function (nextProp) {
            this.section = nextProp.params.section;
        },

        componentDidMount: function () {
            this.section = this.props.params.section;
            setTimeout(this.scrollToSection, 100);
        },

        componentDidUpdate: function () {
            this.scrollToSection();
        },

        scrollToSection: function () {

            if (!!this.section) {
                var currentWindowYValue = window.scrollY;
                window.scrollTo(0, 0);
                var scrollYValue = React.findDOMNode(this.refs[this.section]).getBoundingClientRect().top - 50;
                window.scrollTo(0, currentWindowYValue);

                ScrollTo(0, scrollYValue, {
                    ease: 'out-expo',
                    duration: 1000
                });
            }
        },

        render: function () {

            this.googleAnalytics.screenView = this.props.location.pathname;

            return (
                <section id="scaffold">
                    <GoogleAnalytics fieldsObjects={this.googleAnalytics} />
                    <IntroLaunch />
                    <MainMenu />
                    <AboutMe ref="about-me" />
                    <WhatDoIDo ref="what-do-i-do" component={this.props.params.component} />
                    <Technologies ref="technologies"/>
                    <ContactMe ref="contact-me"/>
                </section>
            );
        }
    });

    return View;

});

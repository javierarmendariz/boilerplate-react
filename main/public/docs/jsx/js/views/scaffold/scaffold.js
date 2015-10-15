define(['scroll-to', 'intro-launch', 'main-menu', 'about-me', 'technologies', 'what-do-i-do', 'contact-me'],
function (ScrollTo, IntroLaunch, MainMenu, AboutMe, Technologies, WhatDoIDo, ContactMe) {

    var View = React.createClass({displayName: "View",

        elementToScroll:  null,

        componentDidMount: function () {
            this.scrollToSection();
        },

        scrollToSection: function () {
            this.section = this.props.params.section;

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

        componentDidUpdate: function () {
            this.scrollToSection();
        },

        render: function () {
            return (
                React.createElement("section", {id: "scaffold"}, 
                    React.createElement(IntroLaunch, null), 
                    React.createElement(MainMenu, null), 
                    React.createElement(AboutMe, {ref: "about-me"}), 
                    React.createElement(WhatDoIDo, {ref: "what-do-i-do"}), 
                    React.createElement(Technologies, {ref: "technologies"}), 
                    React.createElement(ContactMe, {ref: "contact-me"})
                )
            );
        }
    });

    return View;

});

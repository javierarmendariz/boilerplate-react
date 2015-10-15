define(['react', 'react-router', 'scaffold'], function (React, ReactRouter, Scaffold) {

    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;

    React.render((
        React.createElement(Router, null, 
            React.createElement(Route, {path: "/(:section)", component: Scaffold}
            )
        )
    ), document.body);

});

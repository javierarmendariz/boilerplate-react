define(['react', 'react-router', 'scaffold'], function (React, ReactRouter, Scaffold) {

	'use strict';

    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;

    React.render((
        <Router>
        	<Route path="/(:section)/(:component)" component={Scaffold}></Route>
            <Route path="/(:section)" component={Scaffold}></Route>
        </Router>
    ), document.body);

});

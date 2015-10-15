'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        app: './public/js/app/App.jsx'
    },
    output: {
        path: __dirname + '/public/dist',
        filename: 'App.build.js',
        publicPath: '/dist/'
    },
    resolve: {
        root: __dirname + '/public',
        modulesDirectories: ['node_modules', 'public/js/app/'],
        alias: {
            // Vendors
            'backbone': 'exoskeleton',

            // Application
            'application-router': 'js/app/router/router.jsx',
            'scaffold': 'views/scaffold/scaffold.jsx',
            'google-analytics': 'utils/google-analytics/google-analytics',
            'environment-configuration': 'utils/environment-configuration/environment-configuration',

            // Components
            'intro-launch': 'modules/intro-launch/intro-launch.jsx',
            'main-menu': 'modules/main-menu/main-menu.jsx',
            'about-me': 'modules/about-me/about-me.jsx',
            'technologies': 'modules/technologies/technologies.jsx',
            'what-do-i-do': 'modules/what-do-i-do/what-do-i-do.jsx',
            'contact-me': 'modules/contact-me/contact-me.jsx'
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            },
            {
                test: /exoskeleton\.js$/,
                loader: 'imports?define=>false'
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/^jquery$/),
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactBootstrap': 'react-bootstrap',
            'EnvironmentConfiguration': 'environment-configuration'
        })
        /* For Production only */
        ,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};

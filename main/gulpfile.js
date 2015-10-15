'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleancss = new LessPluginCleanCSS({ advanced: true });
var rename = require('gulp-rename');
var concat = require('gulp-concat');

'use strict';

// CSS and Less
gulp.task('default', ['less', 'css-concatenation'], function (Less, CSS) {
    console.log('The CSS files are ready!');
});

gulp.task('less', function () {
    return gulp.src('./public/css/*.less')
        .pipe(less({
        plugins: [cleancss]
    }))
    .pipe(rename('App.build.css'))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('css-concatenation', function () {
    return gulp.src(['./public/js/vendors/bootstrap/dist/css/bootstrap.min.css', './public/js/vendors/devicon/devicon.min.css'])
        .pipe(concat('Vendors.build.css'))
        .pipe(gulp.dest('./public/dist'));
});

// YUIDoc generation
var jsdoc = require('gulp-jsdoc');
var react = require('gulp-react');

gulp.task('jsdoc', ['jsdoc-jsxtojs'], function () {
    return gulp.src('./public/docs/jsx/js/**/*.js')
        .pipe(jsdoc.parser())
        .pipe(jsdoc.generator('./public/docs/jsx/'));
});

gulp.task('jsdoc-jsxtojs', function () {
    return gulp.src(['./public/js/app/**/*.jsx', './public/js/app/**/*.js'])
        .pipe(react())
        .pipe(gulp.dest('./public/docs/jsx/js'));
});

// Styledown
var styledown = require('gulp-styledown');
gulp.task('styledown', function () {
    gulp.src('./public/css/css.less')
        .pipe(styledown({
            config: './styledown.config.md',
            filename: 'index.html'
    }))
    .pipe(gulp.dest('./public/docs/styleguides'));
});

// Strip Debug
var stripDebug = require('gulp-strip-debug');
gulp.task('strip-debug', function () {
    return gulp.src('./public/dist/*.js')
    .pipe(stripDebug())
    .pipe(gulp.dest('./public/dist'));
});











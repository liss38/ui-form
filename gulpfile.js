'use strict';


// плагины, пакеты
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var uglifyjs = require('gulp-uglifyjs');
var sourcemaps = require('gulp-sourcemaps');


var config = {
	js: [
		'src/js/app/ui/modal.js',
		'src/js/app/ui/textline.js',
		'src/js/app/ui/tumbler.js',
		'src/js/pages/page-auth.js',
	]
};

gulp.task('js:build', function () {
	return gulp.src(config.js)
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(concat('bundle.js'))
		.pipe(sourcemaps.write())
		.pipe(uglifyjs('bundle.min.js', {
			outSourceMap: true
		}))
		.pipe(gulp.dest('build/js/'));
});


// less2css
gulp.task('css:build', function () {
	return gulp.src('src/less/style.less')
		.pipe(less())
		.pipe(postcss([
			autoprefixer({browsers: [
				'last 2 versions'
			]}),
			mqpacker({
				sort: false
			})
		]))
		.pipe(cssmin())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('build/css/'));
});


// watcher
gulp.task('watch', function () {
	gulp.watch('src/less/**/*.*', ['css:build', 'js:build']);
});


// localhost
gulp.task('serve', function() {
	browserSync.init({
		server: './build'
	});

	browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});


// dev work starter
gulp.task('dev', ['watch', 'serve']);
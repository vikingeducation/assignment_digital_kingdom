'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync', 'nodemon'], () => {
});

gulp.task('browser-sync', () => {
	browserSync.init(null, {
		proxy: "localhost:3005/kingdoms",
    browser: "google-chrome",
    port: 7001
	});
  gulp.watch("./views/**/*.handlebars").on('change', browserSync.reload);
  gulp.watch("./public/**/*.*").on('change', browserSync.reload);
});

gulp.task('nodemon', (cb) => {
	var started = false;
	
	return nodemon({
		script: 'index.js'
	})
  .on('start', () => {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true; 
		} 
	});
});
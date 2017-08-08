var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var postcss = require('gulp-postcss');
var livereload = require('gulp-livereload');

// Run a local server
gulp.task('connect', function() {
  connect.server();
});

gulp.task('sass', function () {
  return gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe( postcss( require('postcss-cssnext') ) )
		.pipe(gulp.dest('public/css'))
		.pipe(livereload());
});

gulp.task('html', function () {
	return gulp.src('index.html')
		.pipe(livereload());
});

// Watch for changes and reload the page
gulp.task('watch', function () {
  livereload.listen();
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch("*.html", ['html']);
});

gulp.task('default', [ 'sass', 'connect', 'watch' ]);

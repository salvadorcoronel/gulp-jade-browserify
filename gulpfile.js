var gulp = require('gulp');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var jade = require('gulp-jade');

gulp.task('js', function() {
  	return browserify('./Builds/development/src/js/app.main.js')
	    .bundle()
	    .pipe(source('bundle.js'))
	    .pipe(buffer())
	    .pipe(uglify())
	    .pipe(gulp.dest('./Builds/production/js'));
});

var path = {
    jade: ['./Builds/development/src/templates/**/*.jade'],
    html: './Builds/production/views'
};

gulp.task('jade', function() {
    return gulp.src(path.jade)
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest(path.html))
});

const gulp = require('gulp'),
	  watch = require('gulp-watch'),
	  less = require('gulp-less'),
	  gutil = require('gulp-util'),
		lesshint = require('gulp-lesshint'),
		concat = require('gulp-concat'),
		autoprefix = require('gulp-autoprefixer'),
		lessDir = 'src',
		targetCSSDir = 'public/css';


gulp.task('css', function () {
    return gulp.src(lessDir + '/*.less')
        .pipe(less({ style: 'compressed' }).on('error', gutil.log))
        .pipe(autoprefix('last 2 version'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(targetCSSDir))
});

gulp.task('watch', function () {
    gulp.watch(lessDir + '**/*.less', ['lint','css']);
});

gulp.task('lint', () => {
    return gulp.src('./src/*.less')
        .pipe(lesshint({}))
        .pipe(lesshint.reporter()) // Leave empty to use the default, "stylish"
        .pipe(lesshint.failOnError()); // Use this to fail the task on lint errors
});

gulp.task('default', ['lint', 'css', 'watch']);

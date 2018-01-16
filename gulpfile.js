
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const gulp = require('gulp');
const livingcss = require('gulp-livingcss');
const sass = require('gulp-sass');


// Build the style guide

gulp.task('guide:build', ['css:dist'], () => {
  gulp.src('./dist/*.css')
    .pipe(livingcss('.', {
      preprocess: (context, template, Handlebars) => {
        context.title = 'Britannica Style Guide';

        context.globalStylesheets.push('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css');
        context.globalStylesheets.push('template-styles.css');
      },
      sortOrder: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
    }))
    .pipe(gulp.dest('./docs'));
});


// Build the CSS from our Sass

gulp.task('css:dist', () => {
  gulp.src(['./src/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('britannica-styles.css'))
    .pipe(gulp.dest('./dist'));
});


// Rebuild everything whenever changes to .scss files are made

gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', ['guide:build']);
});


// Start and stop the local server

gulp.task('server:start', () => {
  connect.server({
    livereload: true,
    port: 1234,
    root: 'docs',
  });
});

gulp.task('server:stop', () => {
  connect.serverClose();
});

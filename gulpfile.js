
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const gulp = require('gulp');
const livingcss = require('gulp-livingcss');
const sass = require('gulp-sass');


// Build the style guide

gulp.task('guide:build', ['css:dist'], () => {
  const sourceFiles = './dist/*.css';
  const destination = './docs';

  setTimeout(() => {
    gulp.src(sourceFiles)
      .pipe(livingcss(destination, {
        preprocess: (context, template, Handlebars) => {
          context.title = 'Britannica Style Guide';

          context.globalStylesheets.push('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css');
          context.globalStylesheets.push('template-styles.css');
        },
        sortOrder: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
      }))
      .pipe(gulp.dest(destination));
  }, 250);
});


// Build the CSS from our Sass

gulp.task('css:dist', () => {
  gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('britannica-styles.css'))
    .pipe(gulp.dest('./dist'));
});


// Rebuild everything whenever changes to .scss files are made. Doesn't work so well at the mo...
// todo: figure out why this builds the previous save's version

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.scss', './src/**/*.md'], ['guide:build']);
});


// Start local server, `Ctrl + C` to stop

gulp.task('server:start', () => {
  connect.server({
    livereload: true,
    port: 3000,
    root: 'docs',
  });
});

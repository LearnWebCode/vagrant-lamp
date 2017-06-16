var gulp = require('gulp'),
settings = require('./settings'),
webpack = require('webpack'),
del = require('del'),
browserSync = require('browser-sync').create(),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
colorFunctions = require('postcss-color-function');

gulp.task('styles', function() {
  return gulp.src(settings.themeLocation + 'css/style.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, colorFunctions, autoprefixer]))
    .pipe(gulp.dest(settings.themeLocation));
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    proxy: settings.urlToPreview
  });

  gulp.watch('./**/*.php', function() {
    browserSync.reload();
  });
  gulp.watch(settings.themeLocation + 'css/**/*.css', ['waitForStyles']);
  gulp.watch([settings.themeLocation + 'js/modules/*.js', settings.themeLocation + 'js/scripts.js'], ['waitForScripts']);
});

gulp.task('waitForStyles', ['styles'], function() {
  return gulp.src(settings.themeLocation + 'style.css')
    .pipe(browserSync.stream());
});

gulp.task('waitForScripts', ['scripts'], function() {
  browserSync.reload();
});

gulp.task('deleteDistFolder', ['styles', 'scripts'], function() {
  return del("./dist");
});

gulp.task('copyFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!' + settings.themeLocation + 'css',
    '!' + settings.themeLocation + 'css/**',
    '!' + settings.themeLocation + 'js/modules',
    '!' + settings.themeLocation + 'js/modules/**',
    '!' + settings.themeLocation + 'js/scripts.js',
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder', 'copyFiles']);
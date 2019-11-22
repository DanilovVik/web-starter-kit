/**
 * Watch for file changes
 */
'use strict';

const gulp = require('gulp');

module.exports = function (options) {

  return () => {
    gulp.watch(`js/**/*`, gulp.series(options.tasks.esLint, options.tasks.buildCustomJs));

    gulp.watch(`scss/**/*`, gulp.series(options.tasks.buildSass, options.tasks.buildSassCustom));

    gulp.watch(`html/**/*`, gulp.series(options.tasks.fileInclude, options.tasks.htmlHint));

    gulp.watch(['../public/js/*', '../public/css/*', '!../public/css/*.map', '../public/*.html'])
      .on('change', options.browserSync.reload);
  };
};

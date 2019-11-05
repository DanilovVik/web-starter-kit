/**
 * Compile custom scss files without sourcemaps & Gcmq
 */
'use strict';

const gulp = require('gulp');
const notify = require('gulp-notify');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');

module.exports = function (options) {

  return (cb) => {
    const { files, isGcmq } = options.sassFilesInfo;

    if (files.length > 0) {
      return gulp.src(files)
        .pipe(sass())
        .on('error', notify.onError({
          title: 'Sass compiling error',
          wait: true
        }))
        .pipe(autoprefixer(options.versions))
        .pipe(gulpif(isGcmq, gcmq()))
        .pipe(gulp.dest(`../${options.dest}/css`));
    } else {
      return cb();
    }
  };
};

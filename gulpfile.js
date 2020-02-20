'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const scssSrc = './src/scss/*.scss';
const gcmq = require('group-css-media-queries');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp.src(scssSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', () => {
    gulp.watch(scssSrc, gulp.parallel('sass'));
});


gulp.task('copy-html', () => {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-html:watch', () => {
    gulp.watch('./src/*.html', gulp.parallel('copy-html'));
});

gulp.task('default', function () {
    gulp.src('src/*.css')
        .pipe(gcmq())
        .pipe(gulp.dest('dist'));
});

gulp.task('icons', function () {
    return gulp.src('@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest(dist + '/assets/webfonts/'));
});

gulp.task('build', gulp.parallel('sass', 'copy-html'));

gulp.task('watch', gulp.parallel('sass:watch', ));
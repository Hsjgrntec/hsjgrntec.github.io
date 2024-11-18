const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', ()=>{
    return gulp
        .src('./assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/main.css'));
});

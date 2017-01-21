var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
	return gulp.src('./app/resources/assets/sass/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
	gulp.watch('./resources/assets/sass/**/*.scss', ['sass']);
});


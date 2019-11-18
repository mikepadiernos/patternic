const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nib = require('nib');
const rupture = require('rupture');
const typographic = require('typographic');

gulp.task('theme', function(done) {
	gulp.src('./source/theme.styl')
		.pipe(stylus({
			use: [nib(), rupture(), typographic()]
		}))
		.pipe(gulp.dest('./css/'));
		done();
});

gulp.task('watch', function() {
	gulp.watch('./source/*.styl', ['theme']);
});
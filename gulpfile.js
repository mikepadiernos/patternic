const gulp = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const nib = require('nib');
const rupture = require('rupture');
const typographic = require('typographic');
const csswring = require('csswring');

gulp.task('theme', () => {

	const processors = [
			csswring
		];

	return gulp.src('./source/theme.styl')
		.pipe(stylus({
			use: [nib(), rupture(), typographic()]
		}))
		// .pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
});

gulp.task('seeds', () => {

  const processors = [
    csswring
  ];

  return gulp.src('./source/seeds.styl')
    .pipe(stylus({
      use: [nib(), rupture(), typographic()]
    }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
	gulp.watch('**/*.styl', gulp.series('theme'));
});


const cssnano = require('cssnano');
const gulp = require('gulp');
const nib = require('nib');
const postcss = require('gulp-postcss');
const rupture = require('rupture');
const stylus = require('gulp-stylus');
const typographic = require('typographic');


gulp.task('theme', () => {

	const processors = [
    cssnano
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
    cssnano
  ];

  return gulp.src('./source/seeds.styl')
    .pipe(stylus({
      use: [nib(), rupture(), typographic()]
    }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
	gulp.watch('**/*.styl',  gulp.series('theme'));
});

gulp.task('seeds:watch', () => {
  gulp.watch('**/*.styl',  gulp.series('theme'));
});

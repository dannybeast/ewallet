import gulp from 'gulp';
import config from '../config.js';
let uglify = require('gulp-uglify-es').default;
// import imagemin from 'gulp-imagemin';

gulp.task('copy:img', () => gulp
  .src([
    config.src.img + '/**/*.*',
    '!' + config.src.img + '/svgo/**/*.*'
  ])
  // .pipe(imagemin([], {
  // 	verbose: true
  // }))
  .pipe(gulp.dest(config.dest.img))
);
gulp.task('copy:icons', () => gulp
  .src(config.src.icons + '/**/*.*')
  .pipe(gulp.dest(config.dest.root + '/icons'))
);
gulp.task('copy:fonts', () => gulp
  .src(config.src.fonts + '/**/*.*')
  .pipe(gulp.dest(config.dest.fonts))
);

gulp.task('copy:lib', () => gulp
  .src(config.src.lib + '/**/*.*')
  .pipe(gulp.dest(config.dest.lib))
);


gulp.task("copy:animate", function () {
  return gulp.src(config.src.js + '/screen-animate.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.dest.js));
});


gulp.task('copy:rootfiles', () => gulp
  .src(config.src.root + '/*.*')
  .pipe(gulp.dest(config.dest.root))
);

const build = gulp => gulp.series('copy:img', 'copy:fonts', 'copy:icons', 'copy:animate');
const watch = gulp => () => gulp.watch(config.src.img + '/*', gulp.parallel('copy:img', 'copy:fonts'));

module.exports.build = build;
module.exports.watch = watch;
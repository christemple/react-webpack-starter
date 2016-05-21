import gulp from 'gulp'
import {exec} from 'shelljs';

gulp.task('build', () => {
  if (process.env.NODE_ENV == 'production') {
    exec('./node_modules/webpack/bin/webpack.js -p --config ./webpack.production.config.js');
  } else {
    exec('./node_modules/webpack/bin/webpack.js --config ./webpack.dev.config.js');
  }
});
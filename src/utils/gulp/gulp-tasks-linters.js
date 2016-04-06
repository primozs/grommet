var path = require('path');
var eslint = require('gulp-eslint');
var shelljs = require('shelljs');
var deepAssign = require('deep-assign');

function scssLintExists() {
  return shelljs.which('scss-lint');
}

module.exports = function(gulp, options) {

  var scssLintPath = path.resolve(__dirname, 'scss-lint.yml');
  var esLintPath = path.resolve(__dirname, 'eslintrc');
  var customEslint = options.customEslintPath ?
    require(options.customEslintPath) : {};

  gulp.task('scsslint', function() {
    if (options.scsslint) {
      if (scssLintExists()) {
        var scsslint = require('gulp-scss-lint');
        return gulp.src(options.scssAssets || []).pipe(scsslint({
          'config': scssLintPath
        })).pipe(scsslint.failReporter());
      } else {
        console.error('[scsslint] scsslint skipped!');
        console.error('[scsslint] scss-lint is not installed. Please install ruby and the ruby gem scss-lint.');
      }
    }
    return false;
  });

  gulp.task('jslint', function() {
    var eslintRules = deepAssign({
      configFile: esLintPath
    }, customEslint);
    return gulp.src(options.jsAssets || [])
      .pipe(eslint(eslintRules))
      .pipe(eslint.formatEach())
      .pipe(eslint.failOnError());
  });
};

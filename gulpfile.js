const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
// const { paths, assets, setting } = require("./gulpfile.config");

const _path = {
  src: {
    style: "./project/**/*.scss",
  },
  dist: {
    style: "./project/build/",
  },
};

// apply()

const setting = {
  styles: {
    scss_option: {
      outputStyle: "compressed",
      indentType: "tab",
      indentWidth: 1,
      precision: 3,
      sourceComments: false,
      errLogToConsole: true,
      // importer: moduleImporter({ basedir: path.join(__dirname, 'public/src/assets/scss/') })
      // includePaths: [paths.styles.src]
    },
    rootFontSize: 16,
  },
  scripts: {
    gulp_babel_minify: {
      mangle: {
        keepClassName: false,
        booleans: false,
        deadcode: true,
        simplify: true,
        removeConsole: true,
        numericLiterals: true,
      },
    },
  },
};

function build_styles() {
  return (
    gulp
      .src(_path.src.style)
      .pipe(sourcemaps.init())
      // .pipe(sassGlob())
      .pipe(sass(setting.styles.scss_option).on("error", sass.logError))
      // .pipe(sourcemaps.write())
      .pipe(autoprefixer("last 2 versions"))
      .pipe(gulp.dest(_path.dist.style))
  );
}

gulp.task(`styles`, build_styles);
/**
 * Watch
 */
gulp.task(`watch`, () => {
  gulp.watch(_path.src.style, [`styles`]);
});

/**
 * =================================================================+
 * @ gulp tasks process
 * =================================================================+
 */

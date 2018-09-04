var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require("gulp-uglify-es").default;
var concat = require("gulp-concat");
var destiny = './dist/';
var gulpsync = require('gulp-sync')(gulp);

gulp.task('sass', function () {
  return gulp.src('./resources/assets/sass/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(destiny + 'css'));
});

gulp.task('js', function () {
    gulp.src('./src/*.js')                        // Arquivos que serão carregados, veja variável 'js' no início
    .pipe(concat('bundle.js'))      // Arquivo único de saída
    .pipe(uglify())               // Transforma para formato ilegível
    .pipe(gulp.dest(destiny + 'js/'));          // pasta de destino do arquivo(s)
});

gulp.task('watch', function() {
    gulp.watch('resources/assets/js/**/*.js', ['js']);
    gulp.watch('resources/assets/sass/**/*.scss', ['sass']);
    gulp.watch('resources/assets/images/**/*.*', ['image']);
});



gulp.task('default', gulpsync.sync(['sass', 'js']));

/*
 |--------------------------------------------------------------------------
 | Gulp Font-Awesome Management
 |--------------------------------------------------------------------------
 |
 | We look up into bower dependencies folder to read font-awesome LESS file
 | and get it compiled. After, we copy the font-awesome FONTS folder to
 | public folder
 |
 | Gustavo Ocanto <gustavoocanto@gmail.com>
 |
 */

var gulp = require('gulp'),
    bower = require('gulp-bower');

var config = {
    bowerDir: './public/gocanto-bower'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.less(config.bowerDir + '/font-awesome/less/font-awesome.less');
    mix.task(['bower', 'icons']);
});


var Elixir = require('laravel-elixir');
var Gulp   = require('gulp');
var Task   = Elixir.Task;
var config = require('./config');

Elixir.extend('fonts', function(source) {

    new Task('fonts', function () {

        if ( typeof source === 'string' ) {

            Gulp
            .src(config.bower + source)
            .pipe(Gulp.dest(config.fonts));

        } else {

            for (var key in source) {

                Gulp
                .src(config.bower + source[key])
                .pipe(Gulp.dest(config.fonts));

            }
        }

    });

});


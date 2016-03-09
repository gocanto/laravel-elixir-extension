/*
 | @author Gustavo Ocanto <gustavoocanto@gmail.com>
 |
 */

require('./elixir/extensions')

var elixir  = require('laravel-elixir');

elixir.config.sourcemaps = false;

elixir(function(mix)
{
    mix.fonts([
        '/font-awesome/fonts/**.*',
        '/bootstrap/dist/fonts/**.*'
    ]);

});


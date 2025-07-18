const mix = require('laravel-mix');

mix.js('public/assets/main.js', 'public/build.js')
   .css('public/css/style.css', 'public/build.css')
   .setPublicPath('public')
   .babelConfig({
     presets: ['@babel/preset-env']
   });
const mix = require('laravel-mix');
mix.js('src/app.js', 'public/js')
   .sass('src/style.scss', 'public/css')
   .setPublicPath('public');
mix.disableNotifications();
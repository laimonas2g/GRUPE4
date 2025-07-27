const mix = require('laravel-mix');

mix.js('src/frontend.js', 'public/app.js')
   .sass('src/style.scss', 'public/styles.css')
   .disableNotifications();
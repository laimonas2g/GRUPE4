const mix = require('laravel-mix');

mix.js('src/frontend.mjs', 'public/app.js')
   .sass('src/style.scss', 'public/styles.css')
   .disableNotifications();
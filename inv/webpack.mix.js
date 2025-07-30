const mix = require('laravel-mix');


mix.js('src/app.js', '').sass('src/style.scss', '');
mix.disableNotifications();
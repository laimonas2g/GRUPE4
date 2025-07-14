const mix = require('laravel-mix');
mix.disableNotifications();

mix.js('src/app.js', 'public').sass('src/style.scss', 'public');


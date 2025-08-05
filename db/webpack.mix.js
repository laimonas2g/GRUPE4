const mix = require('laravel-mix');


mix.js('src/app.js', 'public').js('src/app1.js', 'public').sass('src/style.scss', 'public');
mix.disableNotifications();
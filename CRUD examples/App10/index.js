const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express();
//Setup the middleware
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// A Cross-Origin resource fails if it’s:
// to a different domain
// to a different subdomain
// to a different port
// to a different protocol

// Configuring the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

/*
Start mongod: mongod --config  /usr/local/etc/mongod.conf
Reference: https://github.com/mongodb/homebrew-brew
To have launchd start mongodb/brew/mongodb-community now and restart at login:
brew services start mongodb/brew/mongodb-community
Or, if you don't want/need a background service you can just run:
mongod --config /usr/local/etc/mongod.conf
  */
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to the database');
})
.catch((err) => {
    console.log('Could not connect to the database. Exiting now ...', err);
    process.exit();
});

// enabling CORS for all requests
app.use(cors());
// Allow only one domain: const corsOptions = {
//   origin: 'https://yourdomain.com',
// }

// adding Helmet to enhance your API's security
app.use(helmet());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// Add the routes
require('./app/routes/note.routes.js')(app);

app.listen(3001, () => {
    console.log('listening on port 3001');
});
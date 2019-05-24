const express = require('express');
//const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./models/Note');
const passport = require('passport');
const passportConfig = require('./services/passport');
const cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
const app = express();
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('connected to db'))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/noteRoutes')(app);

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

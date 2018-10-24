const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

const SECRET = 'OEufbsuEY1sb2o';
const users = {
  'boljmor_garid@yahoo.com': {
    email: 'boljmor_garid@yahoo.com',
    password: '123'
  }
};

app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['asfasf']
  })
);
app.use(bodyParser.json());

app.post('/emailExists', (req, res) => {
  const { email } = req.body;

  res.send(users[email] ? { taken: true } : null );
});

app.post('/register', (req, res) => {
  const { email } = req.body;

  users[email] = req.body;

  res.send();
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (users[email] && users[email].password === password) {
    jwt.sign({ foo: 'bar' }, SECRET, { expiresIn: '1h' }, (err, token) => {
      res.send({token});
    });
  } else {
    res.send()
  }
})

app.post('/protected', authorize, (req, res) => {
  res.send({ successful: true });
})

function authorize(req, res, next) {
  const token = req.headers.authorization;
  if (token && jwt.verify(token, SECRET)) {
    next();
  }
  res.status(403).send({ message: 'Unauthorized!' })
}

app.listen(5000);

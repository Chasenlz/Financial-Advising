const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const { email } = req.body;
  fs.appendFile('emails.txt', `${email}\n`, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log(`Email registered: ${email}`);
      res.redirect('/home.html');
    }
  });
});

app.get('/admin/emails', (req, res) => {
  fs.readFile('emails.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      const emails = data.split('\n').filter((email) => email.trim() !== '');
      res.json(emails);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

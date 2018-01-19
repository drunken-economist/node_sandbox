'use strict';

// [START app]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome, players. The next session is scheduled for 2018-01-23. WWe\'ll be playing at Cleaver Street, like normal.').end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]

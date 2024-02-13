const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable provided by Render, or 3000 if running locally

app.get('*', (req, res) => {
  res.redirect('https://lichessdex.web.app/'); // Replace 'https://URL2.com' with your target URL
});

app.listen(port, () => {
  console.log(`Redirect service listening at http://localhost:${port}`);
});

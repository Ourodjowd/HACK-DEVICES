const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// If the script is executed directly (not as a module), start the server
if (require.main === module) {
  const PORT = process.env.PORT || 3000; // Use the port provided by Render or default to 3000
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

const express = require('express');
const app = express();
const ecommerceRoutes = require('./routes/ecommerceRoutes');
const passwordStrengthRoutes = require('./routes/passwordStrengthRoutes');

// Middleware for logging
// ... (Same as in your main file)

// Middleware for authentication
// ... (Same as in your main file)

// Middleware for parsing incoming requests
// ... (Same as in your main file)

// Mount routes
app.use('/ecommerce', ecommerceRoutes);
app.use('/password', passwordStrengthRoutes);

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

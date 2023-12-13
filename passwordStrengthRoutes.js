const express = require('express');
const router = express.Router();
const passwordValidator = require('password-validator');

// Create a schema for password validation
const schema = new passwordValidator();
schema
  .is().min(8) // Minimum length 8
  .is().max(20) // Maximum length 20
  .has().uppercase() // Must have uppercase letters
  .has().lowercase() // Must have lowercase letters
  .has().digits(1) // Must have at least 1 digit
  .has().symbols(1) // Must have at least 1 symbol
  .has().not().spaces(); // Should not have spaces

// Endpoint to check password strength
router.post('/check-password', (req, res) => {
  // ... (Same as in your main file)
});

module.exports = router;

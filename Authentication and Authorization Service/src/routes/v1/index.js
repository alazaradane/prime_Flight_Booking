const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user-controller');
const { AuthRequestValidator } = require('../../middlewares/index');

router.post('/signup',
  AuthRequestValidator.validateUserAuth,
  UserController.create);

router.post('/signIn',
  AuthRequestValidator.validateUserAuth,
  UserController.signIn);

router.get(
  '/isAuthenticated',
  UserController.isAuthenticated
)

router.get('/dummy', (req, res) => {
  return res.status(200).json({
    message: 'dummy route'
  })
})

// A client sends a request to the /dummy route, which first hits the API Gateway.
// The API Gateway calls the isAuthenticated method of the Auth Service to verify the user's authentication.
// If authenticated, the isAuthenticated method returns the user's ID.
// The API Gateway stores the returned user ID in the request for potential future use.
// The API Gateway then forwards the authenticated request to the appropriate service responsible for handling the /dummy route.


module.exports = router;
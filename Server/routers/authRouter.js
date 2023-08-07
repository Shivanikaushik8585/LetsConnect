const router = require('express').Router();
const authController = require('../Controllers/authControllers');
router.post('/sign',authController.signupController);
router.post('/login',authController.loginController);
router.get('/refresh',authController.referehAccessTokenController);
router.post('/logout',authController.logoutController)
module.exports = router;
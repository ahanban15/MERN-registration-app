import { Router } from "express";
const router = Router()

// Import all controllers
import * as controller from '../controllers/appController'

// POST Methods
// router.route("/register").post((req, res) => res.json('register route')); // register user

//now using controller 
router.route("/register").post(controller.register); // register user
// router.route("/registerMail").post(); // send the email
router.route("/authenticate").post((req, res) => res.end()); // to authenitacte the user
router.route("/login").post(controller.login); // login in app

// GET Methods
router.route('/user/:username').get(controller.getUser) // get user with username
router.route('/generateOTP').get(controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables


// PUT Methods
router.route('/updateuser').put(controller.updateUser); // to update the user profile
router.route('/resetPassword').put(controller.resetPassword); // use to reset password

export default router;
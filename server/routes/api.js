const router = require('express-promise-router')();
const UsersController = require('../controllers/users');

//get all users
router.route('/user')
    .get(UsersController.getUsers);

//get all farmers or add a new one
router.route('/farmer')
    .get(UsersController.getFarmers)
    .post(UsersController.newFarmer);

//get or update farmer details
router.route('/farmer/:user_id')
    .get(UsersController.getOneFarmer)
    .patch(UsersController.updateFarmer);

//get all retailers or add a new one
router.route('/retailer')
    .get(UsersController.getRetailers)
    .post(UsersController.newRetailer);

//get or update retailer details
router.route('/retailer/:user_id')
    .get(UsersController.getOneRetailer)
    .patch(UsersController.updateRetailer);
    
//add card for a retailer
router.route('/addcard/retailer/:retailer_id')
    .post(UsersController.addCard);

//remove card for a retailer
router.route('/removecard/:card_info_id')
    .delete(UsersController.removeCard);

//get all cards of a retailer
router.route('/cards/:retailer_id')
    .get(UsersController.getCard);

//get one card details
router.route('/card/:card_id')
    .get(UsersController.getOneCard);

//get all administrators or add a new one
router.route('/administrator')
    .get(UsersController.getAdministrators)
    .post(UsersController.newAdministrator);

//login a user
router.route('/login')
    .post(UsersController.loginUser);

module.exports = router;

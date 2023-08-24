const controller = require('../controllers/users');
const router = require('express').Router();

//CRUD routes
router.get('/', controller.getUsers);
router.get('/:userId', controller.getUserById);
router.post('/', controller.createUser);
router.put('/:userId', controller.updateUser);
router.delete('/:userId', controller.deleteUser);

module.exports = router;
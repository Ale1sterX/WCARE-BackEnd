const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(userValidation.createUser), userController.createUser)
  .get(validate(userValidation.getUsers), userController.getUsers);

router
  .route('/:userId')
  .get(validate(userValidation.getUser), userController.getUser)
  .put(validate(userValidation.updateUser), userController.updateUser);

module.exports = router;

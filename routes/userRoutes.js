const express = require('express');
const { createUser,getUser, getUserById, deleteUserById, updateUserById } = require('../controllers/userControllers');


// router object
const router = express.Router();


// routes

// create user
router.post('/create', createUser );

// get user
router.get('/', getUser);

// get user by id   update user    delete user
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById)


module.exports = router
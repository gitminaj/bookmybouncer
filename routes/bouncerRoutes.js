const express = require('express');
const { createBouncer, getBouncer, getBouncerById, deleteBouncerById } = require('../controllers/bouncerControllers');

const router = express.Router();



// routes

// create profile

router.post('/create', createBouncer);

router.get('/', getBouncer);

router.route('/:id')
.get(getBouncerById)
.delete(deleteBouncerById);



// export

module.exports = router;
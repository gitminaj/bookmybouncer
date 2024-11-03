const express = require('express');
const { createBouncer, getBouncer } = require('../controllers/bouncerControllers');

const router = express.Router();



// routes

// create profile

router.post('/create', createBouncer);

router.get('/', getBouncer);




// export

module.exports = router;
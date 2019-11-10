const express = require('express');
const auth = require('../middleware/auth')

const router = express.router();
const companyCtrl = require('../controllers/company');


router.post('/', auth ,companyCtrl.postCompany);
router.put('/:id', auth, companyCtrl.updateCompany); 
router.get('/', companyCtrl.getAllCompany);


module.exports = router;
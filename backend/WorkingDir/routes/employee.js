const express = require('express');
const router =  express.Router();
const auth = require('../middleware/auth')

const employeeCtrl = require('../controllers/employee');


router.post('/signup', employeeCtrl.signup);
router.post('/login', employeeCtrl.login);
router.post('/', auth, employeeRouter.applyCompany);
router.put('/:id',auth, employeeRouter.leftCompany);

module.exports = router;
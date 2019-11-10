const Employee = require('../models/employee');
//bcrypt is used to hashing password
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.applyCompany = (res, req, next)=>{
    if(req.params.currentStatus == false){
        console.error("Can't Join More Than One Company");
    }
    else{
        bcrypt.hash(req.body.password,10).then(
            (hash)=>{
                const employee = new Employee({
                    _id: req.params.id,
                    name: req.body.name,
                    email: req.body.email,
                    userId: req.body.userId,
                    password: hash,
                    currentStatus: True
                });
                employee.updateOne({_id: req.params.id}, employee).then(
                    ()=>{
                        res.status(200).json({
                            message:'User created Successfully'
                        });
                    }
                ).catch(
                    (error)=>{
                        res.status(500).json({
                            error:error
                        });
                    }
                );
            } 
        );
    }
};

exports.leftCompany=(req, res, next)=> {
    const employee = new Employee({
        _id: req.params.id,
        name: req.params.name,
        email: req.params.title,
        userId: req.params.userId,
        password: req.params.password,
        currentStatus: false,
    });
    Employee.updateOne({_id:req.params.id}, employee).then(
        ()=>{
            res.status(201).json({
                message: 'Removed successfully!'
            });
        }
    ).catch(
        (error)=>{
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.signup = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const employee = new Employee({
                _id: req.body.id,
                name: req.body.name,
                email: req.body.title,
                userId: req.body.userId,
                password: req.body.password,
                currentStatus: false
            });
        });
        employee.save().then(
            () => {
                res.status(201).json({
                message: 'User added successfully!'
            });
        }
        ).catch(
            (error) => {
                res.status(500).json({
                error: error
            });
        }
    );
};

exports.login = (req, res, next)=>{
    Employee.findOne({ email: req.body.email }).then(
        (Employee) => {
            if (!Employee) {
                return res.status(401).json({
                error: new Error('User not found!')
            });
        }
        bcrypt.compare(req.body.password, employee.password).then(
            (valid) => {
                if (!valid) {
                    return res.status(401).json({
                    error: new Error('Incorrect password!')
                });
            }
            const token = jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' });
                res.status(200).json({
                userId: user._id,
                token: token
            });
        }
        ).catch(
            (error) => {
                res.status(500).json({
                error: error
            });
        }
    );
    }
    ).catch(
        (error) => {
          res.status(500).json({
            error: error
        });
      }
    );
};


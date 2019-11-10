const Company = require('../models/company');


//postCompany Method creates a New Company and register it to database.
exports.postCompany = (req, res, next) => {
    const company = new Company({
      title: req.body.company,
      description: req.body.description,
      owner: req.body.owner,
      _id: req.body.id
    });
    thing.save().then(
      () => {
        res.status(201).json({
        message: 'Company Established successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};


//By updateCompany Method owner can change description of company(type of person they hiring)
exports.updateCompany = (req, res, next) => {
    const company = new Company({
      title: req.body.company,
      description: req.body.description,
      owner: req.body.owner,
      _id: req.params.id,
    });
    Thing.updateOne({_id: req.params.id}, company).then(
      () => {
        res.status(201).json({
          message: 'Company Info updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};


//getAllCompany method list all companies
exports.getAllCompany = (req, res, next) => {
    Company.find().then(
      (companies) => {
        res.status(200).json(companies);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
   );
};

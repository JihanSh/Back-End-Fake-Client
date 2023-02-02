//to code for the faq

const faq = require("../models/faq");
class Controller {
  // viewing the questions and answers
  getAll(req, res) {
    faq.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  // requesting to view a question and its answer by  id
  get(req, res) {
    let id = req.params;
    faq.findOne({  id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  // creating a new question & answer
  post(req, res, next) {
    let quest = req.body;
    let doc = new faq(quest);
    doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  // updating a question & answer
  put(req, res, next) {
    let { id } = req.params;
    let quest = req.body;
    faq.updateOne(
      { _id: id },
      {
        $set: quest,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
      }
    );
  }
   //delete a question and answer by id
     delete(req, res, next) {
      let { id } = req.params;
      faq.findByIdAndDelete({ _id: id }, (err, response) => {
          if (err) return next(err);
          res.status(200).send({ success: true, response });
      })
    }
    
    
    
}

const controller = new Controller();
module.exports = controller;

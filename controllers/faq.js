//to code for the faq

const faq = require("../models/faq");
class Controller {
  // viewing the questions
  getAll(req, res) {
    faq.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  // requesting to view a question by it's id
  get(req, res) {
    let id = req.params;
    faq.findOne({ _id, id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  // creating new question
  post(req, res, next) {
    let quest = req.quest;
    let doc = new faq(quest);
    doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
  // updating a question
  put(req, res, next) {
    let { id } = req.params;
    let quest = req.quest;
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
}

const controller = new Controller();
module.exports = controller;

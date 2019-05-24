const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Notes = mongoose.model('notes');
module.exports = app => {
  app.get('/createNote', requireLogin, async (req, res) => {
    console.log('notes retrieval');
    const retrieveNotes = await Notes.find();
    res.send(retrieveNotes);
  });
  app.post('/createNote', requireLogin, async (req, res) => {
    const { title, comment } = req.body;
    const note = new Notes({
      title: title,
      comment: comment
    });
    try {
      await note.save();
      res.send(note);
    } catch (err) {
      res.status(422).send(err);
    }
  });
  app.post('/updateNote', requireLogin, async (req, res) => {
    const { title, comment, id } = req.body;
    console.log(typeof mongoose.Types.ObjectId(req.body.id));
    const note = new Notes({
      title: title,
      comment: comment
    });

    Notes.updateOne(
      { _id: mongoose.Types.ObjectId(req.body.id) },
      { $set: { title: req.body.title, comment: req.body.comment } }
    ).exec();
    res.send({});
  });
};

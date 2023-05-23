//require things
const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require('../helpers/fsUtils');
const db = require('../db/db.json');

//get routes using helper functions
//route to get notes
notes.get('/notes', (req, res) => {
  console.log(`${req.method} request received for notes`);
  readFromFile('db/db.json', 'utf8').then((data) => res.json(JSON.parse(data)));
});

notes.post('/notes', (req, res) => {
  console.log(`${req.method} request received for notes`);
  const { title, text, id } = req.body;
  if (req.body) {
    const note = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(note, 'db/db.json');
    res.json(notes[notes.length - 1]);
  }
});

//delete notes
notes.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

module.exports = notes;

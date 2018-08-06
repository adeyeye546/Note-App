console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) =>  note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }


  var notesString = fs.readFileSync('notes-data.json');
  notes = JSON.parse(notesString);
  
};

var getAll = () => {
    console.log('Getting all notes');
    
      
  };
  var getNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title === title);
    return filterNotes[0]
  };
  var removeNote = (title) => {
    var notes = fetchNotes();
    var removeNotes = notes.filter((note) => note.title !== title);
    saveNotes(removeNotes);

    return notes.length !== removeNotes.length;
  };

  var logNote = (note) => {
    console.log('__');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}

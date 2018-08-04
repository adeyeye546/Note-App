console.log('Starting notes.js');


var addNote = (title, body) => {
  console.log('Adding notes', title, body);
  
    
};

var getAll = () => {
    console.log('Getting all notes');
    
      
  };
  var getNote = (title) => {
    console.log('Getting notes', title);
    
      
  };
  var removeNote = (title) => {
    console.log('Removing notes', title);
    
      
  };
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}

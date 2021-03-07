import firebase from "./firebase";

function Note(props) {
    const { content, noteId, number } = props;

    function handleDeleteNote(e) {
        let id = e.target.parentElement.getAttribute('data-id');
        
        firebase.firestore().collection('notes').doc(id).delete();

    }

    return (
      <div data-id={noteId} className="note-container">
          <h3>Notatka {number}</h3>
          <p>{content}</p>

          <button onClick={(e)=> handleDeleteNote(e)}>Delete</button>
      </div>
    );
  }
  
  export default Note;
  
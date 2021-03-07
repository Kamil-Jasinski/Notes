import firebase from "./firebase";
import React, { useState } from 'react';



function handleAddNote(e) {
    e.preventDefault();
    const form = document.querySelector('#add-note-form');

    // If value is not empty; add note
    if (form.note.value) {
        firebase.firestore().collection('notes').add({
            note: form.note.value
        })

        // Clear form
        form.note.value = "";
    }
    else return;

}

function AddNote() {
    const [note, setNote] = useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setNote(newValue);
    }

  return (
    <div className="form-container">
        <form id="add-note-form">
            <textarea 
                className="text-field"
                onChange={(e)=> handleChange(e)} 
                type="input" 
                name="note" 
                value={note} 
                placeholder="Your note..."
            />
            
            <button onClick={e=> handleAddNote(e)}>Add note</button>
        </form>
    </div>
  );
}

export default AddNote;

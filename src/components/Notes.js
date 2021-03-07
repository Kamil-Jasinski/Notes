import Note from "./Note";
import firebase from "./firebase";
import React, { useEffect, useState } from "react";

function useNotes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
      
        // DOWNLOAD
        firebase.firestore().collection("notes").onSnapshot((snapshot) => {
            const newNotes = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
        }))

        // Save (set) in state
        setNotes(newNotes) 
        })
    }, [])
    
    //Return ready data
    return notes
};


function Notes() {

    const notes = useNotes();


    return (
      <div className="notes-container">
          {notes.map((note, i)=> <Note content={note.note} number={i+1} noteId={note.id} key={note.id}/>)}
      </div>
    );
  }
  
  export default Notes;
  
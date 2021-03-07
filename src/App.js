import './styles/App.css';
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="app-container">
      <AddNote/>
      <Notes/>
    </div>
  );
}

export default App;

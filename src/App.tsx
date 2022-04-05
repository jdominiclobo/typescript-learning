import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Joel" messageCount={24} isLoggedIn={true} />
    </div>
  );
}

export default App;

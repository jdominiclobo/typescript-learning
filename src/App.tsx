import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    second: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Peter",
      last: "Parker",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name="Joel" messageCount={24} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status="loading" />
      <Heading>PlaceHolder text</Heading>

      <Oscar>
        <Heading>Oscar goes to Joel Dominic Lobo</Heading>
      </Oscar>
      <Greet name="Joel" isLoggedIn={false} />
    </div>
  );
}

export default App;

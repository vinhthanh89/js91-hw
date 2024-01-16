import "./App.css";

// import NameCard from "./component/NameCard";
import Counter from "./component/Counter";
import Studen from "./component/Studen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Studen />
        {/* <NameCard name="Alice" age="20" gender="male" />
        <NameCard name="Amy" age="19" gender="female" /> */}
      </header>
    </div>
  );
}

export default App;

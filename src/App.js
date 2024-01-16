import "./App.css";

import NameCard from "./component/NameCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameCard name="Alice" age="20" gender="male" />
        <NameCard name="Amy" age="19" gender="female" />
      </header>
    </div>
  );
}

export default App;

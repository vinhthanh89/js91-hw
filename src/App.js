import "./App.css";
// import { useState } from "react";

// import NameCard from "./component/NameCard";
// import Counter from "./component/Counter";
// import Studen from "./component/Studen";
// import UserForm from "./component/UserForm";
// import TotalUser from "./component/TotalUser";
// import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";

function App() {
  // const [usersData, setUsersData] = useState([]);
  // const handleAddUsersData = (newUser) => {
  //   setUsersData([...usersData, newUser]);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        {/* <UserForm handleAddUsersData={handleAddUsersData} />
        <TotalUser usersData={usersData}/> */}
        {/* <Counter />
        <Studen /> */}
        {/* <NameCard name="Alice" age="20" gender="male" />
        <NameCard name="Amy" age="19" gender="female" /> */}
      </header>
    </div>
  );
}

export default App;

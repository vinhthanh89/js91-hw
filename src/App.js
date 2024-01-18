import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import NameCard from "./component/NameCard";
// import Counter from "./component/Counter";
// import Studen from "./component/Studen";
// import UserForm from "./component/UserForm";
// import TotalUser from "./component/TotalUser";
// import TodoItem from "./component/TodoItem";
// import TodoList from "./component/TodoList";
import ThemeContext from "./Context/ThemeContext";
import Header from "./component/Header";
import Todo from "./Pages/Todo";
import Welcome from "./Pages/Welcome";
import MyProfile from "./Pages/MyProfile";
import PageNotFound from "./Pages/PageNotFound";
import TodoDetail from "./Pages/TodoDetail";

function App() {
  // const [usersData, setUsersData] = useState([]);
  // const handleAddUsersData = (newUser) => {
  //   setUsersData([...usersData, newUser]);
  // };
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <header className={`App-header ${theme === "light" ? "light" : "dark"}`}>
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <Header />
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Todo />} />
            <Route path="/:todoId" element={<TodoDetail />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Routes>
        </ThemeContext.Provider>

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

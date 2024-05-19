import { useState, useEffect } from "react";
import "./App.css";

const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);
  console.log();

  async function getUser() {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }

  useEffect(() => {
    getUser();
  }, []);
  // second parameter -> only run initial render

  return (
    <>
      <h1 className="bg-red-200">Github Users</h1>
      <ul>
        {users.map((user) => {
          return <li>{user.login}</li>;
        })}
      </ul>
    </>
  );
}

export default App;

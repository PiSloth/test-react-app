import { useState, useEffect } from "react";
import "./App.css";

const url = "https://api.github.com/users";

var arr = ["Bo Bo", "Kyaw Thein"];

function App() {
  const [items, addItem] = useState(arr);
  const [newName, setNewName] = useState("");
  //destructuring useState array
  //useState return a value and function

  // async function getUser() {
  //   const response = await fetch(url);
  //   const users = await response.json();
  //   setUsers(users);
  //   console.log(users);
  // }

  // second parameter -> only run initial render
  var num1 = 2;
  var num2 = 22;
  function increase(newItem) {
    addItem((prevItems) => [...prevItems, newItem]);
  }

  const removeItem = (index) => {
    addItem((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  function handleInputChange(event) {
    setNewName((prevNewName) => (prevNewName, event.target.value));
    console.log(event.target.value);
  }

  function addName() {
    addItem((prevItem) => [...prevItem, newName]);
    setNewName("");
  }
  //  useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      <div className="w-1/2 mx-auto">
        <h1 className="bg-red-200">Users</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between">
              {item}
              <button
                className="text-red-500"
                onClick={() => removeItem(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <br />

        <input
          type="text"
          onChange={handleInputChange}
          value={newName}
          placeholder="type a name"
        />
        <br />
        <button className="bg-cyan-300 px-4 py-2" onClick={addName}>
          add
        </button>
      </div>
    </>
  );
}

export default App;

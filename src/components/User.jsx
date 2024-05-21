import React, { useState, useEffect } from "react";

export default function User() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
}

// import React, { useState, useEffect } from "react";

// export default function User() {
//   const [users, setUsers] = useState([]);

//   async function fetchUsers() {
//     const response = await fetch("https://api.github.com/users");
//     const users = await response.json();
//     setUsers(users);
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name || user.login}</li>
//       ))}
//     </ul>
//   );
// }

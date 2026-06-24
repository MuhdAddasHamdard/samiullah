import React, { useEffect, useState } from "react";
import axios from "axios";
const Hooks = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        setUsers(Response.data);
        console.log(Response.data);
      })
      .catch((errors) => {
        setError("faild to fetch the data");
        console.log(errors);
      });
  }, []);
  return (
    <div className="container">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id} className="list-item p-1 border mt-1">
              {user.email}{" "}
            </li>
          );
        })}
      </ul>
      {error && <p className="text-red-300">{error}</p>}
    </div>
  );
};

export default Hooks;

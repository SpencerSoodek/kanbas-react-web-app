import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });


  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>

      <table className="table">
        <thead>
            
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>
                <input placeholder="username"value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            
              <input placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
              </td>
            <td>
              <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
            <button className="btn btn-primary me-2" onClick={createUser}>
                <BsPlusCircleFill/></button>
                <button className="btn btn-success me-2" onClick={updateUser}>
                <BsFillCheckCircleFill/></button>
            
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <Link to={`../account/${user._id}`}>{user.username}</Link>
              
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td><button className="btn btn-warning me-2" onClick={() => selectUser(user)}>
                <BsPencil />
                </button>
                <button className = "btn btn-danger me-2"onClick={() => deleteUser(user)}>
                  <BsFillTrash3Fill />
                </button>
                </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;
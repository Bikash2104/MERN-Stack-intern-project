import axios from "axios";
import { useState } from "react";

const API_URL = "https://api.example.com/users"; // Replace with actual API

const UpdateUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]); // Initial users (mock data)

  const [userId, setUserId] = useState(""); // Store input ID
  const [newName, setNewName] = useState(""); // Store new name
  const [message, setMessage] = useState("");

  const updateData = async () => {
    const id = parseInt(userId, 10);
    const userExists = users.some((user) => user.id === id);

    if (!id || !newName) {
      setMessage("Please enter both User ID and new name.");
      return;
    }

    if (!userExists) {
      setMessage("User ID not found.");
      return;
    }

    try {
      const response = await axios.put(`${API_URL}/${id}`, { name: newName });

      // Update the state only if the ID matches
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, name: newName } : user
      );

      setUsers(updatedUsers); // Store the updated state
      setMessage("User updated successfully!");
      console.log("Updated Data:", response.data);
    } catch (error) {
      console.error("Error updating data:", error);
      setMessage("Failed to update user.");
    }
  };

  return (
    <div>
      <h3>Users:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter New Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={updateData}>Update Data</button>
      <p>{message}</p>
    </div>
  );
};

export default UpdateUser;

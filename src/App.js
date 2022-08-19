import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Search from "./components/Search";
import { getGithubUsersData } from "./components/services/helpers";

function App() {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const fetchData = () => {
    getGithubUsersData(users)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
        }
      })
      .catch((err) => setError(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setValue("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Search
        value={value}
        users={users}
        setUsers={setUsers}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Card users={users} error={error} />
    </div>
  );
}

export default App;

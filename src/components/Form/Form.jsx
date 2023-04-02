import { useState } from "react";
import validation from "./validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const targetProperty = event.target.name;
    const targetValue = event.target.value;

    setUserData({ ...userData, [targetProperty]: targetValue });
    validation(
      {
        ...userData,
        [targetProperty]: targetValue,
      },
      errors,
      setErrors
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        ></input>
        <p>{errors.username}</p>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        ></input>
      </div>
      <br />
      <button>Login</button>
    </form>
  );
}

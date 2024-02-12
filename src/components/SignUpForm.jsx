import { useState } from 'react';

export default function SignUpForm({ token, setFunction }) {
  // Changed destructuring of useState to use an array with two elements
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setToken } = setFunction;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify({ username: userName, password: password })
      });
      const result = await response.json();
      
     
      setFunction(result.token);

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Please sign up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Enter the site!</button>
      </form>
    </>
  );
}

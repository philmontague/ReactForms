import { useState } from 'react';
import Authenticate from './components/Authenticate';
import SignUpForm from './components/SignUpForm';

export default function App() {
  const [token, setToken] = useState("");
  console.log(token);

  return (
    <>
      <Authenticate token={token} setFunction={setToken} />
      <SignUpForm token={token} setFunction={setToken} />
    </>
  );
}


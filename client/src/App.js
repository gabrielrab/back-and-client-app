import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [result, setResult] = useState(false);

  const callApi = async () => {
    const data = await axios.get('http://localhost:5000/api/hello');
    setResult(data.data);
    setToggle(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a project with the frontend and the backend attached
        </p>
        <button className="btn" onClick={callApi}>
          Click here and call backend !
        </button>
        {!toggle ? (
          <></>
        ) : (
          <>
            <div className="result-api">
              <code>{result}</code>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

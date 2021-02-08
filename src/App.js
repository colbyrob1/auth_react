import React, {useState, useEffect } from "react";
import {Route, BrowserRouter, Link} from "react-router-dom";
import { useAuth } from "./utils/useAuth";
import { PrivateStuff } from "./components/PrivateStuff";

const App = (useAuth) => {
  const [isAuthenticated, setIsAuthenticated ]
  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDIxNTY4NTAzMTIxZTE4ODQzNjk5NTMiLCJpYXQiOjE2MTI3OTc1NzMsImV4cCI6MTYxMzQwMjM3M30.Dp3Q2nGMsUYmdFMOYz-PPWwlLdKfH3kWPv-cctTZCeU";
  
  localStorage.setItem("myToken", token);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useAuth(token, setIsAuthenticated)

  return (
    <BrowserRouter>
    <div>
      <h1>My React App</h1>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <Link to="/private">Private Stuff</Link>
        </li>
      </ul>
      <Route exact path="/private" render={() => (user.id ? <PrivateStuff /> : <Redirect to="/" />)} />
      <Redirect to="/" />) /
        <div>
          <h1>Private Stuff</h1>
        </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
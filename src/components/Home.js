import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";

const Login = ( { setUser }) => {
    return (
        <div>
            <Signup setUer={setUser} />
            {localStorage.getItem("dataToken") ? <Logout />  : <Login /> setUer={setUser} />
        </div>
    );
};

export default Login;
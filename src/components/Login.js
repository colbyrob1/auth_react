import React from "react";
import Signup from "./Signup";
import Home from "./Home";


const Login = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    return (
    <form>
        <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
        <input type="text" placeholder="Password" onChange={(event) => setPass(event.target.value)} />
    </form>
    );
};

export default Login;
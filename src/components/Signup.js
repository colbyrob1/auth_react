import React from "react";

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
}

const formHandler = (event) => {
    event.preventDefault()

    const response = await fetch("http://localHost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            name:name,
            email: email,
            password: pass,
        }),
    });
    const data = await response.json();
    console.log(data);
};

    return (
        <form onSubmit={formHandler}>
            <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
            <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
            <input type="text" placeholder="Password" onChange={(event) => setPass(event.target.value)} />
            <button>Signup</button>
        <form/>
        );
};

export default Signup;
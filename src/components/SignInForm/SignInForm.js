import "./SignInForm.css";
import axios from "axios";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignInForm() {
    const [response, setResponse] = useState(null);
    // const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        try {
            const {data} = await axios.post("http://localhost:3001/api/v1/user/login", formJson);
            setResponse(await data);
            // return redirect("/profile");
            // navigate("/profile");
        } catch(error) {
            console.log(error);
            setResponse(false);
        }
    };

    useEffect(() => {
        console.log(response);
    }, [response]);

    return (
            <form method="post" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input name="email" type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" id="password" />
                </div>
                { response === false &&
                    <p>Wrong credentials!</p>
                }
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
    );
}
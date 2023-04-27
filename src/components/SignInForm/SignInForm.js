import "./SignInForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../state/slices/tokenSlice";
import { useState } from "react";

export default function SignInForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        try {
            const {data} = await axios.post("http://localhost:3001/api/v1/user/login", formJson);
            dispatch(setToken(await data.body.token));
            setError(false);
            navigate("/profile");
        } catch(error) {
            console.log(error);
            setError(true);
        }
    };

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
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                { error &&
                    <p className="error-message">Wrong credentials! Make sure you used the right email and password.</p>
                }
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
    );
}
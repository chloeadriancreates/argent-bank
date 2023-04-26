import "./SignInForm.css";
import axios from "axios";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../state/slices/tokenSlice";
import { deleteResponse, setResponse } from "../../state/slices/responseSlice";
import { useEffect } from "react";

export default function SignInForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {response} = useSelector((state) => state.response);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        try {
            const {data} = await axios.post("http://localhost:3001/api/v1/user/login", formJson);
            dispatch(setResponse(data));
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(response);
        if(response) {
            dispatch(setToken(response.body.token));
            dispatch(deleteResponse());
            // return redirect("/profile");
            navigate("/profile");
        }
    }, [response, dispatch, navigate]);

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
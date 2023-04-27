import "./ProfileEditor.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../../app/slices/userSlice";
import { useState } from "react";

export default function ProfileEditor() {
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.token);
    const {firstName, lastName} = useSelector((state) => state.user.user);
    const [editing, setEditing] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        if(formJson.firstName === "") {
            formJson.firstName = firstName;
        }
        if(formJson.lastName === "") {
            formJson.lastName = lastName;
        }
        try {
            const {data} = await axios.put("http://localhost:3001/api/v1/user/profile", formJson,
            { headers:
                {
                    authorization: `Bearer${token}`
                }
            });
            dispatch(setUser(data.body));
            setEditing(false);
        } catch(error) {
            console.log(error);
        }
    };

    if(editing) {
        return (
            <div className="header">
                <h1 className="profile-title">Welcome back</h1>
                <form method="post" onSubmit={handleSubmit} className="editing-form">
                    <div className="editing-form-column editing-form-left-column">
                        <input name="firstName" type="text" id="firstName" placeholder={firstName} className="editing-form-input" />
                        <button type="submit" className="edit-button">Save</button>
                    </div>
                    <div className="editing-form-column editing-form-right-column">
                        <input name="lastName" type="text" id="lastName" placeholder={lastName} className="editing-form-input" />
                        <button className="edit-button" onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <button className="edit-button" onClick={() => setEditing(true)}>Edit Name</button>
            </div>
        );
    }
}
import "./ProfileEditor.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toggleEditing } from "../../state/slices/editingSlice";

export default function ProfileEditor() {
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.token);
    const {firstName, lastName} = useSelector((state) => state.user.user);
    const {editing} = useSelector((state) => state.editing);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        try {
            const {data} = await axios.put("http://localhost:3001/api/v1/user/profile", formJson,
            { headers:
                {
                    authorization: `Bearer${token}`
                }
            });
            console.log(await data);
            dispatch(toggleEditing());
        } catch(error) {
            console.log(error);
        }
    };

    if(editing) {
        return (
            <div className="header">
                <h1>Welcome back</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <input name="firstName" type="text" id="firstName" />
                    <input name="lastName" type="text" id="lastName" />
                    <button type="submit" className="edit-button">Save</button>
                    <button type="reset" className="edit-button">Cancel</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <button className="edit-button" onClick={() => dispatch(toggleEditing())}>Edit Name</button>
            </div>
        );
    }
}
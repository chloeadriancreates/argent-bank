import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../state/slices/userSlice";
import { deleteResponse, setResponse } from "../../state/slices/responseSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileEditor from "../../components/ProfileEditor/ProfileEditor";
import Account from "../../components/Account/Account";

export default function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.token);
    const {response} = useSelector((state) => state.response);
    const {user} = useSelector((state) => state.user);

    useEffect(() => {
        document.title = "Argent Bank – Tony Stark";
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);

    useEffect(() => {
        console.log(token);
        if(!token) {
            navigate("/signin");
        } else {
            const fetchProfile = async() => {
                try {
                    const {data} = await axios.post("http://localhost:3001/api/v1/user/profile", {},
                    { headers: {
                        authorization: `Bearer${token}`
                      }
                    });
                    dispatch(setResponse(data));
                } catch(error) {
                    console.log(error);
                }
            };
            fetchProfile();
        }
    }, [token, navigate, dispatch]);

    useEffect(() => {
        if(response) {
            dispatch(setUser(response.body));
            dispatch(deleteResponse());
        }
    }, [response, dispatch]);

    if(token) {
        return (
            <div className="profile-page">
                <Header signedIn={true} />
                <main className="main bg-dark">
                    <ProfileEditor />
                    <h2 className="sr-only">Accounts</h2>
                    <Account type="Checking" id="8349" balance="2,082.79" />
                    <Account type="Savings" id="6712" balance="10,928.42" />
                    <Account type="Credit Card" id="8349" balance="184.30" />
                </main>
                <Footer />
            </div>
        );
    }
}
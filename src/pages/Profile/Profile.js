import { useEffect } from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileEditor from "../../components/ProfileEditor/ProfileEditor";
import Account from "../../components/Account/Account";

export default function Profile() {
    useEffect(() => {
        document.title = "Argent Bank – Tony Stark";
    }, []);

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
import { useEffect } from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileEditor from "../../components/ProfileEditor/ProfileEditor";

export default function Profile() {
    useEffect(() => {
        document.title = "Argent Bank – Tony Stark";
    }, []);

    return (
        <div>
            <Header signedIn={true} />
            <main className="main bg-dark">
                <ProfileEditor />
            </main>
            <Footer />
        </div>
    );
}
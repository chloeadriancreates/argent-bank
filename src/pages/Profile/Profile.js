import { useEffect } from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Profile() {
    useEffect(() => {
        document.title = "Argent Bank – Tony Stark";
    }, []);

    return (
        <div>
            <Header signedIn={true} />
            <Footer />
        </div>
    );
}
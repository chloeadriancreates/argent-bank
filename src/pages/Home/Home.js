import { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";

export default function Home() {
    useEffect(() => {
        document.title = "Argent Bank – Home Page";
    }, []);

    return (
        <div>
            <Header />
        </div>
    );
}
import { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

export default function Home() {
    useEffect(() => {
        document.title = "Argent Bank – Home Page";
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Hero />
            </main>
        </div>
    );
}
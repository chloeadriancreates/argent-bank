import { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";

export default function Home() {
    useEffect(() => {
        document.title = "Argent Bank – Home Page";
    }, []);

    return (
        <div>
            <Header signedIn={false} />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    );
}
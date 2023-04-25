import { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    useEffect(() => {
        document.title = "Argent Bank – Home Page";
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    );
}
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./SignIn.css";
import SignInForm from "../../components/SignInForm/SignInForm";

export default function SignIn() {
    useEffect(() => {
        document.title = "Argent Bank – Sign in";
    }, []);

    return (
        <div className="sign-in-page">
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <SignInForm />
                </section>
            </main>
            <Footer />
        </div>
    );
}
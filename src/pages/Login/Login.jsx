import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Nav from "../../components/Nav/Nav";

import './Login.scss';

export default function Login() {
    return (
        <div>
            <Nav />
                <main className="main bg-dark pdg-100">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <Form />
                    </section>
                </main>
            <Footer />
        </div>
    )
}
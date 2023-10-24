import Account from "../../components/Account/Account";
import Nav from "../../components/Nav/Nav";
import Footer from '../../components/Footer/Footer';

import accountData from '../../data/account.json';

import './User.scss';

export default function User() {
    return (
        <div>
            <Nav />
            <main className="user-main">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                {accountData.map(account =>
                    <Account account={account} key={account.id} />
                )}
            </main>
            <Footer />
        </div>
    )
} 
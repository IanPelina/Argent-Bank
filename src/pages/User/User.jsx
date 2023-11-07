import Account from "../../components/Account/Account";
import Nav from "../../components/Nav/Nav";
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import accountData from '../../data/account.json';

import { logout } from "../../actions/login.action";

import './User.scss';

export default function User() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout()); // Appeler l'action de déconnexion
        // Rediriger l'utilisateur vers la page de connexion ou ailleurs si nécessaire
      };
    
    return (
        <div>
            <Nav>
                <Link to="/sign-in" className="main-nav-item" onClick={handleLogout}>
                    <i class="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </Nav>
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
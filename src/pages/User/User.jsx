import Account from "../../components/Account/Account";
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import accountData from '../../data/account.json';

import { setUsername } from "../../reducers/user.reducer";

import './User.scss';

import axios from "axios";

export default function User() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLogged = useSelector(state => state.loginReducer.isLogged);
    const firstName = useSelector(state => state.userReducer.firstName)
    const lastName = useSelector(state => state.userReducer.lastName)
    const userName = useSelector(state => state.userReducer.userName)
    // let token = useSelector(state => state.userReducer.token)

    useEffect(() => {
        !isLogged && navigate("/sign-in");
    }, [isLogged, navigate]);

   /* async function saveUsername(){
        const inputUsername = document.getElementById("username").value
        await axios.put('http://localhost:3001/api/v1/user/profile', {
            // method: PUT,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userName": inputUsername,
            })
            })
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .catch(function (error) {
                console.log("ERROR:" + error + error.status)
            })
            dispatch(setUsername({username: inputUsername}))
        hide("edit")
    } */

    function hide(name){
        const WelcomeContainer = document.getElementById("headerWelcome")
        const editContainer = document.getElementById("edit-container")
        if(name === "edit"){
            editContainer.style.display="none"
            WelcomeContainer.style.display="inline"

        }else{
            editContainer.style.display="flex"
            editContainer.style.justifyContent="center"
            editContainer.style.padding="0 2rem 2rem"
            WelcomeContainer.style.display="none"
        }
    }

    function undo(){
        hide("edit")
    }

    return (
        <div>
            <main className="user-main">
                <div className="header">
                    <div id="headerWelcome">
                        <h1>Welcome back<br />{firstName} {lastName} !</h1>
                        <button className="edit-button" onClick={() => hide("welcome")} >Edit Name</button>
                    </div>
                </div>
                <div id="edit-container">
                    <div className="header-edit" id="headerEdit">
                        <h1>Edit user info</h1>
                        <div id="header-inputs">
                            <label htmlFor="username"> Username
                                <input type="text" id="username" defaultValue={userName} />
                            </label>
                            <label htmlFor="firstName"> First name
                                <input type="text" id="firstName" value={firstName} readOnly />
                            </label>
                            <label htmlFor="lastName" > Last name
                                <input type="text" id="lastName" value={lastName} readOnly />
                            </label>
                        </div>
                        <div className="header-edit-buttons">
                            <button /* onClick={() => saveUsername()}*/>Save</button>
                            <button onClick={() => undo()}>Cancel</button>
                        </div>
                    </div>
                </div>
                {accountData.map(account =>
                    <Account account={account} key={account.id} />
                )}
            </main>
            <Footer />
        </div>
    )
} 
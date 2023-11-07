import "./Form.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import { login } from "../../actions/login.action";
import loginReducer from "../../reducers/login.reducer";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(({ loginReducer }) => loginReducer.error);
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);
  
  function handleSubmit($event) {
    $event.preventDefault();
    try {
        dispatch(login({ email: username, password }));
      } catch (error) {
        console.error('Login error:', error.message);
      }
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label><input type="text" id="username" onChange={({target}) => setUsername(target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label><input type="password" id="password" onChange={({target}) => setPassword(target.value)} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
    </form>
      { error && <div><p>{error}</p></div> }
    </>
  );
}
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import User from "../pages/User/User";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}
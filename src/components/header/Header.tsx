import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import './Header.css';
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { ActionType } from "../../redux/ActionType";
import { AppState } from "../../redux/AppState";
import jwt_decode from 'jwt-decode';


export function Header() {

    //todo check this:
    let [userType, setUserType] = useState('USER');
    let isLoggedIn = useSelector((state: AppState) => state.isLoggedIn);
    //

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onChangeComponent = (path: string) => navigate(path);

    //check if not to delete:
    useEffect(() => {
        if (isLoggedIn) {
            convertToken();
        }
    }, [isLoggedIn]);

    function convertToken() {
        let token = localStorage.getItem('token');
        if (!token) {
            return;
        }
        let tokenInfo: any = jwt_decode(token);
        let parsedSub = JSON.parse(tokenInfo.sub);
        setUserType(parsedSub.userType);
    }
    //

    function onChangeSearch(event: ChangeEvent<HTMLInputElement>): void {
        let searchInput = event.target.value;
        dispatch({ type: ActionType.SEARCH, payload: searchInput });
    }

    function logout() {
        localStorage.clear();
        dispatch({ type: ActionType.ISLOGGEDIN, payload: false });
        alert("Logged out successfully!");
    }

    return (
        <div className="Header"><h1>Welcome To Motherlode</h1>
            <br />

            <div className="Header-left">
                <input type="button" value="Home" onClick={() => onChangeComponent('/')} />
                <input type="button" value="Coupons" onClick={() => onChangeComponent('/Coupons')} />
                {userType == "ADMIN" && (<input type="button" value="Add Coupon" onClick={() => onChangeComponent('/AddCoupon')} />)}
            </div>
            <div className="Header-right">
                <input type="text" placeholder="Search" onChange={onChangeSearch} />
                {!isLoggedIn && (<input type="button" value="Log in" onClick={() => onChangeComponent('/Login')} />)}
                {!isLoggedIn && (<input type="button" value="Register" onClick={() => onChangeComponent('/Register')} />)}
                {isLoggedIn && (<p className="login-details">Logged in as {localStorage.getItem("userName")}</p>)}
                {isLoggedIn && (<input type="button" value="Log out" onClick={logout} />)}

            </div>

        </div>
    );
}





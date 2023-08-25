import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './Login.css';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../redux/ActionType';

function Login() {
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [userType, setUserType] = useState('');
    let dispatch = useDispatch();

    async function onLoginClicked() {
        let loginDetails = { userName, password };
        try {
            const response = await axios.post("http://localhost:8080/users/login", loginDetails);
            const serverResponse = response.data;
            let token = 'Bearer ' + serverResponse;
            let tokenInfo: any = jwt_decode(token);
            console.log(tokenInfo);
            let parsedSub = JSON.parse(tokenInfo.sub);
            let userType = parsedSub.userType;
            axios.defaults.headers.common['Authorization'] = token;
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            localStorage.setItem('userType', userType);
            dispatch({ type: ActionType.ISLOGGEDIN, payload: true });
            alert("Welcome " + userName + "!");
        }
        catch (error: any) {
            alert(error.message);
        }
    }


    return (
        <div className="login-box">
            <form>
                <div className='user-box'>
                    <input type='text' name='' required onChange={event => setUserName(event.target.value)} />
                    <label>Username</label>
                </div>
                <div className='user-box'>
                    <input type='password' name='' required onChange={event => setPassword(event.target.value)} />
                    <label>Password</label>
                </div>
                <a onClick={onLoginClicked}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login</a>
            </form>

            {/* <button id='submit' onClick={setLogin} >Log In</button><br /> */}
            {/* <input type="text" placeholder='userName' onChange={event => setUserName(event.target.value)} /><br />
        <input type="password" placeholder='password' onChange={event => setPassword(event.target.value)} /><br /> */}
        </div>
    );
}
export default Login;


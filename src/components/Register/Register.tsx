import React,{useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './Register.css';

export function Register() {
  let[userName, setUserName] = useState('');
  let[password, setPassword] = useState('');
async function register(){
  let user={userName,password};
  try{
    const response = await axios.post("http://localhost:8080/users", user);
    const serverResponse = response.data;
    console.log(serverResponse);
    alert("Welcome " + userName + "!");
}
catch(error: any){
    alert(error.message);
}
}

    return (
      <div className="register-box"><form>
                      <div className='user-box'>
                    <input type='text' name='' required onChange={event => setUserName(event.target.value)} />
                    <label>Username</label>
                </div>
                <div className='user-box'>
                    <input type='password' name='' required onChange={event => setPassword(event.target.value)} />
                    <label>Password</label>
                </div>
       <a onClick={register}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Register</a>
                    </form>
      </div>

      
    );
}


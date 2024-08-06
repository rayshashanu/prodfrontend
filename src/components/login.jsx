import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Forget from './forgot';


const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:1000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/mainhome');
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');

    
  }
  const forget = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigate('/Forget')
  }
  const login = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigate('/mainhome')
  }

  return (
    <center>
    <>
    <div style={{backgroundColor:'beige'}}>
    <img src='mb3.png' style={{width:'100px'}}/>
    <div style={{alignContent:'start',display:'flex',justifyContent:"space-around",color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
    </div>
    </div>
    <table>
    <div style={{backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
      <h2>Account</h2>
      <div style={{borderRadius:'10px'}}>
        <label></label>
        <input placeholder='Email ID' style={{width:'500px',padding:'10px'}}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input placeholder='password' style={{width:'500px',padding:'10px'}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div  style={{display:'flex',padding:'10px',gap:'20px', justifyContent:'center',display:'flex'}}>
      <button onClick={handleSubmit} style={{backgroundColor:'BEIGE',width:'100px',height:'30px',padding:'10px'}}>Login</button> 
      <button onClick={redirecter} style={{backgroundColor:'beige',width:'100px',height:'30px',padding:'10px'}}>Register</button><br></br>
      <br/>
      <br/>
      <a href='' onClick={forget} style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>Forget Password?</a>
      </div> 
    </div>
    </table>
   
    </>
    </center>
  );
};

export default Login;

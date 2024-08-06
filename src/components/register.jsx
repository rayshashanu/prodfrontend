import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './login';




const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:1000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
    

  
  };

  return (
    <div style={{backgroundColor:'beige',flexDirection:'column',alignItems:'center',gap:'10px',justifyContent:'center',display:'flex'}}>
     <div style={{alignContent:'start',display:'flex',justifyContent:"space-around",color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
    <div style={{justifyContent:'left',display:'flex'}}>
    <img src='mb3.png' width='100px' />
    </div>
   
    </div>
    <div style={{flexDirection:'column',alignItems:'center',gap:'10px',justifyContent:'center',display:'flex'}}>
      <h2 style={{color:'black'}}>PERSONAL-INFORMATION</h2>

      <div>
      <div >
      <label></label>

          <select defaultValue='Title' style={{width:'524px',padding:'10px'}}>
           <option>Miss.</option>
           <option>Mr.</option>
           <option>Mrs.</option>
           <option>Ms.</option>
           <option>Dr..</option>
           <option>Pr.</option>
           <option>Hon.</option>
           <option>-</option>
           </select>
        
           </div>
           </div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
          placeholder='First name*'
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Last name*'
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Email ID*'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Password*'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Confirm Password*'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        type='date' placeholder='Date Of Birth'
                />
                
      </div>
      <div style={{display:'inline'}}>
      <label></label>
    
      <center>
      <div style={{flexDirection:'column',alignItems:'center',gap:'10px',justifyContent:'center',display:'flex'}}>
      <h2 style={{color:'black'}}>BILLING-INFORMATION</h2>
      <div >
      <label></label>
          <select  style={{width:'524px',padding:'10px'}}>
          <option  value='none' selected disabled hidden >Location*</option>
           <option>Afganistan</option>
           <option>Albania</option>
           <option>Algeria</option>
           <option>Angola</option>
           <option>Argentina</option>
           <option>Australia</option>
           <option>Austria</option>
           <option>Azerbaijan</option>
           <option>Andorra</option>
           <option>Bharain</option>
           <option>Bangladesh</option>
           <option>Barbados</option>
           <option>Belize</option>
           <option>Benin</option>
           <option>Bhutan</option>
           <option>Bolivia</option>
           <option>Brazil</option>
           <option>Bulgaria</option>
           <option>Cambodia</option>
           <option>Cameroon</option>
           <option>Canada</option>
           <option>Chile</option>
           <option>China</option>
           <option>Colombia</option>
           <option>Cuba</option>
           <option>Denmark</option>
           <option>Dominica</option>
           <option>Dominican Republic</option>
           <option>Ecudor</option>
           <option>Egypt</option>
           <option>Ethiopia</option>
           <option>Fiji</option>
           <option>Finland</option>
           <option>France</option>
           <option>Georgia</option>
           <option>Germany</option>
           <option>Ghana</option>
           <option>Greece</option>
           <option>Haiti</option>
           <option>Hungary</option>
           <option>Iceland</option>
           <option>India</option>
           <option>Indonesia</option>
           <option>Iran</option>
           <option>Iraq</option>
           <option>Ireland</option>
           <option>Isarel</option>
           <option>Italy</option>
           <option>Jamaica</option>
           <option>Japan</option>
           <option>Jordan</option>
           <option>Kazakhastan</option>
           <option>Kenya</option>
           <option>Korea,South</option>
           <option>Kosovo</option>
           <option>Kuwait</option>
           <option>Libya</option>
           <option>Liberia</option>
           <option>Madagascar</option>
           <option>Malaysia</option>
           <option>Maldives</option>
           <option>Mexico</option>
           <option>Mali</option>
           <option>Namibia</option>
           <option>Nepal</option>
           <option>Netherlands</option>
           <option>New Zealand</option>
           <option>Nigeria</option>
           <option>Norway</option>
           <option>Oman</option>
           <option>Pakistan</option>
           <option>Panama</option>
           <option>Peru</option>
           <option>Poland</option>
           <option>Portugal</option>
           <option>Qatar</option>
           <option>Romania</option>
           <option>Russia</option>
           <option>Serbia</option>
           <option>Singapore</option>
           <option>Switzerland</option>
           <option>Syria</option>
           <option>Thailand</option>
           <option>Turkey</option>
           <option>United States</option>
           <option>United Kingdom</option>
           <option>Vatican City</option>
           <option>Yemen</option>
           <option>Zimbabwe</option>
           </select>
           </div>
           <div>
           <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Company*'
          type="text"
          required
        />
        <br/>
        </div>
        <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Address*'
          type="text"
          required
        />
        </div>
        <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='City*'
          type="text"
          required
        />
        </div>
        <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Zipcode*'
          type="text"
          required
        />
        </div>
   </div>
   <u style={{color:'black'}}></u>
      <p> <input  type='checkbox' />
      I agree to recieve information by email about offers,services,products and events from......or other group companies ,in accordance with the <a href='#'>privacy policy</a>
      </p>
      </center>
      </div>
      <div style={{width:'500px',padding:'10px',textAlign:'center'}}>
      <button onClick={handleSubmit} style={{backgroundColor:'black',height:'50px',flexDirection:'',padding:'10px',color:'white' }}><b>Create an Account</b></button>
   <br/>
   <br/>
   
    <a href='/login'  >Login to Mirabel</a>
     
     
     
     
      </div>
    </div>
  );
};

export default Register;

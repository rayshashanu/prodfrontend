import axios from 'axios';
import { useEffect, useState } from 'react';
import Forget from '../components/forgot';

function Forgetpage(){
    const[email,setEmail] =useState('');
    const[new_password,setPassword] =useState('');
    const[Confirm_Password,setConfirmPassword] =useState('');
    const[error,setError] =useState('');

    useEffect(()=>{
        console.log('email is:',email);
        console.log('password is:',new_password)},[email,new_password])

    const handleSubmit = async() => {
            setError("password updated successfully");
            const response = await axios.post('http://localhost:1000/forgot',{
            email,new_password
            })
         if(response.data){
            console.log(response.data);

        }
        // }else{
        //     setError("password updated failed");
        // }
    }
  return (
    <>
     <div style={{backgroundColor:'beige',flexDirection:'column',alignItems:'center',gap:'10px',justifyContent:'center',display:'flex'}}>
     <div style={{alignContent:'start',display:'flex',justifyContent:"space-around",color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
    {/* <input type='text' name='search' placeholder='search' style={{height:'30px'}}/> */}
    <div style={{justifyContent:'left',display:'flex'}}>
    <img src='mb3.png' width='100px' />
    </div>
    {/* <div style={{justifyContent:'space-between',alignContent:'end',display:'flex',flexDirection:'row',gap:'50px'}}>
    <h3>sign in</h3>
    <h3>favorites</h3>
    <h3>cart</h3>
    </div> */}
    </div>
    </div>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
        <h1>RESET_PASSWORD</h1>
        <tr>
            <td></td>
            <input type='text' placeholder='Email ID*'name='Email_id' onChange={(e)=>setEmail(e.target.value)}  style={{width:'500px',padding:'10px'}}/>
        </tr>
        <tr>
            <td></td>
            <input type='text' placeholder=' New Password*'name='new_password' onChange={(e)=>setPassword(e.target.value)} style={{width:'500px',padding:'10px'}}/>
        </tr>
        <tr>
        <td></td>
        <input type='text' placeholder='Confirm Password*'name='Confirm_Password' onChange={(e)=>setPassword(e.target.value)} style={{width:'500px',padding:'10px'}}/>
        </tr>
        <button onClick={handleSubmit} style={{color:'white',backgroundColor:'black',width:'100px',height:'30px'}}>submit</button>
        <div style={{color:'red'}}>{error}</div>
        
    <a href='/login'  >Login again to Mirabel</a>
    </div>
    <Forget/>
    </>
  )
};

export default Forgetpage;
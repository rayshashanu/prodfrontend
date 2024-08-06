import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";


const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const login = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const menfash = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/men')
  }
  const womenfash = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/women')
  }
  const kidfash = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/kid')
  }
  
const fav = () => {
  dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  navigator('/favourite')
}
const cart = () => {
  dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  navigator('/cart')
}
const logout = () => {
  dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  navigator('/')
}
const prof = () => {
  dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  navigator('/profile')
}
  // const user = useSelector((state) => state.user.user);

  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
   <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    <img src='mb3.png' style={{width:'100px'}}/>
     <h5 onClick={fav}> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5 onClick={cart}> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5>
   <h5 onClick={prof}> <FaRegUserCircle style={{fontSize:'20px'}}/>
          You
   </h5>
   <h5 onClick={logout}> <TbLogout2  style={{fontSize:'20px'}}  />
          Logout
   </h5>
    </div>
        <center>
      {/* <h1>"Style is a way to say who you are without having to speak..!"</h1> */}
      </center>
      <div style={{justifyContent:'space-around',display:'flex'}}>
      
      <a href="#" onClick={menfash}>
      <img src='men.png' style={{height:'500px'}}/>
      </a>
      <a href='#' onClick={womenfash}>
      <img src='women.png' style={{height:'500px'}}/>
      </a>
      <a href="#" onClick={kidfash}>
      <img src='kid3.png' style={{height:'500px'}}/>
      </a>
      </div>
    

      <div >
            </div>
      
            {/* <div style={{alignContent:'start',display:'fl',justifyContent:"space-around",flexDirection:'column',width:'1450px',padding:'20px'}}>
                            <h3>Contact Details</h3>
                            <p>
                                <span class="fa-phone">Telephone:</span>(212)888-77-88
                                <br/>   <span class="fa-envelope">Email:</span>
                                <br/>  <a href="mailto:info@joomla51.com">dhnr@gmail.com</a>
                                <br/>  <span class="fa-link">Website:</span>
                                <br/> <a href="http://www.joomla51.com">www.dreszone.com</a>
                            </p>
                            <p >The Dunes, Top Road,
                              <br/> Street12,
                              <br/> New York City
                                </p> */}
                            {/* <h3 style={{alignContent:'space-between',display:'flex',justifyContent:'normal',flexDirection:'column'}}>Our Collection</h3>
                            <ul class="menu">
                                <li>
                                    <a class="fa-tasks" href="#">Men </a>
                                </li>
                                <li>
                                    <a class="fa-users" href="#">Women</a>
                                </li>
                                <li>
                                    <a class="fa-signal" href="#">Kids</a>
                                </li>
                            </ul>
      
                       <h3 class="color-gray margin-bottom-10">Join our Newsletter</h3>
                            <p>
                                Sign up for our newsletter for all the
                                latest news and information
                            </p>
                            <input type="email"/>
                            <button class="btn btn-primary btn-lg margin-top-20" type="button">Subscribe</button> */}
                      {/* </div> */}
                      </div>
                    
                       
               
                
           
        
    
    </>
  );
};

export default Home;

import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { BiHomeAlt2 } from "react-icons/bi";

const Favourite= () => { 
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const home = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/mainhome')
  }
  const car = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/cart')
  }
 
  return (
    <>


    
    <div style={{backgroundColor:'beige'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
   <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    <img src='mb3.png' style={{width:'100px'}}/>
    <h5 onClick={home}><BiHomeAlt2  style={{fontSize:'20px'}} />
          Home
   </h5>
    
    <h5 onClick={car}> <AiOutlineShoppingCart style={{fontSize:'20px'}} />
          Cart
   </h5>
    </div>
    </div>
    <div style={{justifyContent:'space-around',display:'flex'}}>
      <a href="#">
      <img src='k1.jpg' style={{height:'200px'}}/>
      </a>
      <a href='#'>
      <img src='w3.jpg' style={{height:'200px'}} />
      </a>
      <a href="#">
      <img src='m1.jpg' style={{height:'200px'}}/>
      </a>
    </div>
    <div style={{justifyContent:'space-around',display:'flex'}}>
    <p>combo <br/> 12000/-</p>
    <p>palazzo pant <br/>3299/-</p>
    <p>jacket <br/> 2999</p>
    </div>
    
    <div style={{justifyContent:'space-around',display:'flex'}}>
        <button  onClick={car} value='Add to Cart' style={{width:'200px'}}>Add To cart</button>
        <button   onClick={car} value='Add to Cart'  style={{width:'200px'}}>Add To cart</button>
        <button  onClick={car} value='Add to Cart'  style={{width:'200px'}}>Add To cart</button>
        
        </div>
    </>
  );
};

export default Favourite;
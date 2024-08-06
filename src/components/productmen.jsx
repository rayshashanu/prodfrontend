import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiHomeAlt2 } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Home from "./home";
import axios from "axios";
import { useEffect } from "react";
function Productmen(){
 
    const navigator = useNavigate()
    const dispatch = useDispatch()
    // const [productId, setproductId] = useState('');
    // const [userId, setuserId] = useState('');
    //  const handleSubmit = async () => {

    // if (!firstName || !lastName || !email || !password || !confirmPassword) {
    //   console.error('Please fill in all fields');
    //   return;
    // }
  

    // if (password !== confirmPassword) {
    //   console.error('Passwords do not match');
    //   return;
    // }
  
    // try {
    //   const response = await axios.post('http://localhost:1000/cart', {
    //     productId,
    //     userId
    //   });
    //   console.log(response.data); 
    //   if(response.data) {
    //     navigator('/cart')
    //   }
    // } catch (error) {
    //   console.error('Add to cart failed', error);
    // }
    
    const home = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/mainhome')
  }
  const [products, setProduct] = useState()
  useEffect(() => {
    const fetch = async  () => {
    const pro = await axios.get('http://localhost:1000/productlist');
    setProduct(pro.data);
    }
    fetch()
    // console.log('fgh',image);
  }, []);
  const fav = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/favourite')
  }
  const cart = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/cart')
  }
  const [productId, setproductId] = useState('');
  const [userId, setuserId] = useState('');
  
  const handleSubmit = async (e) => {

  try {
    console.log(productId,'123');
    console.log(userId,'123');
    const response = await axios.post('http://localhost:1000/men', { productId, userId });
    const { productId } = response.data;
    // dispatch({ type: 'SET_USER', payload: productId }); 
     if(response.data) {
      navigator('/favourite');
     }       
  } catch (error) {
    console.error(' failed', error);
  }
};

        
    return (
        <>
        <div  style={{backgroundColor:'beige',display:"flex",alignContent:'center', gap:'20px'}}> 
        <img src='mb3.png' style={{width:'80px'}}/>
        {/* <input type='radio'></input> */}
        <select  style={{width:'100px',height:"50px"}}>
            <option  value='none' selected disabled hidden>SORT BY</option>
            <option style={{maxWidth:'100px'}} >Recommended</option>
            <option>Newest</option>
            <option >Highest Price</option>
            <option>Lowest Price</option>
        </select>
        <select  style={{width:'100px',height:"50px"}}>
            <option  value='none' selected disabled hidden >COLOR</option>
            <option  height='50px' width='150px'style={{backgroundColor:'red'}}>Red</option>
            <option style={{backgroundColor:'green' }}>Green</option>
            <option style={{backgroundColor:'yellow'}}>Yellow</option>
            <option  style={{backgroundColor:'Beige'}}>Beige</option>
            <option style={{backgroundColor:'black', color:'white' }}>Black</option>
            <option style={{backgroundColor:'brown'}}>Brown</option>
            <option  style={{backgroundColor:'gold'}}>Gold</option>
            <option style={{backgroundColor:'grey' }}>Grey</option>
            <option style={{backgroundColor:'orange'}}>Orange</option>
            <option  style={{backgroundColor:'blue'}}>Blue</option>
            <option style={{backgroundColor:'aqua' }}>Aqua</option>
            <option style={{backgroundColor:'white'}}>White</option>
            <option  style={{backgroundColor:'greenyellow'}}>Greeny Yellow</option>
        </select>
        <select  style={{width:'100px',height:"50px"}}>
            <option  value='none' selected disabled hidden >SIZE</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>Freesize</option>
            </select>
            </div>
            <div style={{justifyContent:"end",display:"flex",backgroundColor:"beige",gap:'30px'}}>
            <h5 onClick={home}><BiHomeAlt2  style={{fontSize:'20px'}} />
          Home
    </h5>
     <h5 onClick={fav} value={productId}> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5 onClick={cart}> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5>
  
        </div> 
        <div style={{justifyContent:'space-around',display:'flex'}}>
      {/* <a href="#" >
      <img src='b11.png' style={{height:'500px'}}/>
      <FaRegHeart style={{fontSize:'20px'}}   onClick={fav}/>
      </a> */}
      
      {/* <a>
      <img src='b2.png' style={{height:'500px'}}/>
      <FaRegHeart style={{fontSize:'20px'}}    onClick={fav}/>
      </a>
      <a href="#">
      <img src='b3.png' style={{height:'500px'}}/>
      <FaRegHeart style={{fontSize:'20px'}}   onClick={fav} />
      </a> */}
      <a href="#">
      {products?.map((obj, index) => (
            <a key={index}> 
            <FaRegHeart style={{fontSize:'20px'}} onClick={fav} /> 
            <button  onClick={cart}  value='Add to Cart' style={{width:'200px'}}> {obj._product} Add To cart</button>
              <img src={`http://localhost:1000/${obj.image}`} alt={obj.productName} style={{ width: '350px', height: '500px'  }} />
            </a>
      ))}
    
      {/* <img src='b4.png' style={{height:'500px'}}/>
      <FaRegHeart style={{fontSize:'20px'}}    onClick={fav}/>
      </a> */}
      </a>
      </div>
        <div style={{justifyContent:'space-around',display:'flex'}}>
        {/* <button  onClick={cart} value='Add to Cart' style={{width:'200px'}}>Add To cart</button>
        <button   onClick={cart} value='Add to Cart'  style={{width:'200px'}}>Add To cart</button>
        <button  onClick={cart} value='Add to Cart'  style={{width:'200px'}}>Add To cart</button>
        <button  onClick={cart} value='Add to Cart'  style={{width:'200px'}}>Add To cart</button> */}
        </div>
        
        </>
      
    );
  };

  
  export default Productmen;
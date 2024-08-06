import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Frame from 'react-frame-component';
import { useDispatch } from 'react-redux';
import { TbLogout2 } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
function Admin(){
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const home = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
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
     <h5 onClick={logout}> <TbLogout2  style={{fontSize:'20px'}}  /> 
Logout    </h5>
    {/* <h5> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5> */}
    </div>
    </div>
    <div>
    <div style={{backgroundColor:'beige',font:'black',flexDirection:'column',display:"flex"}}>
        </div>
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <center>
            <button style={{height:'50px' , width:'200px', backgroundColor:'beige'}}><a href='/addproduct'  target='_self'>Add Product</a></button>
            <br/>
            <button  style={{height:'50px' , width:'200px', backgroundColor:'beige'}}><a href='/productlist' target='_self'>Product List</a></button>
            <br/>
            {/* <button  style={{height:'50px' , width:'200px'}}><a href='/productlist' target='_self'>Order Tracking</a></button>
            <br/>
            <button  style={{height:'50px' , width:'200px'}}><a href='/productlist' target='_self'>User Details</a></button> */}
            </center>
    {/* <select  style={{width:'200px',height:"50px"}}>
            <option  value='none' selected disabled hidden >Ecommerce</option>
              <option value='/addpro'>Add Product</option>
              <option>Product List</option>
            </select>
            </div>
            <div>
     <select  style={{width:'200px',height:"50px"}}>
            <option  value='none' selected disabled hidden >User</option>
              <option >All User</option>
              <option>Add New User</option>
              <option>Login</option>
              <option>Sign Up</option>
            </select>
            </div> */}
            <div>
    {/* <select  style={{width:'200px',height:"50px"}}>
            <option  value='none' selected disabled hidden >Order</option>
              <option>Order List</option>
              <option>Order Detail</option>
              <option>Order Tracking</option>
            </select> */}
            </div>
    <frameset>
      {/* <img src='picu.jpg'/>
      <frame src="/adminmain" target='admin'/> */}
    </frameset>
 </div>
</div>
   </>
  );
};

export default Admin;
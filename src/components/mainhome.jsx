import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';

const Mainhome= () => {
    const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
    
  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px',fill:'beige'}}>
   <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
   <center>
    <img src='mb3.png' style={{width:'100px'}}/>
    </center>
    <h5 onClick={logout}><FaRegUser style={{fontSize:'20px'}} />
          Sign in
    </h5>
     {/* <h5> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5> */}
    </div>
   
      <video autoPlay loop muted id='video1' >
        <source src='video.mp4' type="video/mp4"/>
      </video>
    </div>
  
    </>
  );
};

export default Mainhome;
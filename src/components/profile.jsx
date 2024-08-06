import { FaRegUserCircle } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Profile= () => {
    const navigator = useNavigate()
    const dispatch = useDispatch()
    const home = () => {
        dispatch({ type: 'SET_USER', payload: 'user not found' }); 
        navigator('/mainhome')
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
    </div>
    </div>
    <div style={{flexDirection:'column',alignItems:'center',gap:'10px',justifyContent:'center',display:'flex'}}>
      <h2 style={{color:'black'}}>USER PROFILE</h2>
    </div>
    <center>
    <div style={{border:'solid',borderRadius:'10px',backgroundColor:'white',width:'500px',height:'500px'}}>
        <h2> <FaRegUserCircle style={{fontSize:'60px'}}/> </h2><br/>
        <input style={{width:'300px',padding:'10px'}} placeholder="name" /><br/>
        <input style={{width:'300px',padding:'10px'}}placeholder='Address'/><br/>
        <input style={{width:'300px',padding:'10px'}}placeholder='email'/><br/>
        

    </div>
    </center>



    </>
    );   
};   
export default Profile;
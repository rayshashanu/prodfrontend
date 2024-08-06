import { SiTicktick } from "react-icons/si";
import { BiHomeAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Success= () => { 
    const dispatch = useDispatch()
  const navigator = useNavigate()
  const home = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/mainhome')
  }
    
    return (
      <>
      <div style={{backgroundColor:'beige'}}>
      <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
      <img src='mb3.png' style={{width:'100px'}}/>
      <h5  onClick={home}><BiHomeAlt2  style={{fontSize:'20px'}} />
            Home
     </h5>
     </div>
      </div>
      <div>
      <center>
        <br/>
        <br/>
        <br/>
        <br/>
      <SiTicktick style={{fontSize:'150px'}}  />
        <h1>ORDER SUCCESSFULLY PLACED</h1>
        </center>
      </div>
      </>
    );
  };
  
  export default Success;
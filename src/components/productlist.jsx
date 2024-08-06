import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


// const imageUpload = (event) => {
//  setImage(event.target.files[0])
 
// } 

const Productlist= () => {
  // const [image, setImage] = useState(null);
  const [products, setProduct] = useState()
  useEffect(() => {
    const fetch = async  () => {
    const pro = await axios.get('http://localhost:1000/productlist');
    setProduct(pro.data);
    }
    fetch()
    // console.log('fgh',image);
  }, []);
  
 
  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div>
        <center>
    <img src='mb3.png' style={{width:'100px'}}/>
    </center>
    </div>
    
    <div style={{justifyContent:'space-between', display:'flex'}}>
     <input type='text' name='search' placeholder='Search here...'style={{width:'350px', height:'30px'}}/>
     <button style={{width:'300px'}}>+ ADD NEW</button>
     </div>
     <br/>
     <table style={{ width: '100%'}}>
        <thead >
          <tr>
          <th>Product ID</th>
           <th>Image</th>
          <th>Category</th>
          <th>Product</th>
          <th>Size</th>
          <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((obj, index) => (
            <tr  key={index}>
              <td style={{justifyContent:'space-around',display:'flex'}}>{index}</td>
              <td style={{textAlign:'center'}} ><img src={`http://localhost:1000/${obj.image}`} alt={obj.productName} style={{ width: '60px', height: '60px'  }} />
</td>
              <td  style={{justifyContent:'space-around',display:'flex'}} >{obj.category}</td>
              <td style={{textAlign:'center'}} >{obj.productName}</td>
           
              <td style={{justifyContent:'space-around',display:'flex'}}>{obj.size}</td>
              <td style={{textAlign:'center'}} >{obj.price}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
     </div>

    
     </>
  );
};

export default Productlist;
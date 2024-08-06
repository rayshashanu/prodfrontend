import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Await, useNavigate } from 'react-router-dom';

const Addproduct= () => {
  const [productId, setProductId] = useState('');
const [productName, setProductName] = useState('');
const [category, setCategory] = useState('');
const [gender, setGender] = useState('');      
const [brand, setBrand] = useState('');
const [size, setSize] = useState('');
const [file, setFile] = useState(null);
const [price, setPrize] = useState();
const navigator = useNavigate();

const imageUpload = (event) => {
 setFile(event.target.files[0])
 
} 


 
  const handleSubmit = async (e) => {

  try {
    console.log(productId,'123');
    console.log(category,'123');
    console.log(gender,'123');
    console.log(brand,'123');
    console.log(size,'123');
    const response = await axios.post('http://localhost:1000/addproduct', { 
    file,
    category,
    gender,
    brand,
    size,
    productName,
    price},
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    // const { productId } = response.data;
    // dispatch({ type: 'SET_USER', payload: productId }); 
  
     if(response) {
      navigator('/');
     }       
  } catch (error) {
    console.error(' failed', error);
  }
};
  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div>
        <center>
    <img src='mb3.png' style={{width:'100px'}}/>
    </center>
    </div>
    </div>
    <center>
    <div target='/admin' >
        <h1>Add Product</h1>
        <div>
        <label></label>
        <input placeholder='Enter Product Name*' style={{width:'278px',padding:'10px'}}
          type="text"   value={productName}  onChange={(e) => setProductName(e.target.value) }
         />
</div>
<div>
         <select  style={{width:'300px',height:"50px"}} onChange={(e) => setCategory(e.target.value)}>
            <option  value='none' selected disabled hidden >Choose Category</option>
              <option>Women</option>
              <option>Men</option>
              <option>Kids</option>
            </select>
            </div>
            <div>
         <select  style={{width:'300px',height:"50px"}}  onChange={(e) => setGender(e.target.value)}>
            <option  value='none' selected disabled hidden >Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            </div>
            <div>
         <select  style={{width:'300px',height:"50px"}}  onChange={(e) => setBrand(e.target.value)}>
            <option  value='none' selected disabled hidden >Brand</option>
              <option>Allen Solly</option>
              <option>Tommy hilfiger</option>
              <option>Levis</option>
              <option>U.S Pollo  Assn.</option>
              <option>Zara</option>
            </select>
            </div>
            <div>
            <select  style={{width:'300px',height:"50px"}}  onChange={(e) => setSize(e.target.value)}>
            <option  value='none' selected disabled hidden >Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>Freesize</option>
            </select>
            </div>   
            <table border={1} width={300}>
            <h5>Add Image:</h5>
            <input type="file" onChange={imageUpload} />
            </table>
            <div>
            <input type="number" name='price' onChange={(e) => setPrize(e.target.value)}  placeholder='Enter Price*' style={{width:'278px',padding:'10px'}}/>

            </div>
            <input type='submit' onClick={handleSubmit} value='SUMBIT'></input>
           </div>
            </center>
   
    </>
  );
}

export default Addproduct;
import React,{useState} from "react";
import {vegitables,meat,milk,fruits} from "./data/vegi";
export default function Sticky(pro) {

    const [inputdata,setinputdata]=useState(20);
    const handleRangeChange = (event) => {
      setinputdata(event.target.value);
    };
    return(
      <React.Fragment>
      <div className='sticky-bottom'>
      <div className='innercontent'>
    <h3>Shop</h3>
    <p>Product categories</p>
    <ul>
    <li>
    Dairy & Eggs</li>
    <li onClick={()=>{pro.newsetdata(meat)}}>Fish & Seafood</li>
    <li onClick={()=>{pro.newsetdata(fruits)}}>Fruit</li>
    <li onClick={()=>{pro.newsetdata(meat)}}>Meat & Poultry</li>
    <li onClick={()=>{pro.newsetdata(milk)}} >Milk & Drinks</li>
    <li onClick={()=>{pro.newsetdata(vegitables)}}>Vegetables
    </li></ul><hr className='hr'/>
    <div className="price">
    <p>Price</p>
    <div style={{marginLeft:'10px'}}>
    <input
    type="range"
    id="rangeInput"
    name="rangeInput"
    min="10"
    max="400"
    step='10'
    value={inputdata}
    style={{width:'200px',accentColor:'green',height:'5px'}}
    onChange={handleRangeChange}
    />
    <p>Price: ₹{inputdata} — ₹400</p><br></br>
    <button onClick={()=>{pro.fun(inputdata)}}>Filter</button>
    </div>
   
    </div>
    <hr className='hr'/>
  
      </div>
      </div>
      </React.Fragment>
    )
  
}

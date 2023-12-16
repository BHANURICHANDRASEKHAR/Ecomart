<div className='main-grid'>
 {
  rawdata.name.map((e)=>{
    const {id,image,price}=e;
    return(
      <div className='grid-item1'>
      <img src={image}/>
      <p>{price}</p>
      </div>
    )
  })
}</div>
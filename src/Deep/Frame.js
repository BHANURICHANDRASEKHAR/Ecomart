import React, { useState, useEffect } from 'react';

export default function Frame(pro) {
  const item = pro.item;

  useEffect(() => {
    console.log('Frame component mounted');
    alert('hi');
    console.log(item);
  
    return () => {
      console.log('Frame component unmounted');
    };
  }, [item]);
  
  return (
    <div className='container' style={{ display: 'flex' }}>
      <Img item={item} />
      <Description />
      <Like />
    </div>
  );
}

  const Img = (pro1) => {
    console.log('Img component rendered');
    return (
      <div className='row-4' style={{ background: 'red', width: '33.3%', marginRight: '5px' }}>
        <div className='img-container'></div>
      </div>
    );
  };
  
  const Description = () => {
    console.log('Description component rendered');
    return (
      <div className='row-4' style={{ background: 'red', width: '33.3%', marginRight: '5px' }}>
        lorem bhanurei cgnafhhvgfds bhanuejuc
      </div>
    );
  };
  
  const Like = () => {
    console.log('Like component rendered');
    return (
      <div className='row-4' style={{ background: 'red', width: '33.3%', marginRight: '5px' }}>
        lorem bhanurei cgnafhhvgfds bhanuejuc
      </div>
    );
  };
  

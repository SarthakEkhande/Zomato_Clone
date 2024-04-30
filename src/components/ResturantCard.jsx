import React from 'react'
import Shimmer from './Shimmer';

const ResturantCard = (props) => {
    const {resdata}=props
    // console.log(props);
    const {name,price,item_type,rating,desc}=props.data.item

    if (props === null) return <Shimmer />;
  return (
    <div  className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <h1>{name}</h1>
     
      <p>{price}</p>
      <p>{item_type}</p>
      <p>{rating}</p>
      <p>{desc}</p>
    </div>
  )
}

export default ResturantCard
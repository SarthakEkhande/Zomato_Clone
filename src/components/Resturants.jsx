import React from 'react'
import { FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";

const Resturants = (props) => {
    // console.log(props);
    const {name,image,cuisine}=props.data.info
    const {deliveryTime}=props.data.order
    const {localityUrl}=props.data.info.locality
    const {aggregate_rating}=props.data.info.rating
    // console.log(cuisine);
  return (
    <div  className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer ">
     
        <img  className="rounded-lg" src={image.url}></img>
        <h1 className='font-bold text-md'>{name}</h1>
        <ul className='list-disc relative left-4'>
        {
          cuisine &&  cuisine.map((cusine,index)=>(
            <li className='font-medium text-sm' key={index}>{cusine.name}</li>

          ))
        }
        </ul>
       <div className='text-sm'>
       <p className='font-bold flex my-2'><FaStarHalfStroke />{aggregate_rating}</p>
        <p className='font-bold flex'><MdOutlineDeliveryDining />{deliveryTime}</p>
       </div>
       
        {/* <p>{localityUrl}</p> */}
      
      
       
    </div>
  )
}

export default Resturants
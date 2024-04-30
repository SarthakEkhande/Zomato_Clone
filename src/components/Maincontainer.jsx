import React, { useEffect, useState } from 'react'
import ResturantCard from './ResturantCard'

const Maincontainer = () => {
    const [Restarant,setRestarant]=useState("")
    async function getdata(){
        const data=await fetch("https://www.zomato.com/webroutes/getPage?page_url=/pune/mcdonalds-shaniwar-peth/order&location=&isMobile=0")
        const json=await data.json()

        // console.log(json?.page_data?.order?.menuList[0]?.menus[0].categories[0])
        console.log(json.page_data.order.menuList.menus[0].menu.categories[0].category.items[0].item.groups[0].group.items[0].item.name);
        console.log(json.page_data.order.menuList.menus[0].menu.categories[0].category.items[0].item.groups[0].group.items[0].item.price);
        setRestarant(json.page_data.order.menuList.menus[0].menu.categories[0].category.items[0].item.groups[0].group.items)


    }
    useEffect(()=>{
        getdata()


    },[])
  return (
    <div className='flex flex-row flex-wrap'>
      {/* <h1>{Restarant.name}</h1> */}
     

      {
        Restarant &&  Restarant.map((res)=>(
            <ResturantCard key={res.item.id} data={res}/>


          ))
      }
    
    </div>
  )
}

export default Maincontainer
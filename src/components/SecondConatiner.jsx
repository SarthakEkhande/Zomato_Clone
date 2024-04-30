import React, { useEffect, useState } from 'react'
import Resturants from './Resturants'
import Shimmer from './Shimmer'

const SecondConatiner = () => {

    const [data,setdata]=useState([])
    const [filterresturant,setfilterresturant]=useState([])

    const [Searchtext,setSearchtext]=useState("")


    async function getdata(){
        const data=await fetch("https://www.zomato.com/webroutes/getPage?page_url=/pune/expressway-restaurants?place_name=Hinjawadi%2C+Pimpri-Chinchwad&dishv2_id=55280&category=1&location=&isMobile=0")
        const json=await data.json()
        // console.log(json.page_data.sections.SECTION_SEARCH_RESULT[0].info.name);
        const resturantdata=json.page_data.sections.SECTION_SEARCH_RESULT
        setdata(resturantdata)
       
        setfilterresturant(resturantdata)
    }
   

    useEffect(()=>{
        getdata()
    },[])
    const handleFilter = () => {
      // Perform filtering on the original data
      const filteredData = data.filter(res => res.info.rating.aggregate_rating > 4);
      setfilterresturant(filteredData);
  };

    // const filterdata=()=>{
      
    console.log(Searchtext);
    
    
    // }
  return (
    <div >
    <div className='flex '>
    <div className="mx-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={Searchtext}
            onChange={(e)=>{
              setSearchtext(e.target.value)
            }}
            
          
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={()=>{
              const filterresturant=data.filter((res)=>
                res.info.name.toLowerCase().includes(Searchtext.toLowerCase())
                 
              )
              setfilterresturant(filterresturant)
            }}
           
          >
            Search
          </button>
        </div>
     <div>
        <button className='p-2 my-2 mx-80 rounded-lg bg-orange-600 border border-black'
        onClick={handleFilter}
        
        >Top Rated Resturants</button>
      </div> 
    </div>
    
      <div className='flex flex-row flex-wrap relative left-10'>
      {
          filterresturant &&  filterresturant.map((res,index)=>(
            <div>
                <Resturants key={index} data={res}/>
                {/* <Resturants key={index} data={res}/> */}
                </div>
            ))
        }
      </div>
      
    </div>
  )
}

export default SecondConatiner
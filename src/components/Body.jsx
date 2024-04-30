import React from 'react'
import Header from './Header'
import Maincontainer from './Maincontainer'
import SecondConatiner from './SecondConatiner'
import Shimmer from './Shimmer'

const Body = () => {
  return (
    <div>
        <Header/>
        {/* <Maincontainer/> */}
      <SecondConatiner/>
      <Shimmer/>

    </div>
  )
}

export default Body
import React from 'react'
import Cards from '../Components/cards'

function Categories() {
  return (
    <div className='bg-gray-900'>
      <header className='text-2xl font-semibold text-gray-100 lg:ml-56 ml-2 mb-2'>
      Trending Categories
      </header>
      <div className='lg:mt-4 lg:ml-60 lg:flex lg:space-x-2 flex space-x-4  mb-4 ml-6 '>
        <Cards name="Actions Game" numbers="1" url=""/>
        <Cards name="Sports Games" numbers="2" url=""/>
        <Cards name="adventure Games" numbers="3" url=""/>
        <Cards name="Arcade Games" numbers="4" url=""/>
      </div>
      <div className='lg:mt-4 lg:ml-60 lg:flex lg:space-x-2 lg:pb-10 flex space-x-4 ml-6'>
        <Cards name="Fantasy Games" numbers="5" url=""/>
        <Cards name="Strategy Game" numbers="6" url=""/>
        <Cards name="Shooter Games" numbers="7" url=""/>
        <Cards name="All categories" numbers="View All" url=""/>
      </div>
    </div>
  )
}

export default Categories
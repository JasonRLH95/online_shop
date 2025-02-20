import React from 'react'

export default function SearchBar({ setSearchData, renderSearch }) {
  return (
    <div id='navbarUpperDiv_middle'>
    <input type="text" className='searchbar_input' placeholder='Search...' onChange={(e)=>{setSearchData(e.target.value)}}/>
    <div className='dynamicResultList'>
      {renderSearch()}
    </div>
  </div>
  )
}

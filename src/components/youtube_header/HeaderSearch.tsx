import React from 'react'
import { GoSearch } from "react-icons/go";
const HeaderSearch = () => {
  return (
    <>
      <div className="border-3 flex items-center" style={{ width: '400px', border: '2px solid #ccc' }}>
        <div style={{ width: '340px' }}>
          <input type="search" placeholder="Search" className=" outline-0 ml-2 border-0 p-1" />
        </div>
        <div className='border-l-4 border-t-0 border-r-0 border-b-0 flex justify-center
       items-center'
          style={{ width: '60px', height: '50px', background: '#F3F3F3' }}>
          <div className="flex items-center justify-center align-center search_icon">
            <GoSearch />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSearch
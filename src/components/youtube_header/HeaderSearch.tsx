import React from 'react'
import { GoSearch } from "react-icons/go";
const HeaderSearch = () => {
  return (
    <>
      <div className="header_search_main border-3 flex items-center">
        <div className="header_search_input_div">
          <input type="search" placeholder="Search" className=" outline-0 ml-2 border-0" />
        </div>
        <div className='header_search_icon_div border-l-4 border-t-0 border-r-0 border-b-0 flex 
        justify-center items-center'>
          <div className="flex items-center justify-center align-center search_icon">
            <GoSearch />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSearch
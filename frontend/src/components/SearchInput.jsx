import React from 'react'
import "./SearchInput.css"
import SearchIcon from "../assets/search.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

const SearchInput = () => {
  return (
    <div className='search-input'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='text' placeholder='Search'/>
    </div>
  )
}

export default SearchInput

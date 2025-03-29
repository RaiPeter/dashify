import React, { useEffect, useRef } from 'react'
import "./SearchInput.css"
import SearchIcon from "../assets/search.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

const SearchInput = () => {
  const inputRef = useRef(null);

  useEffect(()=>{
    const handleKeyPress = (e) =>{
      if(e.key === "/"){
        e.preventDefault();
        inputRef.current.focus();
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown",handleKeyPress)
    }
  },[]);

  return (
    <div className='search-input'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='text' placeholder='Search' ref={inputRef}/>
    </div>
  )
}

export default SearchInput

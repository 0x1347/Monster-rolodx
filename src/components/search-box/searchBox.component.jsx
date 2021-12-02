import React from "react";
import './searchBox.style.css'

export const SearchBox = ({placeholder , handleChanger}) => (
    <input className='search' type='search' placeholder={placeholder} onChange={handleChanger}/>

)
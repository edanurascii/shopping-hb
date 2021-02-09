import React from 'react';
import '../styles/Search.css';
import Dropdown from './Dropdown';

const Search = ({ searchItem }) => {
    return (
        <div className='searched-item-dropdown-wrapper'>
            <div className='searched-item-container'>
                <span className='search-item-title'>iPhone iOS cep telefonu</span>
                <span className='search-item'>Aranan Kelime: { searchItem }</span>
            </div>
            <Dropdown />
        </div>
    );
};

export default Search;
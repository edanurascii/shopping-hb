import React, { useState, useEffect } from 'react';
import Search from './Search';
import '../styles/Header.css';

const Header = () => {
    const useStateWithLocalStorage = localStorageKey => {
        const [value, setValue] = useState(
            localStorage.getItem(localStorageKey) || ''
        );

        useEffect(() => {
            localStorage.setItem(localStorageKey, value);
        }, [value]);

        return [value, setValue];
    };

    const [value, setValue] = useStateWithLocalStorage('searchInput');

    const onChange = event => setValue(event.target.value);

    return (
        <>
            <div className='header-container'>
                <div className='header-logo'></div>

                <div className='search-container'>
                    <i className='search-icon' />
                    <input
                        type='text'
                        className='search-input'
                        placeholder="25 milyon'dan fazla ürün içerisinde ara"
                        value={ value }
                        onChange={ onChange }
                    />
                </div>

                <button className='basket'>Sepetim</button>
            </div>
            <Search searchItem={ value } />
        </>
    );
};

export default Header;
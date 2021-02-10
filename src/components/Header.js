import React, { useState, useEffect } from 'react';
import Search from './Search';
import styled from 'styled-components';
import {
    DropdownWrapper,
    DropdownLabel,
    DropdownListItem
} from './Dropdown';
import '../styles/Dropdown.css';
import '../styles/Header.css';

const Header = () => {
    const totalProducts = localStorage.getItem('totalProducts') || 0;

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
            <HeaderContainer>
                <div className='header-logo' />
                <SearchContainer>
                    <i className='search-icon' />
                    <SearchInput
                        type='text'
                        className='search-input'
                        placeholder="25 milyon'dan fazla ürün içerisinde ara"
                        value={ value }
                        onChange={ onChange }
                    />
                </SearchContainer>
                <DropdownWrapper>
                    <DropdownLabel>
                        <Badge onChange={ onChange }>{ totalProducts }</Badge>
                        <BasketTitle>Sepetim</BasketTitle>
                        <input className='dropdown-input' type='checkbox' />
                        <ul className='dropdown-list'>
                            <DropdownListItem >Products will be shown</DropdownListItem>
                        </ul>
                    </DropdownLabel>
                </DropdownWrapper>
            </HeaderContainer>
            <Search searchItem={ value } />
        </>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #d1cfc8;
`;

const SearchContainer = styled.div`
    display: block;
    width: 70%;
    margin-left: 40px;
    margin-right: 40px;
`;

const SearchInput = styled.input`
    height: 48px;
    width: 100%;
    box-sizing: border-box;
    background-color: #ececec;
    border: 1px solid #ececec;
    border-radius: 80px;
    color: #919191;
    padding-left: 55px;
    outline: none;
`;

const Badge = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: #fe6f18;
    color: white;
`;

const BasketTitle = styled.div`
    display: inline-block;
    border: 1px solid;
    border-radius: 5px;
    border-color: #d1cfc8;
    padding: 13px 40px 13px 30px;
    outline: none;
    color: #919191;
    background-color: #fff;
    cursor: pointer;
    white-space: nowrap;

    &:after {
        content: '';
    }
`;
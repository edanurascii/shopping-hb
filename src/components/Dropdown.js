import React from 'react';
import styled from 'styled-components';
import '../styles/Dropdown.css';

const Dropdown = () => {
    const products = JSON.parse(localStorage.getItem('products')) || '';

    const sortByLowerPrice = () => {
        let sortedByLowerPriceProducts = products.sort((a, b) => {
            if (parseFloat(a.sale_price) > parseFloat(b.sale_price)) {
                return 1;
            } else if (parseFloat(a.sale_price) < parseFloat(b.sale_price)) {
                return -1;
            } else {
                return 0;
            }
        });

        localStorage.setItem('products', JSON.stringify(sortedByLowerPriceProducts));
        window.location.reload();
    };

    const sortByHigherPrice = () => {
        let sortedByHigherPriceProducts = products.sort((a, b) => {
            if (parseFloat(a.sale_price) < parseFloat(b.sale_price)) {
                return 1;
            } else if (parseFloat(a.sale_price) > parseFloat(b.sale_price)) {
                return -1;
            } else {
                return 0;
            }
        });

        localStorage.setItem('products', JSON.stringify(sortedByHigherPriceProducts));
        window.location.reload();
    };

    const sortByAscendingLetter = () => {
        let sortedByAscendingLetter = products.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        });

        localStorage.setItem('products', JSON.stringify(sortedByAscendingLetter));
        window.location.reload();
    };

    const sortByDescendingLetter = () => {
        let sortedByDescendingLetter = products.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            } else if (a.name > b.name) {
                return -1;
            } else {
                return 0;
            }
        });

        localStorage.setItem('products', JSON.stringify(sortedByDescendingLetter));
        window.location.reload();
    };

    return (
        <DropdownWrapper>
            <DropdownLabel>
                <DropdownTitle>Sıralama</DropdownTitle>
                <input className='dropdown-input' type='checkbox' />
                <ul className='dropdown-list'>
                    <DropdownListItem onClick={ sortByLowerPrice }>En Düşük Fiyat</DropdownListItem>
                    <DropdownListItem onClick={ sortByHigherPrice }>En Yüksek Fiyat</DropdownListItem>
                    <DropdownListItem onClick={ sortByAscendingLetter }>En Yeniler (A{'>'}Z)</DropdownListItem>
                    <DropdownListItem onClick={ sortByDescendingLetter }>En Yeniler (Z{'>'}A)</DropdownListItem>
                </ul>
            </DropdownLabel>
        </DropdownWrapper>
    );
}

export default Dropdown;

export const DropdownWrapper = styled.div`
    margin-right: 50px;
`;

export const DropdownLabel = styled.label`
    display: inline-block;
    position: relative; 
`;

export const DropdownTitle = styled.div`
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
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #919191;
    }
`;

export const DropdownListItem = styled.li`
    color: #919191;
    padding: 6px 18px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        background-color: grey;
        color: #fff;
    }
`;
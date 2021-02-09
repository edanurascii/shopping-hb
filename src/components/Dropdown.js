import React from 'react';
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
        <div className='dropdown-wrapper'>
            <label className='dropdown'>
                <div className='dropdown-title'>Sıralama</div>
                <input type='checkbox' className='dropdown-input' />
                <ul className='dropdown-list'>
                    <li onClick={ sortByLowerPrice } className='dropdown-list-item'>En Düşük Fiyat</li>
                    <li onClick={ sortByHigherPrice } className='dropdown-list-item'>En Yüksek Fiyat</li>
                    <li onClick={ sortByAscendingLetter } className='dropdown-list-item'>En Yeniler (A{'>'}Z)</li>
                    <li onClick={ sortByDescendingLetter } className='dropdown-list-item'>En Yeniler (Z{'>'}A)</li>
                </ul>
            </label>
        </div>
    );
}

export default Dropdown;
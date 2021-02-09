import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination-list'>
            {
                pageNumbers.map(number => (
                    <li key={ number } className='pagination-list-item'>
                        <a onClick={ () => paginate(number) } className='pagination-text'>{ number }</a>
                    </li>
                ))
            }
        </ul>
    );
};

export default Pagination;
import React from 'react';
import styled from 'styled-components';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationList>
            {
                pageNumbers.map(number => (
                    <PaginationListItem key={ number }>
                        <PaginationText onClick={ () => paginate(number) }>{ number }</PaginationText>
                    </PaginationListItem>
                ))
            }
        </PaginationList>
    );
};

export default Pagination;

const PaginationList = styled.ul`
    list-style-type: none;
`;

const PaginationListItem = styled.li`
    width: 30px;
	height: 30px;
	display: inline-flex;
	border: 1px solid;
	border-radius: 5px;
	border-color: #d1cfc8;
	margin-left: 10px;
    cursor: pointer;
`;

const PaginationText = styled.a`
    color: grey;
	text-decoration: none;
	letter-spacing: 10px;
	text-indent: 11px;
	padding-top: 5px;

    &:hover {
        outline: none;
        font-weight: bold;
    }
`;
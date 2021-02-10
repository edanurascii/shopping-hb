import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const Search = ({ searchItem }) => {
    return (
        <SearchedItemDropdownWrapper>
            <SearchedItemContainer>
                <SearchItemTitle>iPhone iOS cep telefonu</SearchItemTitle>
                <SearchItem>Aranan Kelime: { searchItem }</SearchItem>
            </SearchedItemContainer>
            <Dropdown />
        </SearchedItemDropdownWrapper>
    );
};

export default Search;

const SearchedItemDropdownWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
`;

const SearchedItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`;

const SearchItemTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #484848;
    text-overflow: ellipsis;
`;

const SearchItem = styled.span`
    color: #333333;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
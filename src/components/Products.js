import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/Products.css';

const Products = ({ products, loading }) => {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const basketItems = localStorage.getItem('basketItems');

        if (basketItems) {
            setBasket(JSON.parse(basketItems));
        } else {
            setBasket([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('basketItems', JSON.stringify(basket));
        localStorage.setItem('totalProducts', basket.length);
    }, [basket]);

    const getItem = id => {
        const product = products.find((item) => item.id === id);
        return product;
    };

    const addToBasket = id => {
        let allProducts = [...products];
        const index = allProducts.indexOf(getItem(id));
        const product = allProducts[index];

        product.isAddedToBasket = true;

        setBasket([...basket, product].reverse());
        setBasket(basket.concat(products[id]));
    };

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
        <ProductList>
        {
            products.map(product => (
                <ProductListItem key={ product.id } >
                    <img className='product-image' src={ `img/${ product.image }` }></img>
                    <ProductName>{ product.name }</ProductName>
                    <div className='product-details'>
                        <ProductBrand>
                            <TitleColor>Marka: </TitleColor>{ product.brand }
                        </ProductBrand>
                        <ProductColor>
                            <TitleColor>Renk: </TitleColor>{ product.color }
                        </ProductColor>
                        <ProductSalePrice>{ product.sale_price }</ProductSalePrice>
                        <ProductDiscountWrapper>
                            <ProductPrice>{ product.price }</ProductPrice>
                            <ProductDiscount>{ product.discount }</ProductDiscount>
                        </ProductDiscountWrapper>
                    </div>
                    <div
                        className='add-to-basket'
                        disabled={ product.isAddedToBasket ? true : false }
                        onClick={ () => { addToBasket(product.id) } }
                    >
                    {
                        product.isAddedToBasket
                        ?
                        <AddedToBasket disabled>Bu ürünü sepete ekleyemezsiniz.</AddedToBasket>
                        :
                        <AddedToBasketText><TitleColor>Sepete Ekle</TitleColor></AddedToBasketText>
                    }
                    </div>
                </ProductListItem>
            ))
        }
        </ProductList>
    );
};

export default Products;

const ProductList = styled.ul`
    display: flex;
	flex-wrap: wrap;
	list-style-type: none;
`;

const ProductListItem = styled.li`
    cursor: pointer;
    width: 202px;
    flex: 1 0 21%;
    display: flex;
    flex-direction: column;
    outline: none;
    padding: 24px 12px 33px;

    &:hover {
        border: 1px solid #d1cfc8;
        border-radius: 8px;
        margin: 10px;

        .product-image {
            border: none;
        }

        .add-to-basket {
            display: flex;
            justify-content: center;
        }
    }
`;

const ProductName = styled.div`
    color: #333333;
    font-size: 12px;
    height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ProductBrand = styled.div`
    color: #333333;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TitleColor = styled.span`
    font-weight: bold;
`;

const ProductColor= styled.div`
    color: #333333;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 28px;
`;

const ProductSalePrice = styled.div`
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.36px;
    line-height: 20px;
`;

const ProductDiscountWrapper = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 16px;
    margin-top: 4px;
`;

const ProductPrice = styled.div`
    color: #9b9b9b;
    font-size: 14px;
    letter-spacing: -0.15px;
    line-height: 16px;
    text-decoration: line-through;
`;

const ProductDiscount = styled.div`
    color: red;
	display: inline-block;
	font-size: 12px;
	font-weight: bold;
	letter-spacing: -0.13px;
	line-height: 15px;
	margin-left: 4px;
`;

const AddedToBasket = styled.button`
    border: 1px solid #d1cfc8;
    border-radius: 8px;
    width: 233px;
    height: 34px;
    background-color: #d1cfc8;
    color: #919191;
    font-size: 14px;
    outline: none;
    margin-top: 20px;
`;

const AddedToBasketText = styled.button`
    cursor: pointer;
    border: 1px solid #ffeee3;
    border-radius: 8px;
	width: 233px;
	height: 34px;
	background-color: #ffeee3;
	color: #fe6f18;
    font-size: 14px;
	outline: none;
    margin-top: 20px;
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
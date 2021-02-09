import React from 'react';
import '../styles/Products.css';

const Products = ({ products, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
        <ul className='product-list'>
        {
            products.map(product => (
                <li className='product-list-item' key={ product.id }>
                        <img src={ `img/${ product.image }` } className='product-image'></img>
                        <div className='product-name'>{ product.name }</div>
                        <div className='product-brand'><span className='title-brand-color'>Marka: </span>{ product.brand }</div>
                        <div className='product-color'><span className='title-brand-color'>Renk: </span>{ product.color }</div>
                        <div className='product-sale-price'>{ product.sale_price }</div>
                        <div className='product-discount-wrapper'>
                            <div className='product-price'>{ product.price }</div>
                            <div className='product-discount'>{ product.discount }</div>
                        </div>
                </li>
            ))
        }
        </ul>
    );
};

export default Products;
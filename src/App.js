import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import './App.css';

const App = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [products, setProducts] = useState([]);
	const [activePage, setActivePage] = useState(1);

	const handlePageChange = (pageNumber) => {
		console.log(`active page is ${pageNumber}`);
		setActivePage(pageNumber);
	};

	useEffect(() => {
		const productsInLocalStorage = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : '';

		if (!productsInLocalStorage) {
			fetch('https://api.mocki.io/v1/da33870b')
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setProducts(result);
					localStorage.setItem('products', JSON.stringify(result));
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
		} else {
			setIsLoaded(true);
			setProducts(productsInLocalStorage);
		}
	}, [])

	if (error) {
		return <div>Error: { error.message }</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<div className='header-logo'>

				</div>
				<ul className='product-list'>
					{
						products.map(product => (
							<li className='product-list-item' key={ product.id }>
									<img src={ `img/${ product.image }` } className='product-image'></img>
									<div className='product-name'>{ product.name }</div>
									<div className='product-brand'><span className='title-brand-color'>Marka: </span>{ product.brand }</div>
									<div className='product-color'><span className='title-brand-color'>Renk: </span>{ product.color }</div>
									<div className='product-price'>{ product.price }</div>
									<div className='product-discount-wrapper'>
										<div className='product-sale-price'>{ product.sale_price }</div>
										<div className='product-discount'>{ product.discount }</div>
									</div>
							</li>
						))
					}
				</ul>
				<Pagination
					activePage={ activePage }
					itemsCountPerPage={ 12 }
					totalItemsCount={ 36 }
					pageRangeDisplayed={ 3 }
					onChange={ handlePageChange.bind() }
					hideFirstLastPages={ true }
					innerClass='pagination-list'
					itemClass='pagination-list-item'
					linkClass='pagination-text'
					activeLinkClass='pagination-text-active'
				/>
			</>
		);
	}
};

export default App;
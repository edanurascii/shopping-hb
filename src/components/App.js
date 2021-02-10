import React, { useState, useEffect } from 'react';
import Header from './Header';
import Products from './Products';
import Pagination from './Pagination';
import '../styles/App.css';

const App = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(12);

	useEffect(() => {
		const productsInLocalStorage = JSON.parse(localStorage.getItem('products')) || '';

		if (!productsInLocalStorage) {
			fetch('https://api.mocki.io/v1/012906e9')
			.then(res => res.json())
			.then(
				(result) => {
					setLoading(false);
					setProducts(result);
					localStorage.setItem('products', JSON.stringify(result));
				},
				(error) => {
					setLoading(true);
					setError(error);
				}
			)
		} else {
			setLoading(false);
			setProducts(productsInLocalStorage);
		}
	}, []);

	// Get current products
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	if (error) {
		return <div>Error: { error.message }</div>;
	} else {
		return (
			<>
				<Header/>
				<Products
					products={ currentProducts }
					loading={ loading }
				/>
				<Pagination
					productsPerPage={ productsPerPage }
					totalProducts={ products.length }
					paginate={ paginate }
				/>
			</>
		);
	}
};

export default App;
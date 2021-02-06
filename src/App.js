import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const productsInLocalStorage = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : "";

		if (!productsInLocalStorage) {
			fetch("https://api.mocki.io/v1/31a8061d")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setProducts(result);
					localStorage.setItem("products", JSON.stringify(result));
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
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<ul>
				{products.map(product => (
					<li key={ product.id }>
						<div>
							<img src={ `img/${product.image}` } width="500"></img><br></br>
							{ product.name }<br></br>
							{ product.brand }<br></br>
							{ product.color }<br></br>
							{ product.price }<br></br>
							{ product.discount }<br></br>
							{ product.sale_price }
						</div>
						<br></br>
					</li>
				))}
			</ul>
		);
	}
};
 
export default App;
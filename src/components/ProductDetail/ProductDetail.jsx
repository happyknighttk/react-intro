import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import axios from 'axios';

function GetPageId() {
	return new URLSearchParams(window.location.search).get("id");
}

export default function ProductDetail() {
	const [product, setProduct] = useState({});

	useEffect(() => {
		console.log(GetProduct(GetPageId()));
	}, [])

	const GetProduct = async (id) => {
		let result = await axios.get("https://dummyjson.com/products/" + id)
		let product = await result.data;
		console.log(product);
		setProduct(product);
		return await product;
	}

	return (
		<div className="product-container">
			<img className="product-image" src={product.thumbnail} alt={product.title} />
			<div className="product-details">
				<h1>{product.title}</h1>
				<p>{product.description}</p>
				<p><strong>Price: <span>${product.price}</span></strong></p>
				<p>Stock: {product.stock}</p>
				<p>Rating: {product.rating}</p>
				{product.discountPercentage && (
					<p>Discount: {product.discountPercentage}% off</p>
				)}
				{/* Add more details as needed */}
			</div>
		</div>
	)
}
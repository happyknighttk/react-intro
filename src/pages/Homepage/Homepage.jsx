import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

export default function Homepage() {

	//const myAsyncFunction = () => {
	//	return new Promise((resolve, reject) => {
	//		reject("HTTP verisi");
	//	});
	//};

	//useEffect(() => {
	//	makeAsyncCall();
	//}, [])

	//const makeAsyncCall = async () => {
	//	try {
	//		let response = await myAsyncFunction();
	//		console.log(response)
	//	} catch (e) {
	//		console.log(e)
	//	}
	//}

	//const makeAsyncCall = async () => {
	//	// es2017 async-await
	//	let response = await myAsyncFunction();
	//	console.log(response)
	//}


	//useEffect(() => {
	//	myAsyncFunction()
	//		.then((response) => { console.log("işlem başarılı:", response) })// async işlem başarılı ise (resolve edildi ise)
	//		.catch(error => { console.log("işlem başarısız: ", error) })// async işlem başarısız ise (reject edildi ise)
	//		.finally(() => { console.log("işlem bitti") })// her halükarda en son çalışır
	//})

	//try {
	//	let response = await myAsyncFunction();
	//	console.log(response);
	//} catch (e) {
	//	console.log(e);
	//}
	//react link cat variable 
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		setProducts(response.data.products);
	};

	const deleteProduct = (productId) => {
		const updatedProducts = products.filter(product => product.id !== productId);
		setProducts(updatedProducts);
	}

	const handleDelete = (productId) => {
		deleteProduct(productId);
		alert("Ürün kaldırıldı!")
	}

	const addProduct = (newProduct) => {
		setProducts([...products, newProduct]);
	};

	const handleAddProduct = () => {
		const newProduct = {
			id: products.length + 1,
			title: 'New Product',
			description: 'Description of the new product.',
			price: 29.99,
		};

		addProduct(newProduct);
	};



	return (
		<div className="container mt-5" >
			<button onClick={handleAddProduct}>Add New Product</button>
			<div className="row">
				{products.map(product => (
					<div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
						<ProductCard delete={handleDelete} product={product} />
					</div>
				))}
			</div>
		</div>
	)
}

import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard(props) {
	return (
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link to={`/product-detail?id=${props.product.id}`}
					className="btn btn-primary">Detaylar</Link>
				<button onClick={() => props.delete(props.product.id)} className="btn btn-danger">Sil</button>
			</div>
		</div>
	);
}
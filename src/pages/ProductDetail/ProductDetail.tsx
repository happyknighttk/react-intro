import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";
import "./ProductDetail.css";

type Props = {};

const ProductDetail = (props: Props) => {
	//const location = useLocation(); //query string
	const params = useParams<{ id: string }>(); // location
	const [product, setProduct] = useState<ProductModel>();

	useEffect(() => {
		if (params.id) {
			ProductService.getById(parseInt(params.id)).then((response) => {
				setProduct(response.data);
			});
		}
	}, []);

	return (
		<div className="product-container">
			<img
				className="product-image"
				src={product?.thumbnail}
				alt={product?.title}
			/>
			<div className="product-details">
				<h1>{product?.title}</h1>
				<p>{product?.description}</p>
				<p>
					<strong>
						Price: <span>${product?.price}</span>
					</strong>
				</p>
				<p>Stock: {product?.stock}</p>
				<p>Rating: {product?.rating}</p>
				{product?.discountPercentage && (
					<p>Discount: {product?.discountPercentage}% off</p>
				)}
				{/* Add more details as needed */}
			</div>
		</div>
	);
};
export default ProductDetail;

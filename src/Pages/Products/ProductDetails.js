import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Share/Loader";

const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [isRefresh, setIsRefresh] = useState(false);
	const { id } = useParams();

	const { _id, name, imgUrl, description, price, quantity, sold } = product;

	useEffect(() => {
		axios
			.get(`https://wearhouse-management-mern.herokuapp.com/products/${id}`)
			.then((response) => {
				setLoading(false);
				setProduct(response.data);
			})
			.catch((error) => console.log(error));
	}, [id, isRefresh]);

	const handleDeliver = () => {
		axios
			.patch(`https://wearhouse-management-mern.herokuapp.com/products/${id}`)
			.then((response) => setIsRefresh(!isRefresh))
			.catch((error) => console.log(error));
	};

	return (
		<div className='container my-5'>
			<div className='row justify-content-center'>
				<h1 className='text-center text-secondary'>Product Details</h1>
				{loading ? (
					<Loader />
				) : (
					<div className='col-md-6 col-sm-12'>
						<div className='card'>
							<img src={imgUrl} className='card-img-top' alt='' />
							<div className='card-body'>
								<h5 className='card-title text-center mb-2'>{name}</h5>
								<p className='card-text'>{description}</p>
								<form
									onSubmit={handleDeliver}
									className='d-flex justify-content-between mb-2'
								>
									<h5 className='card-subtitle'>Price: {price}</h5>
									<h5 className='card-subtitle'>Qty: {quantity}</h5>
									<h5 className='card-subtitle'>Sold: {sold}</h5>
								</form>
								<div className='d-flex justify-content-between'>
									<button
										onClick={handleDeliver}
										className='btn btn-outline-secondary text-decoration-none'
									>
										Delivered
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;

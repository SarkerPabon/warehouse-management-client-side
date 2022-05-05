import { Link } from "react-router-dom";

const SingleProduct = ({ product, handleDelete }) => {
	const { _id, name, imgUrl, description, price, quantity } = product;

	return (
		<div className='col-md-4 col-sm-12'>
			<div className='card'>
				<img src={imgUrl} className='card-img-top' alt='' />
				<div className='card-body'>
					<h5 className='card-title text-center mb-2'>{name}</h5>
					<div className='d-flex justify-content-between mb-2'>
						<h5 className='card-subtitle'>Price: {price}</h5>
						<h5 className='card-subtitle'>Qty: {quantity}</h5>
					</div>
					<p className='card-text'>{description}</p>
					<div className='d-flex justify-content-between'>
						<Link to='#' className='btn btn-secondary d-block'>
							Details
						</Link>
						<button
							onClick={() => handleDelete(_id)}
							className='btn btn-outline-secondary text-decoration-none'
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;

const SingleService = ({ icon }) => {
	return (
		<div className='col-sm-12 col-md-6 d-flex flex-sm-row flex-md-column align-items-center mt-5 p-3 '>
			<div className='fs-1 me-4 text-danger'>{icon}</div>
			<div>
				<h3 className='text-uppercase text-center text-danger'>
					Ground Transport
				</h3>
				<p className='text-muted'>
					Transport began providing transportation solutions to Transport’s
					contract warehousing customers in the 1980s.
				</p>
			</div>
		</div>
	);
};

export default SingleService;

import { FaCar, FaCaravan, FaTruck, FaTruckMonster } from "react-icons/fa";
import SingleService from "./SingleService";

const Services = () => {
	return (
		<div className='container my-5'>
			<div className='row'>
				<h2 className='text-muted text-center text-uppercase'>Our Services</h2>
				<SingleService icon={<FaCar />} />
				<SingleService icon={<FaCaravan />} />
				<SingleService icon={<FaTruckMonster />} />
				<SingleService icon={<FaTruck />} />
			</div>
		</div>
	);
};

export default Services;

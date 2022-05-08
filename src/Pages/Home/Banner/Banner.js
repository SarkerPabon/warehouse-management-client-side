import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import BannerStyle from "./Banner.module.css";

const Banner = () => {
	return (
		<Carousel fade={true} indicators={false}>
			<Carousel.Item>
				<img
					className={`d-block w-100 ${BannerStyle.banner_img}`}
					src={banner1}
					alt='First slide'
				/>
				<Carousel.Caption>
					<p className={`text-uppercase mb-1`}>Shine Your Way</p>
					<h3 className='display-5'>The Cars We Drive Say a Lot About Us</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={`d-block w-100 ${BannerStyle.banner_img}`}
					src={banner2}
					alt='Second slide'
				/>

				<Carousel.Caption>
					<p className='text-uppercase mb-1'>
						We use latest medical technology.
					</p>
					<h3 className='display-5'>Let Us Brighten Your Smile</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className={`d-block w-100 ${BannerStyle.banner_img}`}
					src={banner3}
					alt='Third slide'
				/>

				<Carousel.Caption>
					<p className='text-uppercase mb-1'>
						We use latest medical technology.
					</p>
					<h3 className='display-5'>Let Us Brighten Your Smile</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;

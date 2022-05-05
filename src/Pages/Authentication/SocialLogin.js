import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import google from "../../images/social/google.png";
import Loader from "../Share/Loader";

const SocialLogin = () => {
	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth);

	if (googleUser) {
		console.log("Google User: ", googleUser);
	}

	let errorElement;
	if (googleError) {
		errorElement = <p className='text-danger'>Error: {googleError?.message}</p>;
	}

	if (googleLoading) {
		return <Loader />;
	}

	return (
		<div className='w-50 mx-auto my-3'>
			<div className='d-flex'>
				<div
					style={{ height: "1px", width: "40%" }}
					className='bg-secondary mt-3 mx-3'
				></div>
				<p className='fs-5'>OR</p>
				<div
					style={{ height: "1px", width: "40%" }}
					className='bg-secondary mt-3 mx-3'
				></div>
			</div>
			<div
				onClick={() => signInWithGoogle()}
				className='d-flex justify-content-center'
			>
				<button className='btn btn-light d-block border border-secondary'>
					<img src={google} alt='Googel' height='30px' />
					<span className='px-2'>Continue with Google</span>
				</button>
			</div>
			{errorElement}
		</div>
	);
};

export default SocialLogin;

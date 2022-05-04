import { useState } from "react";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loader from "../Share/Loader";

const Registration = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [formError, setFormError] = useState({
		lengthError: "",
		confrimError: "",
	});

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

	const [updateProfile] = useUpdateProfile(auth);

	if (user) {
		console.log(user.user);
	}

	if (loading) {
		return <Loader />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password.length < 6) {
			setFormError({ lengthError: "Password length must be six or longer" });
			return;
		}

		if (password !== confirmPassword) {
			setFormError({
				confrimError: "Password and Confirm Password must be the same",
			});
			return;
		}

		console.log(name, email, password, confirmPassword);

		await createUserWithEmailAndPassword(email, password);
		toast.success("User Created Successfully", {
			toastId: "user-created-successfully",
			theme: "colored",
		});

		await updateProfile({ displayName: name });
		toast.success("Verification Email Send", {
			toastId: "verification-email",
			theme: "dark",
		});
		e.target.reset();
	};

	return (
		<div className='container my-5'>
			<h1 className='text-center text-secondary'>Registration</h1>
			<form onSubmit={handleSubmit} className='w-50 mx-auto'>
				<div className='mb-3'>
					<input
						type='text'
						className='form-control'
						name='name'
						id='name'
						placeholder='Enter Your Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<input
						type='email'
						className='form-control'
						name='email'
						id='email'
						placeholder='Enter Your Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='mb-3'>
					<input
						type='password'
						className='form-control'
						name='password'
						id='password'
						placeholder='Enter Your Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{formError.lengthError ? (
						<div id='confirmPassword' className='form-text text-danger'>
							{formError.lengthError}
						</div>
					) : (
						<div id='confirmPassword' className='form-text text-secondary'>
							Password length must be six characters or longer
						</div>
					)}
				</div>
				<div className='mb-3'>
					<input
						type='password'
						className='form-control'
						name='confirmPassword'
						id='confirmPassword'
						placeholder='Enter Your Confirm Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					{formError.confrimError ? (
						<div id='confirmPassword' className='form-text text-danger'>
							{formError.confrimError}
						</div>
					) : (
						<div id='confirmPassword' className='form-text text-secondary'>
							Password length must be six characters or longer
						</div>
					)}
				</div>
				{error && <p className='text-danger'>{error.message}</p>}
				<button type='submit' className='btn btn-secondary'>
					Register
				</button>
			</form>
		</div>
	);
};

export default Registration;

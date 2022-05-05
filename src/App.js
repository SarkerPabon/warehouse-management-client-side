import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registration";
import RequiredAuth from "./Pages/Authentication/RequiredAuth";
import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route
					path='/products'
					element={
						<RequiredAuth>
							<Products />
						</RequiredAuth>
					}
				/>
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;

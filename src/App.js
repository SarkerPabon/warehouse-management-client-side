import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Authentication/Login";
import Registration from "./Pages/Authentication/Registration";
import RequiredAuth from "./Pages/Authentication/RequiredAuth";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import AddProduct from "./Pages/Products/AddProduct";
import MyProducts from "./Pages/Products/MyProducts";
import ProductDetails from "./Pages/Products/ProductDetails";
import ProductsTable from "./Pages/Products/ProductsTable";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route
					path='/products'
					element={
						<RequiredAuth>
							<ProductsTable />
						</RequiredAuth>
					}
				/>
				<Route
					path='/products/myProducts'
					element={
						<RequiredAuth>
							<MyProducts />
						</RequiredAuth>
					}
				/>
				<Route
					path='/products/:id'
					element={
						<RequiredAuth>
							<ProductDetails />
						</RequiredAuth>
					}
				/>
				<Route
					path='/addProduct'
					element={
						<RequiredAuth>
							<AddProduct />
						</RequiredAuth>
					}
				/>
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;

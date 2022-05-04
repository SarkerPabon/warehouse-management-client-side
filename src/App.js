import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Registration from "./Pages/Authentication/Registration";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<Registration />} />
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;

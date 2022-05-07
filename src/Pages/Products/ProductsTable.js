import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import { toast } from "react-toastify";
import Loader from "../Share/Loader";
import "./table.css";

const ProductsTable = () => {
	const COLUMNS = [
		{
			Header: "Product ID",
			accessor: "_id",
		},
		{
			Header: "Name",
			accessor: "name",
		},
		{
			Header: "Supplier Name",
			accessor: "supplierName",
		},
		{
			Header: "Image URL",
			accessor: "imgUrl",
			Cell: ({ row }) => {
				console.log(row.values.imgUrl);
				return (
					<div className='table-image-container'>
						<img className='table-image' src={`${row.values.imgUrl}`} alt='' />
					</div>
				);
			},
		},
		{
			Header: "Description",
			accessor: "description",
		},
		{
			Header: "Price",
			accessor: "price",
		},
		{
			Header: "Quantity",
			accessor: "quantity",
		},
		{
			Header: "Sold",
			accessor: "sold",
		},
		{
			Header: "Actions",
			accessor: "actions",
			Cell: (props) => {
				// console.log(props);
				return (
					<>
						<Link
							to={`/products/${props.row.original._id}`}
							className='btn btn-outline-secondary'
						>
							Details
						</Link>{" "}
						<button
							onClick={() => handleDelete(props.row.original._id)}
							className='btn btn-danger'
						>
							Delete
						</button>
					</>
				);
			},
		},
	];

	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	// console.log(products);

	useEffect(() => {
		axios
			.get(`https://wearhouse-management-mern.herokuapp.com/products`)
			.then((response) => {
				setLoading(false);
				setProducts(response.data);
				// console.log(products);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleDelete = (_id) => {
		const confirmation = window.confirm(`Are you sure sure? id: ${_id}`);
		if (confirmation) {
			axios
				.delete(
					`https://wearhouse-management-mern.herokuapp.com/products/${_id}`
				)
				.then((response) => {
					toast.warning("Delete Successfully", {
						id: "Porduct Delete",
						theme: "colored",
					});

					const restOfProducts = products.filter(
						(product) => product._id !== _id
					);
					setProducts(restOfProducts);
				})
				.catch((error) => console.log(error));
		}
	};

	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => products, [products]);

	const tableInstance = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	return (
		<div className=''>
			{loading ? (
				<Loader />
			) : (
				<table {...getTableProps()} className='table table-striped'>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th key={column.id} {...column.getHeaderProps()}>
										{column.render("Header")}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr key={row.id} {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td key={cell.id} {...cell.getCellProps()}>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default ProductsTable;

import { useState } from "react";
import "../index.css";

const ProductsForm = ({ categories, setProducts }) => {
	const [productsFormData, setProductsFormData] = useState({
		title: "",
		quantity: 0,
		categoryId: "",
	});
	const changeHandler = e => {
		const { name, value } = e.target;
		setProductsFormData({ ...productsFormData, [name]: value });

	};

	const addNewProductHandler = e => {
		e.preventDefault();
		const newProduct = {
			...productsFormData,
			createdAt: new Date().toLocaleString(),
			id: new Date().getTime(),
		};
		setProducts(prevState => [...prevState, newProduct]);
		setProductsFormData({ title: "", quantity: 0, categoryId: "" });
	};
	return (
		<div className="mb-6">
			<h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
			<form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 ">
				<div>
					<label htmlFor="title" className="block mb-1 text-slate-400">
						title
					</label>
					<input
						type="text"
						name="title"
						className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
						value={productsFormData.title}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<label htmlFor="quantity" className="block mb-1 text-slate-400">
						quantity
					</label>
					<input
						type="number"
						name="quantity"
						className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
						value={productsFormData.quantity}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<label htmlFor="categoryId" className="block mb-1 text-slate-400">
						category
					</label>
					<select
						name="categoryId"
						className="bg-transparent rounded-xl border text-slate-400 w-full"
						value={productsFormData.categoryId}
						onChange={changeHandler}
						placeholder="Select category"
					>
						<option className="bg-slate-500 text-slate-300">
							select a category
						</option>
						{categories.map(category => {
							return (
								<option
									key={category.id}
									className="bg-slate-500 text-slate-300"
									value={category.id}
								>
									{category.title}
								</option>
							);
						})}
					</select>
				</div>
				<div className="flex item-center justify-between gap-x-4">
					<button
						className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
						onClick={addNewProductHandler}
					>
						Add new product
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductsForm;

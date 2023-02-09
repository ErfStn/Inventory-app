import { useState } from "react";
const CategoryForm = ({ setCategories }) => {
	const [isShow, setIsShow] = useState(false);
	const [categoryFormData, setCategoryFormData] = useState({
		title: "",
		description: "",
	});

	const changeHandler = e => {
		const { name, value } = e.target;
		setCategoryFormData({ ...categoryFormData, [name]: value });
	};
	const cancelFormHandler = e => {
		e.preventDefault();
		setIsShow(false);
		setCategoryFormData({ title: "", description: "" });
	};

	const addNewCategoryHandler = e => {
		e.preventDefault();
		const newCategory = {
			...categoryFormData,
			createdAt: new Date().toISOString(),
			id: new Date().getTime(),
		};
		setCategories(prevState => [...prevState, newCategory]);
		setCategoryFormData({ title: "", description: "" });
	};

	return (
		<section>
			<div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
				<h2 className="text-xl text-slate-300 font-bold mb-2">
					Add New Category
				</h2>
				<form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
					<div>
						<label
							htmlFor="title"
							className="block mb-1 text-slate-400"
						>
							title
						</label>
						<input
							type="text"
							name="title"
							id="category-tile"
							className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
							value={categoryFormData.title}
							onChange={changeHandler}
						/>
					</div>
					<div>
						<label
							htmlFor="description"
							className="block mb-1 text-slate-400"
						>
							description
						</label>
						<textarea
							type="text"
							name="description"
							id="category-description"
							className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
							value={categoryFormData.description}
							onChange={changeHandler}
						/>
					</div>
					<div className="flex justify-between items-center gap-x-4">
						<button
							className="flex-1 rounded-xl border border-slate-400 text-slate-300 w-full px-4 py-2"
							onClick={cancelFormHandler}
						>
							Cancel
						</button>
						<button
							className="flex-1 rounded-xl text-slate-200 bg-slate-500 w-full px-4 py-2"
							onClick={addNewCategoryHandler}
						>
							Add Category
						</button>
					</div>
				</form>
			</div>
			<button
				className={`text-slate-600 text-lg mb-4 ${!isShow ? "" : "hidden"}`}
				onClick={() => setIsShow(prevState => !prevState)}
			>
				add new category?
			</button>
		</section>
	);
};

export default CategoryForm;

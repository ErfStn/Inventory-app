import CategoryForm from "./Category";

const Filter = ({
	searchValue,
	searchHandler,
	sort,
	sortHandler,
	categories,
	categoriesHandler,
	categoriesFilter,
}) => {
	return (
		<div>
			<h2 className="text-slate-300 font-bold mb-4 border-b-slate-500 border-b">
				Filter
			</h2>

			<div className="flex items-center justify-between mb-6">
				<label htmlFor="search-input" className="text-slate-500 text-lg">
					search
				</label>
				<input
					type="text"
					name="search-input"
					className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
					value={searchValue}
					onChange={searchHandler}
				/>
			</div>
			<div className="flex items-center justify-between mb-6">
				<label htmlFor="search-input" className="text-slate-500 text-lg">
					sort
				</label>
				<select
					name="sort-products"
					className="bg-transparent rounded-xl text-slate-400"
					value={sort}
					onChange={sortHandler}
				>
					{/* <option className="bg-slate-500 text-slate-300" value="">
						select filter
					</option> */}
					<option className="bg-slate-500 text-slate-300" value="latest">
						latest
					</option>
					<option className="bg-slate-500 text-slate-300" value="earliest">
						earliest
					</option>
				</select>
			</div>
			<div className="flex items-center justify-between mb-6">
				<label htmlFor="search-input" className="text-slate-500 text-lg">
					category
				</label>
				<select
					name="sort-products"
					className="bg-transparent rounded-xl text-slate-400"
					value={categoriesFilter}
					onChange={categoriesHandler}
				>
					{/* <option className="bg-slate-500 text-slate-300" value="">
						select filter
					</option> */}{" "}
					<option className="bg-slate-500 text-slate-300" value="">
						All
					</option>
					{categories.map(category => {
						return (
							<option
								className="bg-slate-500 text-slate-300"
								value={category.id}
								key={category.id}
							>
								{category.title}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default Filter;

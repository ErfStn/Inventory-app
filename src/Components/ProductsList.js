const ProductsList = ({ products, categories, setProducts }) => {
	const findCategory = categoryId => {
		return categories.find(c => c.id === parseInt(categoryId)).title;
	};

	const deleteProduct = productId => {
		const filteredProduct = products.filter(
			product => product.id !== parseInt(productId)
		);
		setProducts(filteredProduct);
	};

	return (
		<div className="flex flex-col gap-y-2 ">
			<h2
				className="text-xl text-slate-300 font-bold mb-2  border-b-slate-500 border-b
			
			"
			>
				Products List
			</h2>
			{products.map(product => {
				return (
					<div
						key={product.id}
						className="flex items-center justify-between mb-2 w-full min-w-[200px] "
					>
						<span className="text-slate-400 ">{product.title}</span>
						<div className="flex items-center gap-x-1 md:gap-x-3">
							<span className="text-slate-400 text-xs">
								{product.createdAt}
							</span>
							<span className="text-slate-400 block px-2 py-0.5 border border-slate-400 text-sm rounded-2xl ">
								{findCategory(product.categoryId)}
							</span>
							<span className="text-slate-300 flex items-center justify-center w-7 h-7 rounded-full border border-slate-400 p-2 text-xs md:text-base">
								{product.quantity}
							</span>
							<button
								className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400"
								onClick={() => {
									deleteProduct(product.id);
								}}
							>
								delete
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProductsList;

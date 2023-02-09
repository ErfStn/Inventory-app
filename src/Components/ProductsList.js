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
		<div>
			<h2 className="text-xl text-slate-300 font-bold mb-2">Products List</h2>
			{products.map(product => {
				return (
					<div
						key={product.id}
						className="flex items-center justify-between mb-2 w-full min-w-[200px]"
					>
						<span className="text-slate-400">{product.title}</span>
						<div className="flex items-center gap-x-3">
							<span className="text-slate-400">{product.createdAt}</span>
							<span className="text-slate-400 block px-3 py-0.5 border border-slate-400 text-sm rounded-2xl ">
								{findCategory(product.categoryId)}
							</span>
							<span className="text-slate-300 flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 p-2">
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

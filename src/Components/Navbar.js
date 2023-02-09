const Navbar = () => {
	return (
			<div className="h-12 flex item-center justify-center gap-x-4 bg-slate-700 mb-4 py-2">
				<h1 className="md:text-xl text-lg font-bold text-slate-300">
					Inventory App
				</h1>
				<span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-slate-300 font-bold text-slate-300 mt-0.5">
					7{" "}
				</span>
			</div>
	);
};

export default Navbar;

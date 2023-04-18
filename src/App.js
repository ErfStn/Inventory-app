import { useState, useEffect } from "react";
import "./App.css";
import CategoryForm from "./Components/Category";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import ProductsForm from "./Components/Products";
import ProductsList from "./Components/ProductsList";

function App() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [sort, setSort] = useState("latest");
	const [searchValue, setSearchValue] = useState("");
	const [selectedCategory, setselectedCategory] = useState("");

	//! filters
	useEffect(() => {
		let result = products;
		result = filterSearchTitle(result);
		result = sortDate(result);
		result = categoryFilter(result);
		setFilteredProducts(result);
	}, [products, sort, searchValue, selectedCategory]);

	const sortHandler = e => {
		setSort(e.target.value);
	};

	const sortDate = array => {
		let sorttedProdutcs = [...array];
		const sortFunc = (a, b) => {
			if (sort === "latest") {
				return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
			} else if (sort === "earliest") {
				return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
			}
		};
		return sorttedProdutcs.sort(sortFunc);
	};

	const searchHandler = e => {
		setSearchValue(e.target.value.trim().toLowerCase());
	};

	const filterSearchTitle = array => {
		return array.filter(product => {
			return product.title.toLowerCase().includes(searchValue);
		});
	};

	const categoriesHandler = e => {
		const catTitle = e.target.value;
		setselectedCategory(catTitle);
	};

	const categoryFilter = array => {
		if (!selectedCategory) return array;
		return array.filter(p => p.categoryId === selectedCategory);
	};

	//!

	//! save on localstorage
	useEffect(() => {
		const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
		const savedCategory = JSON.parse(localStorage.getItem("categories")) || [];
		setProducts(savedProducts);
		setCategories(savedCategory);
	}, []);
	useEffect(() => {
		if (products.length) {
			localStorage.setItem("products", JSON.stringify(products));
		}
	}, [products]);
	useEffect(() => {
		if (categories.length) {
			localStorage.setItem("categories", JSON.stringify(categories));
		}
	}, [categories]);
	//!
	return (
		<div>
			<div className="bg-slate-800 min-h-screen pb-8">
				<Navbar products={filteredProducts} />
				<div className="container mx-auto p-4 md:flex-row flex-col flex md:justify-between lg:max-w-screen-xl md:gap-x-12">
					<section className="w-full">
						<CategoryForm setCategories={setCategories} />
						<ProductsForm categories={categories} setProducts={setProducts} />
					</section>
					<section className="w-full">
						<Filter
							searchValue={searchValue}
							searchHandler={searchHandler}
							sort={sort}
							sortHandler={sortHandler}
							categories={categories}
							categoriesHandler={categoriesHandler}
							selectedCategory={selectedCategory}
						/>
						<ProductsList
							products={filteredProducts}
							categories={categories}
							setProducts={setProducts}
						/>
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;

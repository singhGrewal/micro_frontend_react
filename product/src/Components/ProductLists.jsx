import axios from "axios";
import {useEffect, useState} from "react"
import ProductCard from "./ProductCard";
import Search from "./Search";
export default ({loading, setLoading}) => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState({
        category: "",
        title: ""
    })

    useEffect(() => {
        if (!products.length) {
            fetchProducts()
        }
    }, [products])

    async function fetchProducts() {
        const {data} = await axios.get("https://fakestoreapi.com/products")
        setProducts(data);
    }

    function handleChange(e) {
        setQuery({...query, [e.target.name]: e.target.value})
    }

    function handleSubmit() {
        console.log("handleSubmit", handleSubmit)
    }

    console.log("Product list")

    return <>
        <Search query={query} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <section
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {products.map((product, index) => <ProductCard index={index} product={product}/>)}
        </section>
    </>
}

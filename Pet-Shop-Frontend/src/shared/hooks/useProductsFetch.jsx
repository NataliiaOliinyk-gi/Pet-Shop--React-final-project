import { useState, useEffect, useMemo } from "react";
// import { useSearchParams } from "react-router-dom";

import useFilters from "./useFilters";

import { getProductsAllApi } from "../api/products-api";

const useProductsFetch = (defaultParams = {}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { searchParams, setSearchParams, priceFrom, priceTo, sort, discont } = useFilters();

    // const [searchParams, setSearchParams] = useSearchParams();

    // const priceFrom = parseFloat(searchParams.get("priceFrom"));
    // const priceTo = parseFloat(searchParams.get("priceTo"));
    // const discont = searchParams.get("discont") === "true";
    // const sort = searchParams.get("sort");



    const queryParams = useMemo(() => {
        const result = {
            ...defaultParams,
            priceFrom,
            priceTo,
            sort,
        };

        // тільки якщо параметр discont є в URL — додаємо його (щоб не затирати defaultParams)
        if (searchParams.has("discont")) {
            result.discont = discont;
        }

        return result;
    }, [priceFrom, priceTo, sort, discont, searchParams, JSON.stringify(defaultParams)]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            setError(null);

            const { data, error } = await getProductsAllApi(queryParams);

            setLoading(false);
            if (error) {
                setError(error.message);
                return;
            }
            setProducts(data.data);
        };

        fetchProducts();
    }, [queryParams])


    return {
        products,
        loading,
        error,
        searchParams,
        setSearchParams,
        priceFrom,
        priceTo,
        discont,
        sort
    };
};

export default useProductsFetch;


// const useProductsFetch = () => {

//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const [searchParams, setSearchParams] = useSearchParams();

//     const priceFrom = parseFloat(searchParams.get("priceFrom"));
//     const priceTo = parseFloat(searchParams.get("priceTo"));
//     const discont = searchParams.get("discont") === "true";
//     const sort = searchParams.get("sort");

//     useEffect(() => {
//         const fetchProducts = async () => {
//             setLoading(true)
//             setError(null);
//             const { data, error } = await getProductsAllApi({ priceFrom, priceTo, discont, sort });
//             setLoading(false);
//             if (error) {
//                 setError(error.message);
//                 return;
//             }
//             setProducts(data.data);
//         };

//         fetchProducts();
//     }, [priceFrom, priceTo, discont, sort])


//     return {
//         products,
//         loading,
//         error,
//         searchParams,
//         setSearchParams,
//         priceFrom,
//         priceTo,
//         discont,
//         sort
//     };
// };

// export default useProductsFetch;
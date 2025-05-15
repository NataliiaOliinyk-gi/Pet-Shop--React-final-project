import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import useFilters from "./useFilters";

import { getCategorieByIdApi } from "../api/categories-api";

const useCategoriesFetch = (categoryId) => {

    const [categorie, setCategorie] = useState({ category: {}, products: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { searchParams, setSearchParams, priceFrom, priceTo, sort, discont } = useFilters();

    // const [searchParams, setSearchParams] = useSearchParams();

    // const priceFrom = parseFloat(searchParams.get("priceFrom"));
    // const priceTo = parseFloat(searchParams.get("priceTo"));
    // const discont = searchParams.get("discont") === "true";
    // const sort = searchParams.get("sort");

    const queryParams = {
        priceFrom,
        priceTo,
        sort,
    };

    useEffect(() => {
        if (!categoryId) return;

        const fetchProducts = async () => {
            setLoading(true)
            setError(null);
            const { data, error } = await getCategorieByIdApi(categoryId, queryParams);
            setLoading(false);
            if (error) {
                setError(error.message);
                return;
            }
            setCategorie(data.data);
        };

        fetchProducts();
    }, [priceFrom, priceTo, discont, sort, categoryId])


    return {
        categorie,
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

export default useCategoriesFetch;
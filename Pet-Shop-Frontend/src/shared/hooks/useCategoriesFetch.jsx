import { useState, useEffect } from "react";
import useFilters from "./useFilters";

import { getCategorieByIdApi } from "../api/categories-api";

const useCategoriesFetch = (categoryId) => {

    const [categorie, setCategorie] = useState({ category: {}, products: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { searchParams, setSearchParams, priceFrom, priceTo, sort, discont } = useFilters();

    useEffect(() => {
        if (!categoryId) return;

        const fetchProducts = async () => {
            setLoading(true)
            setError(null);
            console.log(priceFrom, priceTo, discont, sort);

            const cleanParams = {};
            if (!isNaN(priceFrom)) cleanParams.priceFrom = priceFrom;
            if (!isNaN(priceTo)) cleanParams.priceTo = priceTo;
            if (sort) cleanParams.sort = sort;
            if (searchParams.has("discont")) cleanParams.discont = discont;

            console.log("Params for API:", cleanParams);

            const { data, error } = await getCategorieByIdApi(categoryId, cleanParams);

            setLoading(false);
            if (error) {
                setError(error.message);
                return;
            }
            setCategorie(data.data);
        };

        fetchProducts();
    }, [priceFrom, priceTo, discont, sort, categoryId, searchParams])

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

import { useSearchParams } from "react-router-dom";

const useProductsFilters = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const priceFrom = parseFloat(searchParams.get("priceFrom"));
    const priceTo = parseFloat(searchParams.get("priceTo"));
    const discount = searchParams.get("discont") === "true";
    const sort = searchParams.get("sort");

    const getFilteredProducts = (data) => {
        return data
            .filter(item => {
                const price = item.discont_price ?? item.price;
                return (
                    (isNaN(priceFrom) || price >= priceFrom)
                    && (isNaN(priceTo) || price <= priceTo)
                )
            })
            .filter(item => !discount || item.discont_price !== null)
            .sort((a, b) => {
                const priceA = a.discont_price ?? a.price;
                const priceB = b.discont_price ?? b.price;
                if (sort === "newest") {
                    return new Date(b.updatedAt) - new Date(a.updatedAt);
                }
                if (sort === "high-low") {
                    return priceB - priceA;
                }
                if (sort === "low-high") {
                    return priceA - priceB;
                }
                return 0;
            });
    };


    return {
        getFilteredProducts,
        searchParams,
        setSearchParams,
        priceFrom,
        priceTo,
        discount,
        sort
    };
};

export default useProductsFilters;
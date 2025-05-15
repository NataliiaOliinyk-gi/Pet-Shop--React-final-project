import { useSearchParams } from "react-router-dom";

const useFilters = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const priceFrom = parseFloat(searchParams.get("priceFrom"));
    const priceTo = parseFloat(searchParams.get("priceTo"));
    const discont = searchParams.get("discont") === "true";
    const sort = searchParams.get("sort");

    return {
        searchParams,
        setSearchParams,
        priceFrom,
        priceTo,
        discont,
        sort
    };
};

export default useFilters;
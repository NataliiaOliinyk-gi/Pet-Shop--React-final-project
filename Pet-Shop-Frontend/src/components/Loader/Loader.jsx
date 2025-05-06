import { BeatLoader } from "react-spinners";

const Loader = ({ loading }) => {

    return (
        <BeatLoader
            color={"#0d50ff"}
            loading={loading}
            cssOverride={{
                borderWidth: "4px",
                display: "block",
                margin: "0 auto"
            }}
            size={15}
            speedMultiplier={0.7}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
};

export default Loader;
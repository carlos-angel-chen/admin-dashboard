import { Box } from "@mui/system";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="A simple bar chart" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar;
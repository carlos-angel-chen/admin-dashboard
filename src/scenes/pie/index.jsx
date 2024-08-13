import { Box } from "@mui/system";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="A simple pie chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;
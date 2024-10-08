import { Box } from "@mui/system";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Line = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="A simple line chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line;
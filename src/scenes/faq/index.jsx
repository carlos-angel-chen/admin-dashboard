import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Question Page" />

        {/* Question 1 */}
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 2 */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 3 */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </Typography>
            </AccordionDetails>
        </Accordion>

        {/* Question 4 */}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>
};

export default FAQ;
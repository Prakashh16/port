import { Box, Typography, useMediaQuery } from "@mui/material";
import { professionalSummery } from "../../../shared/constant";

const AboutView = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
      {isLargeScreen && (
        <Box sx={{ padding: "24px", width: "50%", marginTop: "12px" }}>
          <Typography sx={{ fontWeight: "bold", color: "white" }} variant="h6">
            {professionalSummery}
          </Typography>
        </Box>
      )}
      {isSmallScreen && (
        <Box sx={{ width: "95%", marginTop: "24px" }}>
          <Typography sx={{ fontWeight: "bold", color: "white" }} variant="h6">
            {professionalSummery}
          </Typography>
        </Box>
      )}
    </>
  );
};
export default AboutView;

import { Box, Typography, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-scroll";
import { name, noop } from "../../constant";

const FooterView = ({ footerData = [], handleOpenLink = noop }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
      <Box>
        <hr style={{ width: `${isSmallScreen && "85%"}` }} />
        <Box
          sx={{
            display: `${isLargeScreen && "flex"}`,
            alignItems: "center",
            gap: "400px",
            margin: "auto",
            marginLeft: "24px",
          }}
        >
          {footerData.map((footer) => {
            return (
              <>
                <Box>
                  <Typography
                    sx={{
                      fontSize: `${isLargeScreen ? "24px" : "15px"}`,
                      fontWeight: "bold",
                      marginTop: `${isSmallScreen && "12px"}`,
                    }}
                  >
                    {footer.socialMediaType || ""}
                  </Typography>
                  <Typography
                    sx={{ fontSize: `${isLargeScreen ? "15px" : "12px"}` }}
                  >
                    {footer.value || ""}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>
        <Box sx={{ marginTop: "24px" }}>
          <Link to="About" smooth={true} duration={500}>
            <Typography
              sx={{
                cursor: "pointer",
                width: `${isLargeScreen ? "20%" : "100%"}`,
              }}
              variant="body1"
            >
              {`© 2024 ${name}. All rights reserved.`}
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              justifyContent: `${isSmallScreen && "center"}`,
              marginTop: `${isSmallScreen && "12px"}`,
            }}
          >
            <FacebookIcon
              onClick={() => handleOpenLink("facebook")}
              sx={{ color: "white", cursor: "pointer" }}
              fontSize="large"
            />
            <img
              style={{
                height: "28px",
                backgroundColor: "white",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              src="/assest/linkedin.png"
              alt="linkedin"
              onClick={() => handleOpenLink("linkedin")}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FooterView;

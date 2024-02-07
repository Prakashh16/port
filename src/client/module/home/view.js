import { Box, Typography } from "@mui/material";
import Header from "../../shared/components/header";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "@mui/material";
import styles from "./style";
import About from "./about";
import { noop } from "../../shared/constant";

const HomeView = ({ pages = [], settings = [], handleOpenUserMenu = noop }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
      <section id="About">
        <Header
          pages={pages}
          settings={settings}
          handleOpenUserMenu={handleOpenUserMenu}
        />
        <Box sx={{ padding: "24px" }}>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant={isLargeScreen ? "h2" : "h3"}
          >
            About
          </Typography>
          <Box
            sx={{
              display: `${isLargeScreen && "flex"}`,
              alignItems: "center",
              gap: "32px",
              marginLeft: `${isLargeScreen && "40px"}`,
              marginTop: "50px",
            }}
          >
            <img
              style={{
                marginLeft: `${isSmallScreen && "66px"}`,
                width: "200px",
                height: "200px",
                borderRadius: "100px",
              }}
              src="/assest/profile.jpg"
              alt="profile"
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: `${isSmallScreen && "32px"}`,
                  marginTop: `${isSmallScreen && "24px"}`,
                }}
                variant="h2"
              >
                <Typewriter
                  options={{
                    strings: [
                      " I am Asha Kumari Raj",
                      "I am a Junior Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </Box>
          </Box>
          <About />
        </Box>
      </section>
    </>
  );
};

export default HomeView;

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-scroll";
import { MovingComponent } from "react-moving-text";
import { useMediaQuery } from "@mui/material";
import { avatarProfileUrl, noop } from "../../constant";

const HeaderView = ({
  handleOpenNavMenu = noop,
  handleOpenUserMenu = noop,
  handleCloseNavMenu = noop,
  handleCloseUserMenu = noop,
  anchorElNav = null,
  anchorElUser = null,
  settings = [],
  pages = [],
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
      <Toolbar disableGutters>
        <Avatar
          sx={{ width: "80px", height: "80px" }}
          alt="Cindy Baker"
          src="/assest/avatar.jpg"
        />
        <MovingComponent
          type="spin"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="2"
          fillMode="none"
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: "16px",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: "bold",
              color: "inherit",
              textDecoration: "none",
              fontSize: "40px",
            }}
          >
            𝓐𝓢𝓗𝓐
          </Typography>
        </MovingComponent>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link to={page} smooth={true} duration={500}>
                  <Typography
                    onClick={handleCloseNavMenu}
                    sx={{ fontSize: "20px" }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <MovingComponent
          type="spin"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="2"
          fillMode="none"
        >
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            𝓐𝓢𝓗𝓐
          </Typography>
        </MovingComponent>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Link to={page} smooth={true} duration={500}>
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "20px",
                }}
              >
                {page}
              </Button>
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: `${isSmallScreen ? "15px" : "30px"}`,
            alignItems: "center",
            marginRight: "16px",
          }}
        >
          <Tooltip title="Open Linkedin">
            <IconButton
              onClick={() => handleOpenUserMenu("linkedin")}
              sx={{ p: 0 }}
            >
              <img
                style={{
                  height: "28px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
                src="/assest/linkedin.png"
                alt="linkedin"
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Download Resume">
            <IconButton
              onClick={() => handleOpenUserMenu("resume")}
              sx={{ p: 0 }}
            >
              <DownloadIcon sx={{ color: "white" }} fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open Facebook">
            <IconButton
              onClick={() => handleOpenUserMenu("facebook")}
              sx={{ p: 0 }}
            >
              <FacebookIcon sx={{ color: "white" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </>
  );
};

export default HeaderView;

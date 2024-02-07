import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { noop } from "../../shared/constant";

const ContactView = ({
  handleChange = noop,
  handleSubmit = noop,
  handleDisabled = noop,
  isDisabled = true,
  errors = {},
  fullName = "",
  mobile = "",
  email = "",
  message = "",
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
      <section>
        <Box id="Contact" sx={{ padding: "24px" }}>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant={isLargeScreen ? "h2" : "h3"}
          >
            Contact Me
          </Typography>
          <Box
            sx={{
              marginLeft: `${isLargeScreen && "30%"}`,
              width: `${isLargeScreen && "650px"}`,
            }}
          >
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h6">Full Name</Typography>
                <span style={{ color: "red" }}>★</span>
              </Box>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "12px" }}
                size="small"
                fullWidth
                placeholder="Enter your full name"
                error={!!errors.fullName}
                helperText={errors?.fullName}
                name="fullName"
                value={fullName}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h6">Mobile Number</Typography>
                <span style={{ color: "red" }}>★</span>
              </Box>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "12px" }}
                size="small"
                fullWidth
                placeholder="Enter your mobile number"
                error={!!errors.mobile}
                helperText={errors?.mobile}
                name="mobile"
                value={mobile}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h6">Email</Typography>
                <span style={{ color: "red" }}>★</span>
              </Box>
              <TextField
                sx={{ backgroundColor: "white", borderRadius: "12px" }}
                size="small"
                fullWidth
                placeholder="Enter your email"
                error={!!errors.email}
                helperText={errors?.email}
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h6">Message</Typography>
                <span style={{ color: "red" }}>★</span>
              </Box>
              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
                size="small"
                fullWidth
                multiline
                rows={8}
                variant="standard"
                placeholder="Enter your messages..."
                error={!!errors.message}
                helperText={errors?.message}
                name="message"
                value={message}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              <Button
                sx={{
                  ":hover": { backgroundColor: "rgb(132,159,254)" },
                  backgroundColor: `${
                    handleDisabled() || isDisabled
                      ? "rgb(158,158,158)"
                      : "white"
                  }`,
                  color: "black",
                  width: "120px",
                }}
                size="small"
                onClick={handleSubmit}
                disabled={handleDisabled() || isDisabled}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default ContactView;

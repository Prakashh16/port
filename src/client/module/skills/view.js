import { Box, Typography, useMediaQuery } from "@mui/material";

const SkillsView = ({ skillsDetails = [] }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
      <section>
        <Box id="Skills" sx={{ padding: "24px" }}>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant={isLargeScreen ? "h2" : "h3"}
          >
            Technical Skills
          </Typography>
          <Typography sx={{ fontSize: `${isLargeScreen ? "22px" : "18px"}` }}>
            I've worked with multiple technologies as a operator Engineer.
          </Typography>
          <Box
            sx={{
              marginTop: "48px",
              marginLeft: `${isLargeScreen && "20%"}`,
              display: `${isLargeScreen && "flex"}`,
              alignItems: "center",
              gap: "150px",
            }}
          >
            {skillsDetails.map((skill) => {
              return (
                <>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginTop: `${isSmallScreen && "48px"}`,
                      }}
                      variant="h4"
                    >
                      {skill.title}
                    </Typography>
                    {(skill.subTitle || []).map((subSkill) => (
                      <Typography sx={{ marginTop: "32px" }} variant="h6">
                        {subSkill}
                      </Typography>
                    ))}
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
      </section>
    </>
  );
};

export default SkillsView;

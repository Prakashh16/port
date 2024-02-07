import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { noop } from "../../shared/constant";

const ProjectsView = ({ projectsDetails = [], handleOpenProject = noop }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  return (
    <>
      <section>
        <Box id="Projects" sx={{ padding: "24px" }}>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant={isLargeScreen ? "h2" : "h3"}
          >
            Projects
          </Typography>
          <Box
            sx={{
              marginTop: "48px",
              marginLeft: `${isLargeScreen && "14%"}`,
              display: `${isLargeScreen && "flex"}`,
              alignItems: "center",
              gap: "100px",
              flexWrap: "wrap",
            }}
          >
            {projectsDetails.map((project) => {
              return (
                <>
                  <Box
                    sx={{
                      border: "1px solid white",
                      width: `${isSmallScreen ? "300px" : "600px"}`,
                      height: `${isLargeScreen ? "720px" : "700px"}`,
                      borderRadius: "12px",
                      marginTop: `${isSmallScreen && "24px"}`,
                    }}
                  >
                    <img
                      style={{
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                        height: "300px",
                        width: "100%",
                      }}
                      src={project.image}
                      alt="project"
                    />
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                      }}
                      variant="h4"
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                      }}
                      variant="body1"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "24px",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                      }}
                      variant="h6"
                    >
                      Tech Stack:-{"    "}
                      {project.tech_stack + "  "}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        fontSize: `${isSmallScreen && "16px"}`,
                      }}
                      variant="h6"
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                        }}
                        variant="contained"
                        onClick={() => handleOpenProject(project.link)}
                      >
                        Open Project
                      </Button>
                    </Box>
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

export default ProjectsView;

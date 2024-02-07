import ProjectsView from "./view";
import { projectsDetails } from "../../shared/constant";

const Projects = () => {
  const handleOpenProject = (link = "") => {
    window.open(link, "_blank");
  };
  return (
    <>
      <ProjectsView
        projectsDetails={projectsDetails}
        handleOpenProject={handleOpenProject}
      />
    </>
  );
};

export default Projects;

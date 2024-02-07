import SkillsView from "./view";
import { skillsDetails } from "../../shared/constant";

const Skills = () => {
  return (
    <>
      <SkillsView skillsDetails={skillsDetails} />
    </>
  );
};

export default Skills;

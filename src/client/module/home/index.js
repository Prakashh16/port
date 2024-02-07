import HomeView from "./view";
import {
  facebookUrl,
  headings,
  linkedinUrl,
  name,
  settings,
} from "../../shared/constant";

const Home = () => {
  const handleOpenUserMenu = (type = "") => {
    if (type === "linkedin") {
      const link = linkedinUrl;
      window.open(link, "_blank");
    } else if (type === "facebook") {
      const link = facebookUrl;
      window.open(link, "_blank");
    } else if (type === "resume") {
      const pdfUrl = "/resume/resume.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `${name}_resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <>
      <HomeView
        pages={headings}
        settings={settings}
        handleOpenUserMenu={handleOpenUserMenu}
      />
    </>
  );
};

export default Home;

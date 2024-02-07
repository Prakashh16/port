import FooterView from "./view";
import { facebookUrl, footerData, linkedinUrl } from "../../constant";

const Footer = () => {
  const protoCalls = "https://";
  const handleOpenLink = (type = "") => {
    if (type === "facebook") {
      const link = facebookUrl;
      window.open(link, "_blank");
    } else if (type === "linkedin") {
      const link = linkedinUrl;
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <FooterView footerData={footerData} handleOpenLink={handleOpenLink} />
    </>
  );
};

export default Footer;

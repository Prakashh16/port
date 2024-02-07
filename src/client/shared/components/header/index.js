import { useState } from "react";
import HeaderView from "./view";
import { noop } from "../../constant";

const defaultState = {
  anchorElNav: null,
  anchorElUser: null,
};

const Header = ({ settings = [], pages = [], handleOpenUserMenu = noop }) => {
  const [state, setState] = useState(defaultState);

  const handleOpenNavMenu = (event) => {
    setState((prevState) => ({
      ...prevState,
      anchorElNav: event.currentTarget,
    }));
  };

  const handleCloseNavMenu = () => {
    console.log("page");
    setState((prevState) => ({
      ...prevState,
      anchorElNav: null,
    }));
  };

  const handleCloseUserMenu = () => {
    setState((prevState) => ({
      ...prevState,
      anchorElUser: null,
    }));
  };
  return (
    <>
      <HeaderView
        handleOpenNavMenu={handleOpenNavMenu}
        handleOpenUserMenu={handleOpenUserMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        handleCloseUserMenu={handleCloseUserMenu}
        anchorElNav={state.anchorElNav}
        anchorElUser={state.anchorElUser}
        settings={settings}
        pages={pages}
      />
    </>
  );
};

export default Header;

import React from "react";

const NavItem = ({ page }) => {
  return (
    <li>
      <a className="capitalize" href={`/${page}`}>
        {page}
      </a>
    </li>
  );
};

export default NavItem;

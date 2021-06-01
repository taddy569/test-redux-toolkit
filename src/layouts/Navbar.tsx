import React, { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

const navbarLayoutStyle: CSSProperties = {
  marginBottom: "56px",
};

const navStyle: CSSProperties = {
  backgroundColor: "#f60",
  height: "55px",
  zIndex: 999,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const wrapperLinkStyle: CSSProperties = {
  width: "50%",
};

const linkStyle: CSSProperties = {
  marginRight: "1.8em",
  textDecoration: "none",
  color: "white",
};

type GenerateLinkType = {
  location: string;
};

const GenerateLink: FC<GenerateLinkType> = (props: GenerateLinkType) => {
  const { location } = props;
  return (
    <Link style={linkStyle} to={`/${location.toLocaleLowerCase()}`}>
      {location}
    </Link>
  );
};

const Navbar: FC = () => {
  return (
    <div style={navbarLayoutStyle}>
      <nav style={navStyle}>
        <div style={wrapperLinkStyle}>
          <GenerateLink location="Top" />
          <GenerateLink location="New" />
          <GenerateLink location="Show" />
          <GenerateLink location="Ask" />
          <GenerateLink location="Jobs" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

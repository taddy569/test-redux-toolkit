import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const blankLayoutStyle: CSSProperties = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "wheat",
};

const paragraphStyle: CSSProperties = {
  textTransform: "uppercase",
  fontWeight: "bolder",
  fontSize: "25px",
};

const linkStyle: CSSProperties = {
  textDecoration: "none",
  color: "#0A214C",
  fontWeight: "bold",
  fontSize: "22px",
};

function BlankLayout() {
  return (
    <div style={blankLayoutStyle}>
      <p style={paragraphStyle}>404 Not Found!</p>
      <Link style={linkStyle} to="/">
        Go to Home page
      </Link>
    </div>
  );
}

export default BlankLayout;

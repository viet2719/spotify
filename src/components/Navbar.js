import React from "react";
const logo = {
  height: "100px",
  backgroundColor: "#1f2937",
  color: "#ffffff",
  textAlign: "center",
  lineHeight: "6rem",
  fontSize: "3rem",
};
export default function Navbar() {
  return (
    <div style={logo}>
      <i className="fa fa-spotify mr-5"></i>
      Spotify
    </div>
  );
}

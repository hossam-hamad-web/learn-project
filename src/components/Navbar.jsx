import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Link to="/gallery">Gallery</Link>
      <Link to="/mobile">mobile</Link>
      <Link to="/gallery">Gallery</Link>
    </>
  );
}

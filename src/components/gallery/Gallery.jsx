import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Gallery() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="web">Web</Link>
          </li>
          <li>
            <Link to="mobile">Mobile</Link>
          </li>
          <li>
            <Link to="ux">UX</Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    </>
  );
}

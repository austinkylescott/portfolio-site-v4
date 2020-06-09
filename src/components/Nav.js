import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/Skills">
        Skills
      </Link>
      <Link className="nav-link" to="/Projects">
        Projects
      </Link>
      <Link className="nav-link" to="/Contact">
        Contact
      </Link>
    </nav>
  );
}

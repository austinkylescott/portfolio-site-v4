import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard() {
  return (
    <div class="project-card">
      <img alt="" src="https://via.placeholder.com/300x250" />
      <h3>Project Title</h3>
      <p>
        Description of project and technologies involved. Maybe problems and
        solutions that were solved.
      </p>
      <button>
        Visit the site{" "}
        <FontAwesomeIcon className="icon" icon={["fas", "desktop"]} />
      </button>
      <button>
        Check out the code{" "}
        <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
      </button>
      <h3>Technologies Used</h3>
      <span className="tooltip">
        <FontAwesomeIcon className="icon" icon={["fab", "html5"]} />
        <span className="tooltiptext">HTML5 Text</span>
      </span>
      <span className="tooltip">
        <FontAwesomeIcon className="icon" icon={["fab", "css3-alt"]} />
        <span className="tooltiptext">CSS3 Text</span>
      </span>
      <span className="tooltip">
        <FontAwesomeIcon className="icon" icon={["fab", "js"]} />
        <span className="tooltiptext">Javascript Text</span>
      </span>
      <span className="tooltip">
        <FontAwesomeIcon className="icon" icon={["fab", "sass"]} />
        <span className="tooltiptext">Javascript Text</span>
      </span>
      <span className="tooltip">
        <FontAwesomeIcon className="icon" icon={["fab", "react"]} />
        <span className="tooltiptext">Javascript Text</span>
      </span>
      <span className="tooltip">
        <FontAwesomeIcon className="icon" icon={["fab", "node"]} />
        <span className="tooltiptext">Javascript Text</span>
      </span>
    </div>
  );
}

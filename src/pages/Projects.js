import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Layout>
      <section>
        <h1>Projects</h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </Layout>
  );
}

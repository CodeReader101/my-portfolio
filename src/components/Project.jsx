import React, { useEffect, useState } from "react";
import client from "../../studio/sanityClient";
import ProjectCard from "./ProjectCard";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{ 
        _id,
        title, 
        description, 
        "imageUrl": image.asset->url, 
        sourceLink, 
        demoLink, 
        techStack 
      }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-wrap justify-center min-h-screen lg:flex-row lg:justify-start gap-8 bg-black p-8">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          image={project.imageUrl}
          title={project.title}
          description={project.description}
          sourceLink={project.sourceLink}
          demoLink={project.demoLink}
          techStack={project.techStack}
        />
      ))}
    </div>
  );
};

export default App;

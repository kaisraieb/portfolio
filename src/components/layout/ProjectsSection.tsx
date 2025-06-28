import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { ProjectPreview } from "./ProjectPreview";
import { projects } from "@/projectsData";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const rows = [];
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3));
  }

  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">WORK</h1>
      <p className="text-gray-400 mb-8">
        Below are some recent projects, full walkthrough on request
      </p>

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex flex-wrap sm:flex-nowrap gap-8 mb-6 ${
            row.length < 3 ? "justify-center" : "justify-start"
          }`}
        >
          {row.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 justify-center"
            >
              <Card
                onClick={() => setSelectedProject(project)}
                className={`relative w-full cursor-pointer border-0 transform rotate-[${project.rotate}deg] hover:rotate-0 transition-transform 
                bg-[url("/${project.image}")] bg-center bg-cover rounded-xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
                <CardContent className="relative z-10 p-6 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">
                      {project.title}
                    </div>
                    <div className="text-sm">{project.subtitle}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ))}

      {selectedProject && (
        <ProjectPreview
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
33;

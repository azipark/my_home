import React, { useState } from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

// projects 배열 요소 타입 추론
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ProjectType = typeof projects[number];

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 scroll-mt-24 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
                <CardHeader>
                  <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                  <CardTitle className="text-center md:text-left font-semibold transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-none ml-4 space-y-1 text-sm transition-all duration-300">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground text-center md:text-left bg-transparent hover:bg-muted/10 transition-colors duration-300 rounded-md px-2 py-1"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center items-center border-t border-border/30">
                  <button
                    type="button"
                    className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-4 focus:outline-none cursor-pointer"
                    onClick={() => handleOpenModal(project)}
                  >
                    VIEW PAGE
                  </button>
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
        <ProjectModal open={modalOpen} onClose={handleCloseModal} project={selectedProject} />
      </div>
    </section>
  );
}

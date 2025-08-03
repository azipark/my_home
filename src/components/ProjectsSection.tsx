import React from "react";
import { projects } from "@/lib/data";
import {
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  React.useEffect(() => {
    // URL에 #projects가 있으면 해당 섹션으로 스크롤
    if (window.location.hash === '#projects') {
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <section id="projects" className="py-12 scroll-mt-24 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <motion.a
                href={`/project/${project.slug}`}
                className="block"
                whileHover={{ 
                  scale: 1.02,
                  y: -4
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-[280px] md:h-[320px] flex flex-col cursor-pointer">
                  <CardHeader className="space-y-1.5 flex-1 flex flex-col justify-between pt-6 pb-4 px-4 md:pt-8 md:pb-6 md:px-6">
                    <img
                      src={(project as any).poster || project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-40 md:h-48 object-contain rounded-md mb-3 md:mb-4"
                      onError={(e) => {
                        console.error('Image failed to load:', (project as any).poster || project.image);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="flex flex-col justify-center min-h-0">
                      <div className="md:mb-1">
                        <CardTitle className="text-center font-semibold transition-all duration-300 text-sm md:text-lg group-hover:text-purple-500">
                          {project.title}
                        </CardTitle>
                        <motion.p 
                          className="text-center text-xs text-muted-foreground mt-1"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {project.year}
                        </motion.p>
                      </div>
                    </div>
                  </CardHeader>
                </GlassCard>
              </motion.a>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
    

  );
}
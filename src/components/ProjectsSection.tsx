import React from "react";
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

// projects 배열 요소 타입 추론
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ProjectType = typeof projects[number];

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
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-68 md:h-[450px] flex flex-col">
                <CardHeader className="flex-1 flex flex-col">
                  <img
                  src={(project as any).poster || project.image}
                  alt={`${project.title} preview`}
                    className="w-full h-32 md:h-56 object-contain rounded-md mb-3 md:mb-4 bg-gray-50 dark:bg-gray-800"
                />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-center font-semibold transition-colors duration-300 text-sm md:text-lg">
                    {project.title}
                  </CardTitle>
                  <p className="text-center text-xs text-muted-foreground mt-1">
                    {project.year}
                  </p>
                    </div>
                    <CardFooter className="pt-0 px-1 md:p-6 flex justify-center items-center border-t border-border/30 mt-3 md:mt-4 h-12 md:h-16">
                      <a
                        href={`/project/${project.slug}`}
                        className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link focus:outline-none cursor-pointer"
                      >
                        VIEW DETAIL
                      </a>
                    </CardFooter>
                  </div>
                </CardHeader>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
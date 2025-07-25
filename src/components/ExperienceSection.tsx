import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 scroll-mt-24 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              💼
            </motion.span>{" "}
            Work Experience
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`👩🏻‍💻 ${job.position} | ${job.company}`}
              subtitle={`${job.location}`}
              date={`${job.period}`}
              isLast={index === workExperience.length - 1}
              index={index}
            >
              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ul className="list-none space-y-2 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="mb-2">
                      <div className="font-regular text-zinc-700 dark:text-zinc-200">
                        {achievement.topic}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}

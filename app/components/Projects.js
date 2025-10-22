// components/Projects.js
"use client";
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    title: "FoodLens AI",
    description: "Advanced food recognition app using CNN with 95% accuracy. Real-time nutrition analysis and dietary tracking.",
    image: "/images/foodlens.jpg",
    tech: ["Flutter", "TensorFlow Lite", "FastAPI", "Python"],
    github: "https://github.com/dagim/foodlens-ai",
    live: "https://foodlens.app",
    featured: true
  },
  {
    title: "GlucoseSense",
    description: "AI-powered nutrition predictor for diabetics with personalized meal recommendations and glucose forecasting.",
    image: "/images/glucosesense.jpg",
    tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
    github: "https://github.com/dagim/glucosesense",
    live: "https://glucosesense.com",
    featured: true
  },
  {
    title: "KPI Dashboard Pro",
    description: "SaaS analytics dashboard with GPT insights, real-time data visualization, and automated reporting.",
    image: "/images/kpi-dashboard.jpg",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI API"],
    github: "https://github.com/dagim/kpi-dashboard",
    live: "https://kpidashboard.pro",
    featured: false
  },
  {
    title: "Dagverse AI Agents",
    description: "Business automation platform with intelligent agents for customer service, data analysis, and workflow automation.",
    image: "/images/dagverse.jpg",
    tech: ["Python", "LangChain", "React", "Redis"],
    github: "https://github.com/dagim/dagverse",
    live: "https://dagverse.ai",
    featured: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrapper}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.intro}
        >
          <h2 className={`${styles.title} gradientText`}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Showcasing my latest work in AI-powered applications and intelligent systems
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={styles.card}
            >
              <div className={styles.media}>
                <div>{project.title}</div>
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    Featured
                  </div>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  {project.title}
                </h3>
                <p className={styles.cardDescription}>
                  {project.description}
                </p>

                <div className={styles.tagList}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={styles.tag}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.github}
                    className={styles.link}
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className={styles.link}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// components/Skills.js
"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSwift,
  SiKotlin,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiAmazonaws,
  SiGooglecloud,
  SiDocker,
  SiTensorflow,
  SiOpencv,
  SiOpenai,
  SiPython,
  SiApacheairflow
} from 'react-icons/si';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Frontend & Mobile",
    blurb: "Crafting native-quality interfaces that feel fast, inclusive, and delight users across every device.",
    skills: [
      { label: "Flutter", Icon: SiFlutter },
      { label: "Dart", Icon: SiDart },
      { label: "React", Icon: SiReact },
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Swift", Icon: SiSwift },
      { label: "Kotlin", Icon: SiKotlin }
    ]
  },
  {
    title: "Backend & Cloud",
    blurb: "Designing resilient APIs, cloud infra, and data flows that scale from MVP to millions of requests.",
    skills: [
      { label: "FastAPI", Icon: SiFastapi },
      { label: "Python", Icon: SiPython },
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "AWS", Icon: SiAmazonaws },
      { label: "GCP", Icon: SiGooglecloud },
      { label: "Docker", Icon: SiDocker }
    ]
  },
  {
    title: "AI/ML & Data",
    blurb: "Building intelligent systems from research to production—vision, language, automation, and ML Ops.",
    skills: [
      { label: "TensorFlow", Icon: SiTensorflow },
      { label: "LangChain", Icon: SiPython },
      { label: "OpenAI", Icon: SiOpenai },
      { label: "Computer Vision", Icon: SiOpencv },
      { label: "ML Ops", Icon: SiApacheairflow },
      { label: "AI Agents", Icon: SiPython }
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <motion.section id="skills" ref={sectionRef} className={styles.section}>
      <motion.div className={styles.parallaxGlow} style={{ y: parallaxY }} aria-hidden="true" />

      <div className={styles.wrapper}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={styles.intro}
        >
          <h2 className={`${styles.title} gradientText`}>Skills &amp; Expertise</h2>
          <p className={styles.subtitle}>
            A curated stack of tools, frameworks, and AI capabilities I rely on to design, build, and scale intelligent products.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className={styles.card}
            >
              <h3 className={`${styles.cardTitle} gradientText`}>{category.title}</h3>
              <p className={styles.cardDescription}>{category.blurb}</p>

              <div className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.Icon;
                  return (
                    <motion.span
                      key={skill.label}
                      className={styles.skillTag}
                      initial={{ opacity: 0, y: 14, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ y: -6, scale: 1.05 }}
                      transition={{ duration: 0.45, delay: skillIndex * 0.08, ease: 'easeOut' }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <span className={styles.skillIcon}>
                        <Icon />
                      </span>
                      <span className={styles.skillLabel}>{skill.label}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
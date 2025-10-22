// components/About.js
"use client";
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import styles from './About.module.css';

export default function About() {
  const { isDark } = useTheme();
  const skills = [
    'Flutter & Dart', 'React & Next.js', 'FastAPI & Python', 
    'TensorFlow & PyTorch', 'AI Agent Development', 'Cloud Architecture',
    'Mobile Development', 'Machine Learning', 'System Design'
  ];

  const lightImage = encodeURI('/Generated Image October 21, 2025 - 2_23PM.png');
  const darkImage = encodeURI('/Generated Image October 21, 2025 - 10_46PM (1).png');
  const profileImage = isDark ? darkImage : lightImage;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrapper}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.grid}
        >
          <div>
            <h2 className={`${styles.title} gradientText`}>About Me</h2>
            <div className={styles.textBlock}>
              <p>
                With over <strong className={styles.highlight}>3 years</strong> of experience in software development,
                I specialize in creating intelligent applications that bridge the gap between 
                cutting-edge AI and exceptional user experiences.
              </p>
              <p>
                My expertise spans full-stack development with <strong className={styles.highlight}>Flutter, React, FastAPI</strong>,
                and advanced AI/ML implementations using <strong className={styles.highlight}>TensorFlow, PyTorch, and AI agents</strong>.
                I've successfully delivered solutions for startups and enterprises across healthcare, 
                fintech, and automation industries.
              </p>
              <p>
                I believe in building systems that are not just functional, but intelligent, 
                scalable, and user-centric. Every project is an opportunity to solve complex 
                problems with elegant solutions.
              </p>
            </div>

            <div className={styles.expertiseSection}>
              <h3 className={styles.subheading}>Core Expertise</h3>
              <div className={styles.chipList}>
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={styles.chip}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.resumeLink}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.showcase}
          >
            <div className={styles.cardShadow}></div>
            <div className={styles.cardImage}>
              <div className={styles.imageInner}>
                <Image
                  src={profileImage}
                  alt="Dagim Bekele portrait"
                  fill
                  priority
                  sizes="(min-width: 900px) 380px, 70vw"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
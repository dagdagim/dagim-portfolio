// components/Hero.js
"use client";
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.pulseOrb} style={{ top: '15%', left: '12%', background: 'rgba(139, 92, 246, 0.65)' }} />
        <div className={styles.pulseOrb} style={{ top: '25%', right: '10%', background: 'rgba(59, 130, 246, 0.55)', animationDelay: '2s' }} />
        <div className={styles.pulseOrb} style={{ bottom: '18%', left: '45%', background: 'rgba(99, 102, 241, 0.6)', animationDelay: '4s' }} />
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`${styles.title}`}
            whileHover={{ scale: 1.02 }}
          >
            Hi, I'm <span className="gradientText">Dagim Bekele</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Senior Mobile App, website & AI Engineer
          </motion.p>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I build intelligent apps that combine elegant UI with powerful AI
          </motion.p>

          <motion.div 
            className={styles.ctaRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryCta}
            >
              Hire Me
            </motion.button>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondaryCta}
            >
              View Projects
              <ArrowDown size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.scrollHint}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </div>
    </section>
  );
}
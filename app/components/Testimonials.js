// components/Testimonials.js
"use client";
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: "Bekele Bunera",
    title: "CTO, HealthTech Innovations",
    content: "Dagim delivered an exceptional AI-powered healthcare application. His expertise in both mobile development and machine learning resulted in a product that exceeded our expectations. The app's accuracy and performance are outstanding.",
    rating: 5,
    project: "GlucoseSense"
  },
  {
    name: "Ylfashewa Degefu",
    title: "Product Director, FinTech Corp",
    content: "Working with Dagim was a game-changer for our analytics platform. He seamlessly integrated GPT capabilities and created an intuitive dashboard that our clients love. His technical depth and communication skills are top-notch.",
    rating: 5,
    project: "KPI Dashboard Pro"
  },
  {
    name: "Tsega'ab Bekele",
    title: "Founder, FoodTech Startup",
    content: "Dagim's work on our food recognition AI was phenomenal. He not only built a highly accurate model but also created a beautiful Flutter app. His ability to understand business needs and translate them into technical solutions is remarkable.",
    rating: 5,
    project: "FoodLens AI"
  },
  {
    name: "Kidist Desta",
    title: "CEO, Automation Solutions",
    content: "The AI agents Dagim developed have automated 70% of our customer service workflows. His understanding of AI agent architecture and business process optimization delivered tremendous value to our company.",
    rating: 5,
    project: "Dagverse AI Agents"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.wrapper}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.intro}
        >
          <h2 className={`${styles.title} gradientText`}>Client Testimonials</h2>
          <p className={styles.subtitle}>
            What clients say about working with me
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <Quote className={styles.quoteIcon} size={32} />
                
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={styles.star} size={16} />
                  ))}
                </div>

                <p className={styles.content}>
                  "{testimonial.content}"
                </p>

                <div className={styles.footer}>
                  <div className={styles.client}>
                    <h4 className={styles.clientName}>
                      {testimonial.name}
                    </h4>
                    <p className={styles.clientRole}>
                      {testimonial.title}
                    </p>
                  </div>
                  <span className={styles.projectBadge}>
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
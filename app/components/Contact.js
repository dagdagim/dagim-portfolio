// components/Contact.js
"use client";
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Briefcase, Send } from 'lucide-react';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  const messageBody = `Hello Dagim,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;
  const mailtoLink = `mailto:bekeledagim3@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(messageBody)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrapper}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.intro}
        >
          <h2 className={`${styles.title} gradientText`}>Let's Build Something Incredible</h2>
          <p className={styles.subtitle}>
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className={styles.layout}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`${styles.contactHeading} gradientText`}>Get In Touch</h3>

            <div className={styles.contactBlock}>
              <motion.a
                href="mailto:bekeledagim3@gmail.com"
                whileHover={{ scale: 1.05 }}
                className={styles.contactCard}
              >
                <div className={styles.iconWrap}>
                  <Mail size={24} />
                </div>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactDetail}>bekeledagim3@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/dagim-bekele-7a3b6529b/"
                whileHover={{ scale: 1.05 }}
                className={styles.contactCard}
              >
                <div className={styles.iconWrap}>
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className={styles.contactLabel}>LinkedIn</p>
                  <p className={styles.contactDetail}>/in/dagim-bekele-7a3b6529b</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/dagdagim"
                whileHover={{ scale: 1.05 }}
                className={styles.contactCard}
              >
                <div className={styles.iconWrap}>
                  <Github size={24} />
                </div>
                <div>
                  <p className={styles.contactLabel}>GitHub</p>
                  <p className={styles.contactDetail}>@dagdagim</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/dagimbe"
                whileHover={{ scale: 1.05 }}
                className={styles.contactCard}
              >
                <div className={styles.iconWrap}>
                  <Github size={24} />
                </div>
                <div>
                  <p className={styles.contactLabel}>GitHub</p>
                  <p className={styles.contactDetail}>@dagimbe</p>
                </div>
              </motion.a>

              <motion.a
                href="https://upwork.com/freelancers/dagim"
                whileHover={{ scale: 1.05 }}
                className={styles.contactCard}
              >
                <div className={styles.iconWrap}>
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className={styles.contactLabel}>Upwork</p>
                  <p className={styles.contactDetail}>Top-Rated Plus</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div className={`${styles.fieldGroup} ${styles.fieldRow}`}>
              <div>
                <label className={styles.label}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textarea}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitButton}
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
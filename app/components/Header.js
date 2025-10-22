// components/Header.js
"use client";
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import styles from './Header.module.css';

const RAW_LOGO_PATH = '/Generated Image October 21, 2025 - 11_33PM.png';

export default function Header() {
  const { isDark, setIsDark, themeReady } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ThemeIcon = themeReady && isDark ? Sun : Moon;

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={styles.header}
    >
      <nav className={styles.inner}>
        <motion.a
          href="#home"
          whileHover={{ scale: 1.04 }}
          className={styles.logoGroup}
        >
          <span className={styles.logoImage}>
            <Image
              src={RAW_LOGO_PATH}
              alt="Dagim Bekele logo"
              width={46}
              height={46}
              priority
            />
          </span>
          <span className={`${styles.brand} gradientText`}>Dagim.B</span>
        </motion.a>

        <div className={styles.desktopNav}>
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.04 }}
              className={styles.navLink}
            >
              {item.name}
            </motion.a>
          ))}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            <ThemeIcon size={18} />
          </button>
        </div>

        <div className={styles.mobileControls}>
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            <ThemeIcon size={18} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuButton}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={styles.mobileSheet}
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={styles.sheetLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
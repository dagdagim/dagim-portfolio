// pages/index.js
"use client";
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import styles from './index.module.css';
import Image from 'next/image';

export default function Home() {
  const rawLogoPath = '/Generated Image October 21, 2025 - 11_33PM.png';
  const logoPath = encodeURI(rawLogoPath).replace(/,/g, '%2C');
  const logoHref = `${logoPath}?v=3`;
  const faviconSvgPath = '/Generated_Image_October_21__2025_-_11_33PM-removebg-preview.svg';
  const faviconHref = `${faviconSvgPath}?v=1`;

  return (
    <>
      <Head>
        <title>Dagim Bekele - Senior Mobile App, website & AI Engineer</title>
        <meta name="description" content="Senior Software Developer, Mobile App Developer, and AI/ML Engineer with 10 years of experience. Building intelligent apps with elegant UI and powerful AI." />
        <meta name="keywords" content="Senior Developer, AI Engineer, Mobile App Developer, Flutter, React, TensorFlow, FastAPI, AI Agent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/svg+xml" href={faviconHref} />
  <link rel="icon" type="image/png" sizes="32x32" href={logoHref} />
  <link rel="icon" type="image/png" sizes="192x192" href={logoHref} />
  <link rel="shortcut icon" href={logoHref} />
  <link rel="apple-touch-icon" href={logoHref} />
  <meta name="msapplication-TileImage" content={logoHref} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dagim Bekele - Senior Software & AI Engineer" />
        <meta property="og:description" content="10+ years experience in software development, AI/ML, and mobile applications" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dagimbekele.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dagim Bekele - Senior Software & AI Engineer" />
        <meta name="twitter:description" content="Building intelligent apps that combine elegant UI with powerful AI" />
      </Head>

      <div className={styles.page}>
        <Header />
        <div className={styles.sections}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>
                <Image
                  src={rawLogoPath}
                  alt="Dagim Bekele logo"
                  width={58}
                  height={58}
                  priority
                />
              </span>
              <div className={styles.footerText}>
                <p className={styles.footerTitle}>Dagim Bekele</p>
                <p className={styles.footerRole}>Senior Mobile App, website &amp; AI Engineer</p>
              </div>
            </div>
            <p>&copy; {new Date().getFullYear()} Dagim Bekele. All rights reserved.</p>
            <p className={styles.footerNote}>Crafted with Next.js, Framer Motion, and lovingly hand-written CSS.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
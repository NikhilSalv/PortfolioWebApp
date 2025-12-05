import React from 'react';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import Projects from '../sections/Projects/Projects';
import BlogPreview from '../sections/Blog/BlogPreview';
import DownloadCV from '../sections/DownloadCV/DownloadCV';
import Contact from '../sections/Contact/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <BlogPreview />
      <DownloadCV />
      <About />
      <Contact />
    </main>
  );
};

export default HomePage;


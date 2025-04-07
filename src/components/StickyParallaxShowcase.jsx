import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./ParallaxShowcase.css";


const images = [
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738041273/perphomance_hgrxxe.png",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738040756/protienNutMob_tmqjih.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738040757/accoundings2_sbi0vt.jpg",
  "https://res.cloudinary.com/dihhxzfq3/image/upload/v1738040756/protienNutMob_tmqjih.jpg"
];

const StickyImage = ({ image, index, scrollProgress }) => {
  const clipBottom = useTransform(
    scrollProgress,
    [index - 0.5, index, index + 0.5],
    [100, 0, 0]
  );
  const clipPath = useTransform(clipBottom, v => `inset(${v}% 0% 0% 0%)`);
  
  return (
    <motion.div
      className="sticky-image"
      style={{
        backgroundImage: `url(${image})`,
        clipPath: clipPath,
      }}
    />
  );
};

const StickyParallaxShowcase = () => {
  const { scrollY } = useViewportScroll();
  const scrollProgress = useTransform(scrollY, [0, 4000], [0, 4]);
  const rightOpacity = useTransform(
    scrollProgress,
    [0, 0.2, 3.8, 4],
    [0, 1, 1, 0]
  );

  return (
    <div className="sticky-showcase">
      <div className="left-column">
        <header className="left-header">
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
            Dive into the work.
          </h1>
        </header>
        {images.map((image, index) => (
          <StickyImage
            key={index}
            image={image}
            index={index}
            scrollProgress={scrollProgress}
          />
        ))}
      </div>

      <motion.div className="right-column"  >
        <section className="content-section">
          <div className="tags"  >
            <button>Branding & Designing</button>
            <button>Illustrations</button>
          </div>
          <h1 className="section-title">Branding & Designing</h1>
          <p className="description">
          As Calicut's best video production agency, we create stunning visual content that captivates audiences and elevates your brand. From concept to execution, our expert team delivers high-quality videos tailored to your business goals.
          </p>
          <a href="#case-study" className="case-study-link">
            See full case study ↗
          </a>
        </section>
        <section className="content-section">
          <div className="tags">
            <button>Web Development</button>
            <button>UI/UX Design</button>
          </div>
          <h1 className="section-title">Web Development</h1>
          <p className="description">
            Build modern, responsive websites that captivate your audience and drive results. Our solutions are tailored to your business needs.
          </p>
          <a href="#case-study" className="case-study-link">
            See full case study ↗
          </a>
        </section>
        <section className="content-section">
          <div className="tags">
            <button>Digital Marketing</button>
            <button>SEO</button>
          </div>
          <h1 className="section-title">Digital Marketing</h1>
          <p className="description">
            Increase visibility and drive conversions with our comprehensive digital marketing solutions.
          </p>
          <a href="#case-study" className="case-study-link">
            See full case study ↗
          </a>
        </section>
        <section className="content-section">
          <div className="tags">
            <button>Content Creation</button>
            <button>Brand Strategy</button>
          </div>
          <h1 className="section-title">Content Creation</h1>
          <p className="section-description">
            Craft compelling narratives and visuals that resonate with your audience and reinforce your brand identity.
          </p>
          <a href="#case-study" className="case-study-link">
            See full case study ↗
          </a>
        </section>
      </motion.div>
    </div>
  );
};

export default StickyParallaxShowcase;

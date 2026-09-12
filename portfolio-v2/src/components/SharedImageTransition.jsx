import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SharedImageTransition = () => {
  const { scrollY } = useScroll();

  const [metrics, setMetrics] = useState({
    heroX: 0,
    heroY: 0,
    heroW: 420,
    heroH: 420,
    aboutX: 0,
    aboutY: 800,
    aboutW: 420,
    aboutH: 420,
    startScroll: 60,
    endScroll: 680,
    isReady: false,
  });

  const metricsRef = useRef(metrics);

  useLayoutEffect(() => {
    const measure = () => {
      const container =
        document.getElementById('hero-about-container') ||
        document.querySelector('main') ||
        document.body;
      const heroSlot =
        document.getElementById('hero-image-slot') ||
        document.getElementById('hero-image');
      const aboutSlot =
        document.getElementById('about-image-slot') ||
        document.getElementById('about-image');
      const aboutSection = document.getElementById('about');

      if (!container || !heroSlot || !aboutSlot) return;

      const cRect = container.getBoundingClientRect();
      const hRect = heroSlot.getBoundingClientRect();
      const aRect = aboutSlot.getBoundingClientRect();

      // Absolute offsets inside container
      const heroX = hRect.left - cRect.left;
      const heroY = hRect.top - cRect.top;
      const heroW = hRect.width || 420;
      const heroH = hRect.height || 420;

      const aboutX = aRect.left - cRect.left;
      const aboutY = aRect.top - cRect.top;
      const aboutW = aRect.width || 420;
      const aboutH = aRect.height || 420;

      // Scroll trigger bounds:
      // Starts smoothly once user starts scrolling down
      const startScroll = 60;
      // Ends right as About section reaches resting viewport position
      const aboutDocTop = aboutSection
        ? aboutSection.getBoundingClientRect().top + window.scrollY
        : aRect.top + window.scrollY;
      const endScroll = Math.max(startScroll + 200, Math.round(aboutDocTop - 80));

      const updated = {
        heroX,
        heroY,
        heroW,
        heroH,
        aboutX,
        aboutY,
        aboutW,
        aboutH,
        startScroll,
        endScroll,
        isReady: true,
      };

      metricsRef.current = updated;
      setMetrics(updated);
    };

    measure();

    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    window.addEventListener('load', measure);

    let ro;
    const container = document.getElementById('hero-about-container');
    if (container && window.ResizeObserver) {
      ro = new ResizeObserver(() => measure());
      ro.observe(container);
    }

    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
      window.removeEventListener('load', measure);
      if (ro) ro.disconnect();
    };
  }, []);

  // Compute normalized scroll progress [0, 1]
  const rawProgress = useTransform(scrollY, (latest) => {
    const m = metricsRef.current;
    if (!m.isReady || m.endScroll <= m.startScroll) return 0;
    const p = (latest - m.startScroll) / (m.endScroll - m.startScroll);
    return Math.min(Math.max(p, 0), 1);
  });

  // Responsive spring physics for silky, high-end motion
  const smoothProgress = useSpring(rawProgress, {
    damping: 30,
    stiffness: 200,
    mass: 0.25,
  });

  // Curved spatial motion in X with sweeping arc
  const x = useTransform(smoothProgress, (p) => {
    const m = metricsRef.current;
    // Cubic easing
    const t = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    // Bezier control point for sweeping arc (curving out)
    const controlX = (m.heroX + m.aboutX) / 2 - 80;
    // Quadratic bezier: B(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
    return (1 - t) * (1 - t) * m.heroX + 2 * (1 - t) * t * controlX + t * t * m.aboutX;
  });

  // Spatial motion in Y with gentle flight lift
  const y = useTransform(smoothProgress, (p) => {
    const m = metricsRef.current;
    const t = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    const linearY = m.heroY + (m.aboutY - m.heroY) * t;
    const arcLift = -36 * Math.sin(p * Math.PI);
    return linearY + arcLift;
  });

  const width = useTransform(smoothProgress, (p) => {
    const m = metricsRef.current;
    const t = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    return m.heroW + (m.aboutW - m.heroW) * t;
  });

  const height = useTransform(smoothProgress, (p) => {
    const m = metricsRef.current;
    const t = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    return m.heroH + (m.aboutH - m.heroH) * t;
  });

  // Dynamic shape morphing from circle (50%) to rounded card (28px)
  const borderRadius = useTransform(smoothProgress, (p) => {
    const m = metricsRef.current;
    const currentW = m.heroW + (m.aboutW - m.heroW) * p;
    const heroRadiusPx = currentW / 2;
    const aboutRadiusPx = 28;
    const currentRadius = heroRadiusPx * (1 - p) + aboutRadiusPx * p;
    return `${Math.round(currentRadius)}px`;
  });

  // Dynamic 3D tilt during flight (-4.5deg)
  const rotate = useTransform(smoothProgress, (p) => {
    return -4.5 * Math.sin(p * Math.PI);
  });

  // Dynamic elevation scale (+4% in mid-air)
  const scale = useTransform(smoothProgress, (p) => {
    return 1 + 0.04 * Math.sin(p * Math.PI);
  });

  // Vibrant neon glow trail in flight settling into card shadow
  const boxShadow = useTransform(smoothProgress, (p) => {
    if (p < 0.05) {
      return '0 20px 50px -10px rgba(59, 130, 246, 0.35), 0 0 0 2px rgba(255, 255, 255, 0.15)';
    } else if (p > 0.95) {
      return '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.12)';
    } else {
      const glow = Math.sin(p * Math.PI);
      return `0 ${20 + 20 * glow}px ${50 + 35 * glow}px -10px rgba(59, 130, 246, ${
        0.35 + 0.3 * glow
      }), 0 0 ${30 * glow}px rgba(139, 92, 246, ${0.45 * glow}), 0 0 0 2px rgba(255, 255, 255, 0.25)`;
    }
  });

  if (!metrics.isReady) return null;

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        x,
        y,
        width,
        height,
        borderRadius,
        rotate,
        scale,
        boxShadow,
        zIndex: 25,
      }}
      className="overflow-hidden border-2 border-white/20 select-none backdrop-blur-sm group cursor-pointer"
    >
      <img
        src="/Images/Logo/aboutmelogo.jpg"
        alt="Kim Joseph Inoc - Technical Virtual Assistant & Web Designer"
        className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
        loading="eager"
        decoding="sync"
      />
      {/* Subtle cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[inherit] pointer-events-none" />
    </motion.div>
  );
};

export default SharedImageTransition;

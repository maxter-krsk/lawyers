'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-top"
          initial={{
            opacity: 0,
            scale: 0,
            backgroundColor: '#000000',
            color: '#fff',
            boxShadow: '0px 4px 12px rgba(20, 43, 35, 0.25)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: '0px 4px 12px rgba(20, 43, 35, 0.25)',
          }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{
            backgroundColor: '#fff',
            color: '#000000',
            boxShadow: '0px 0px 20px rgba(149, 186, 168, 0.2)',
          }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 18,
            mass: 0.5,
          }}
          onClick={scrollToTop}
          className="fixed right-3 bottom-3 flex h-[2.68rem] w-[2.68rem] cursor-pointer items-center justify-center rounded-full hover:bg-[#142B23] hover:text-[#95BAA8]"
          aria-label="Прокрутить вверх"
        >
          <svg
            width="9"
            height="24"
            viewBox="0 0 9 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[1.5rem] w-[0.563rem]"
          >
            <path
              d="M4.85355 0.646446C4.65829 0.451185 4.34171 0.451185 4.14645 0.646446L0.964465 3.82843C0.769203 4.02369 0.769203 4.34027 0.964465 4.53553C1.15973 4.7308 1.47631 4.7308 1.67157 4.53553L4.5 1.70711L7.32843 4.53553C7.52369 4.7308 7.84027 4.7308 8.03553 4.53553C8.2308 4.34027 8.2308 4.02369 8.03553 3.82843L4.85355 0.646446ZM4.5 24L5 24L5 1L4.5 1L4 1L4 24L4.5 24Z"
              fill="currentColor"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

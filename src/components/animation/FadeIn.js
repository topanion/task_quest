import { useState, useEffect, useRef } from "react";

export function FadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "opacity-100 transition-opacity duration-500" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

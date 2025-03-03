import React, { useEffect } from "react";
import styles from "./Background.module.css";

const Background = () => {
  useEffect(() => {
    const bgEffects = document.querySelector(`.${styles.bgEffects}`);
    if (bgEffects) {
      // Create bubbles
      for (let i = 0; i < 15; i++) {
        const bubble = document.createElement("div");
        bubble.className = styles.bubble;

        const size = Math.random() * 150 + 50;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.animationDuration = `${Math.random() * 10 + 15}s`;

        bgEffects.appendChild(bubble);
      }

      // Create squares
      for (let i = 0; i < 10; i++) {
        const square = document.createElement("div");
        square.className = styles.square;

        const size = Math.random() * 80 + 20;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        square.style.top = `${Math.random() * 100}%`;
        square.style.left = `${Math.random() * 100}%`;
        square.style.animationDelay = `${Math.random() * 5}s`;
        square.style.animationDuration = `${Math.random() * 20 + 20}s`;

        bgEffects.appendChild(square);
      }

      // Create stars
      for (let i = 0; i < 50; i++) {
        const star = document.createElement("div");
        star.className = styles.star;

        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;

        bgEffects.appendChild(star);
      }
    }

    return () => {
      if (bgEffects) {
        bgEffects.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={styles.bgEffects}>
        {/* These will be added dynamically via JavaScript */}
      </div>
    </div>
  );
};
export default Background;

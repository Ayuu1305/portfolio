import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

const AnimatedBackground = () => {
  const [springs, api] = useSpring(() => ({
    from: { transform: "translate(0%, 0%)" },
    to: { transform: "translate(100%, 100%)" },
    config: { duration: 20000 },
    loop: true,
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />

      {/* Animated gradient overlay */}
      <animated.div
        style={{
          ...springs,
          position: "absolute",
          width: "200%",
          height: "200%",
          background:
            "linear-gradient(45deg, transparent, rgba(79, 70, 229, 0.1), transparent)",
          opacity: 0.5,
        }}
      />

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <animated.div
          key={i}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: "rgba(79, 70, 229, 0.5)",
            borderRadius: "50%",
            ...useSpring({
              from: {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
                opacity: 0,
              },
              to: {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 1,
                opacity: 1,
              },
              config: {
                duration: 3000 + Math.random() * 2000,
                mass: 1,
                tension: 280,
                friction: 60,
              },
              loop: true,
            }),
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;

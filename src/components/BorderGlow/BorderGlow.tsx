import {
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from "react";
import "./BorderGlow.css";

type BorderGlowProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  glowColor?: string;
  style?: CSSProperties;
};

function BorderGlow({
  children,
  className = "",
  as: Component = "div",
  glowColor = "rgba(138, 106, 67, 0.25)",
  style,
}: BorderGlowProps) {
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--border-glow-x", `${x}px`);
    event.currentTarget.style.setProperty("--border-glow-y", `${y}px`);
    event.currentTarget.style.setProperty("--border-glow-color", glowColor);
  };

  return (
    <Component
      className={`border-glow ${className}`}
      onMouseMove={handleMouseMove}
      style={style}
    >
      {children}
    </Component>
  );
}

export default BorderGlow;
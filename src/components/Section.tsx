import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => {
  return (
    <section id={id} className={`relative min-h-screen py-16 ${className}`}>
      <div className="container mx-auto px-4 relative z-10">{children}</div>
    </section>
  );
};

export default Section;

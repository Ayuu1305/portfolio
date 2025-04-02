import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 bg-grid-gray-200/20 dark:bg-grid-gray-800/20"
        style={{ backgroundSize: "40px 40px" }}
      />

      {/* Radial gradient for a more dynamic look */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/5 dark:to-black/30" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Section backgrounds */}
      <div className="fixed inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default Layout;

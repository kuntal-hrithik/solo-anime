import { Outlet } from "react-router-dom";

import { Navbar } from "./navbar";
import { TailwindIndicator } from "./tailwind-indicator";

const RootLayout = () => {
  return (
    <div className="min-h-screen scroll-smooth antialiased">
      <Navbar />

      <main className="container">
        <Outlet />
      </main>

      <TailwindIndicator />
    </div>
  );
};

export default RootLayout;

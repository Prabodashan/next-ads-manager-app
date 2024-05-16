import "@/assets/styles/globals.css";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuthProvider from "@/components/sections/AuthProvider";

export const metadata = {
  title: "Add Manager |Find The Perfect",
  description: "Fnd your dream rental property",
  keywords: "rerntal, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;

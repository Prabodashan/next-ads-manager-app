import { ToastContainer } from "react-toastify";

import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuthProvider from "@/components/sections/AuthProvider";

import { GlobalProvider } from "@/context/GlobalContext";

export const metadata = {
  title: "Add Manager |Find The Perfect",
  description: "Fnd your dream rental property",
  keywords: "rerntal, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;

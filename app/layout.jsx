import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Add Manager |Find The Perfect",
  description:"Fnd your dream rental property",
  keywords:"rerntal, find rentals, find properties",
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;

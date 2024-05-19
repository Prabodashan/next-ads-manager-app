import InfoBoxes from "@/components/sections/InfoBoxes";
import Hero from "@/components/sections/Hero";
import Homeproperties from "@/components/sections/Homeproperties";
import FeaturedProperties from "@/components/sections/FeaturedProperties";

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <Homeproperties />
    </>
  );
};

export default HomePage;

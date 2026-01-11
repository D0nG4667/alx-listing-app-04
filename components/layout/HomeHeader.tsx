import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';

const HomeHeader = () => {
  return (
    <>
      {/* Page-specific additions */}
      {/* Category Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />
    </>
  );
};

export default HomeHeader;

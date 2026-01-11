import PromotionBanner from './sections/PromotionBanner';
import MainHeader from './sections/MainHeader';

const BaseHeader = () => {
  return (
    <header className="bg-background w-full h-full">
      {/* Promotional Banner */}
      <PromotionBanner />

      {/* Main Header */}
      <MainHeader />
    </header>
  );
};

export default BaseHeader;

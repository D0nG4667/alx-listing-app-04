import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import { IconName } from '@/constants/IconName';

const PromotionBanner = () => {
  return (
    <div className="bg-banner w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-center gap-4 py-2">
          <Icon name={IconName.CaseMinimalistic} size={24} />
          <p className="text-banner-foreground font-quicksand text-base font-semibold">
            Overseas trip? Get the latest information on travel guides
          </p>

          <Button
            label="More Info"
            variant="tertiary"
            size="sm"
            className="rounded-full font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;

import { DiscountBadgeProps } from '@/interfaces';
import Icon from './Icon';
import { IconName } from '@/constants/IconName';

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ discount }) => {
  return (
    <div className="absolute top-3 -left-2 z-10 overflow-visible">
      <div className="bg-accent flex h-10 items-center gap-1 rounded-full rounded-bl-none px-[5px] shadow-lg">
        <div className="ml-1 flex h-[17px] w-[17px] shrink-0 items-center justify-center">
          <Icon name={IconName.Discount} size={17} />
        </div>
        <span className="font-quicksand text-[15px] leading-none font-normal whitespace-nowrap text-white">
          {discount}% Off
        </span>
      </div>
      <div className="bg-accent-dark absolute top-full left-0 -z-20 h-2 w-2 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
    </div>
  );
};

export default DiscountBadge;

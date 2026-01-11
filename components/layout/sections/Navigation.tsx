import Icon from '@/components/common/Icon';
import { IconName } from '@/constants/IconName';
import { useState } from 'react';

const Navigation = () => {
  const [selectedCategory, setSelectedCategory] = useState('Villa');

  const categoryItems = [
    { icon: IconName.LivingRoom1, label: 'Rooms' },
    { icon: IconName.Mansion1, label: 'Mansion' },
    { icon: IconName.Farm1, label: 'Countryside' },
    { icon: IconName.Villa1, label: 'Villa', active: true },
    { icon: IconName.PalmTree1, label: 'Tropical' },
    { icon: IconName.KeyChain1, label: 'New' },
    { icon: IconName.SwimmingPool1, label: 'Amazing pool' },
    { icon: IconName.Vacations1, label: 'Beach house' },
    { icon: IconName.Island11, label: 'Island' },
    { icon: IconName.Tent1, label: 'Camping' },
    { icon: IconName.Apartment1, label: 'Apartment' },
    { icon: IconName.Home1, label: 'House' },
    { icon: IconName.Cottage1, label: 'Lakefront' },
    { icon: IconName.Barn1, label: 'Farm house' },
    { icon: IconName.Treehouse11, label: 'Treehouse' },
    { icon: IconName.Cabin1, label: 'Cabins' },
    { icon: IconName.CastleTower1, label: 'Castles' },
    { icon: IconName.Farm1, label: 'Lakeside' },
  ];

  return (
    <nav className="nav-wrapper mx-8">
      <div className="nav-container">
        <div className="nav-content">
          {/* Category buttons go here */}

          {categoryItems.map((item, index) => {
            const isActive = item.label === selectedCategory;

            return (
              <div
                key={index}
                onClick={() => setSelectedCategory(item.label)}
                className={`flex cursor-pointer flex-col items-center justify-start gap-1 px-2 py-4 transition-all duration-200 hover:opacity-80 ${
                  isActive ? 'border-border-accent border-b-[5px] pb-3' : 'pb-4'
                }`}
              >
                <Icon
                  name={item.icon}
                  size={24}
                  className="text-foreground overflow-hidden"
                  active={isActive}
                />
                <span
                  className={`font-quicksand text-center text-xs font-medium ${
                    isActive ? 'text-tertiary' : 'text-muted'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import { IconName } from '@/constants/IconName';
import { useState } from 'react';

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="border-border-lighter bg-background w-full border-b">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between py-3">
          {/* Logo */}
          <Icon name={IconName.Alx} size={58} />

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block p-3 lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={IconName.ArrowRight} size={24} className="text-foreground" />
          </button>

          {/* Search Bar */}
          {/* Search Bar */}
          <div
            className={`${menuOpen ? 'block' : 'hidden'} border-border-lighter mx-8 max-w-[600px] flex-1 items-center gap-6 rounded-full border px-6 py-2 shadow-sm transition-shadow hover:shadow-md lg:flex lg:max-w-3xl`}
          >
            {['Location', 'Check in', 'Check out', 'People'].map((label, i) => (
              <div
                key={label}
                className={`flex flex-1 flex-col gap-1 ${i < 3 ? 'border-border-light border-r pr-6' : ''}`}
              >
                <span className="text-text-secondary font-quicksand text-sm font-medium">
                  {label}
                </span>
                <input
                  type="text"
                  placeholder={
                    label === 'Location'
                      ? 'Search for destination'
                      : label === 'People'
                        ? 'Add guest'
                        : 'Add date'
                  }
                  className="text-text-light font-quicksand bg-transparent text-sm outline-none"
                />
              </div>
            ))}
            <div>
              <Button className="bg-warning flex h-10 w-10 items-center justify-center rounded-[20px]">
                <Icon name={IconName.Magnifer} size={22} />
              </Button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className={`${menuOpen ? 'block' : 'hidden'} flex-row items-center gap-2 lg:flex`}>
            <Button
              variant="secondary"
              size="md"
              label="Sign in"
              className="font-sfpro rounded-full"
            />
            <Button
              variant="primary"
              size="md"
              label="Sign up"
              className="font-sfpro border-light rounded-full border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

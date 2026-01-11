// components/common/SortMenu.tsx
import { SortMenuProps } from '@/interfaces';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const OPTIONS = ['Highest Price', 'Lowest Price', 'Highest Rating', 'Lowest Rating'];

export default function SortMenu({ sortBy, onChange }: SortMenuProps) {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="border-light text-primary-foreground hover:border-primary/30 flex h-[51px] items-center gap-2.5 rounded-[30px] border-[1.5px] bg-white px-6 transition-all">
        <span className="text-md font-semibold">
          <span className="text-muted">Sort by: </span>
          <span className="text-secondary ml-1">{sortBy}</span>
        </span>
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl border bg-white p-2 shadow-lg">
          {OPTIONS.map((opt) => (
            <MenuItem key={opt}>
              {({ focus }) => (
                <button
                  onClick={() => onChange(opt)}
                  className={`w-full rounded-md px-3 py-2 text-left transition-colors ${
                    opt === sortBy ? 'bg-accent/20 font-semibold' : focus ? 'bg-light' : ''
                  }`}
                >
                  {opt}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}

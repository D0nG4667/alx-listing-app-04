import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Icon from './Icon';
import { IconName } from '@/constants/IconName';
import { FilterMenuProps } from '@/interfaces';

export default function FilterMenu({ filters, focus, onChange }: FilterMenuProps) {
  return (
    <Menu as="div" className="relative">
      <MenuButton
        className="border-light text-primary-foreground  hover:border-primary/30 flex h-[51px] items-center gap-2.5 rounded-[30px] border-[1.5px] bg-white px-6 transition-all"
        aria-label="Open filters"
      >
        <span className="text-md font-semibold">Filter</span>
        <Icon name={IconName.Filter} className="h-6 w-6" />
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
        <MenuItems className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border-light bg-white p-2 shadow-lg">
          {filters.map((f) => (
            <MenuItem key={f}>
              {({ focus: a }) => (
                <button
                  onClick={() => onChange(f)}
                  className={`w-full rounded-lg px-3 py-2 text-left transition-colors ${
                    f === focus ? 'bg-accent/20 font-semibold' : a ? 'bg-light' : ''
                  }`}
                >
                  {f}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}

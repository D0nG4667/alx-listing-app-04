import { IconName } from '@/constants/IconName'; // auto-generated enum
import { IconProps } from '@/interfaces';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Icon = ({
  name,
  file = 'icons',
  size = 24,
  className,
  active,
}: IconProps & { name: IconName }) => (
  <svg
    width={size}
    height={size}
    className={cn('shrink-0 fill-none', active && 'stroke-current  stroke-1', className)}
    aria-hidden="true"
    focusable="false"
    fill="currentColor" // ensures Tailwind fill utilities work
  >
    <use href={`/assets/${file}.svg#${name}`} />
  </svg>
);

export default Icon;

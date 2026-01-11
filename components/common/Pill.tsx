import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  const base =
    'flex h-[51px] items-center justify-center gap-2.5 rounded-[30px] border-[1.5px] px-6 transition-all';

  const activeClasses = 'border-accent bg-accent/10 text-accent';

  const inactiveClasses =
    'border-light text-primary-foreground hover:border-primary/30 bg-accent/1 hover:bg-accent/20';

  return (
    <button
      onClick={() => onClick(label)}
      className={`${base} ${isActive ? activeClasses : inactiveClasses} `}
    >
      <span className="text-md font-semibold whitespace-nowrap">{label}</span>
    </button>
  );
};

export default Pill;

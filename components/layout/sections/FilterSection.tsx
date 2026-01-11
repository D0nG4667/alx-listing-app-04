import FilterMenu from '@/components/common/FilterMenu';
import Pill from '@/components/common/Pill';
import SortMenu from '@/components/common/SortMenu';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { FilterSectionProps } from '@/interfaces';

const FilterSection: React.FC<FilterSectionProps> = ({
  activeFilter,
  setActiveFilter,
  sortBy,
  setSortBy,
}) => {
  const derivedFilters = Array.from(
    new Set(['All', ...PROPERTYLISTINGSAMPLE.flatMap((p) => p.category)]),
  );

  const filters = [
    'All',
    'Top Villa',
    'Free Reschedule',
    'Book Now, Pay later',
    'Self Checkin',
    'Instant Book',
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-[15px] px-4 py-4 lg:mx-8">
        {/* Left: Filter Pills */}
        <div className="flex flex-wrap items-center gap-[15px]">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>

        {/* Right: FilterMenu + SortMenu */}
        <div className="flex items-center gap-[15px]">
          <FilterMenu
            filters={derivedFilters}
            focus={activeFilter}
            onChange={(c) => setActiveFilter(c)}
          />
          <SortMenu sortBy={sortBy} onChange={(s) => setSortBy(s)} />
        </div>
      </div>
    </>
  );
};

export default FilterSection;

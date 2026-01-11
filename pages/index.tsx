import CardGrid from '@/components/common/CardGrid';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import FilterSection from '@/components/layout/sections/FilterSection';
import type { NextPageWithLayout, PropertyProps } from '@/interfaces';
import { useState, useMemo, ReactElement } from 'react';
import HomeLayout from '@/components/layout/HomeLayout';

const HomePage: NextPageWithLayout = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Highest Price');

  // Filtering
  const filtered = useMemo(() => {
    if (!activeFilter || activeFilter === 'All') return PROPERTYLISTINGSAMPLE;
    return PROPERTYLISTINGSAMPLE.filter((p) => p.category.includes(activeFilter));
  }, [activeFilter]);

  // Sorting
  const filteredSorted: PropertyProps[] = useMemo(() => {
    const copy = [...filtered];
    switch (sortBy) {
      case 'Highest Price':
      case 'Highest Rating':
        return copy.sort((a, b) =>
          sortBy === 'Highest Price' ? b.price - a.price : b.rating - a.rating,
        );
      case 'Lowest Price':
      case 'Lowest Rating':
        return copy.sort((a, b) =>
          sortBy === 'Lowest Price' ? a.price - b.price : a.rating - b.rating,
        );
      default:
        return copy;
    }
  }, [filtered, sortBy]);

  return (
    <div className="bg-primary min-h-screen p-8">
      <FilterSection
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* pass filtered+sorted data to CardGrid */}
      <div className="mt-6">
        <CardGrid cards={filteredSorted} />
      </div>
    </div>
  );
}


HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
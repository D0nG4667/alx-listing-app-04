import CardGrid from '@/components/common/CardGrid';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import FilterSection from '@/components/layout/sections/FilterSection';
import type { NextPageWithLayout, PropertyProps } from '@/interfaces';
import { useState, useMemo, useEffect, ReactElement } from 'react';
import HomeLayout from '@/components/layout/HomeLayout';
import axios from 'axios';

const HomePage: NextPageWithLayout = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Highest Price');
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch properties from API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
        // Fallback to sample data on error
        setProperties(PROPERTYLISTINGSAMPLE);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filtering
  const filtered = useMemo(() => {
    if (!activeFilter || activeFilter === 'All') return properties;
    return properties.filter((p) => p.category.includes(activeFilter));
  }, [activeFilter, properties]);

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
        {loading ? <p>Loading properties...</p> : <CardGrid cards={filteredSorted} />}
      </div>
    </div>
  );
}


HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
/**
 * CardGrid Component
 * -------------------
 * A responsive grid layout for displaying multiple Card components.
 *
 * Features:
 * - Automatically adjusts the number of columns based on screen size
 *   (1 column on mobile, 2 on tablets, 3–4 on larger screens)
 * - Provides consistent spacing and alignment for property listings
 * - Accepts an array of CardProps and renders a Card for each item
 *
 * Usage:
 * Import and use <CardGrid /> to display a collection of property cards.
 * Typically used on listing/search pages.
 *
 * Location:
 * components/common/CardGrid.tsx
 */

import { useState, useCallback } from 'react';
import Card from './Card';
import { useInfiniteScrollObserver } from '@/hooks/useInfiniteScrollObserver';
import type { CardGridProps } from '@/interfaces';

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const visibleCards = cards.slice(0, visibleCount);
  const hasMore = cards.length > visibleCount;

  const loadMore = useCallback(() => {
    if (!hasMore || isLoadingMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsLoadingMore(false);
    }, 600);
  }, [hasMore, isLoadingMore]);

  const sentinelRef = useInfiniteScrollObserver({
    onIntersect: loadMore,
    enabled: hasMore,
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleCards.map((card, idx) => (
          <div key={idx} className="animate-fade-in duration-500 ease-out">
            <Card {...card} />
          </div>
        ))}
      </div>

      <div className="mt-12 grid justify-center text-center">
        {hasMore ? (
          <div ref={sentinelRef}>
            <p className="text-muted text-sm">Loading more listings...</p>
            {isLoadingMore && (
              <svg className="text-primary mt-2 h-6 w-6 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
          </div>
        ) : (
          <p className="text-muted text-sm italic">No more listings to show ✨</p>
        )}
      </div>
    </>
  );
};

export default CardGrid;

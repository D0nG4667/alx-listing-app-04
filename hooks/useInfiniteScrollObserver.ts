import { useEffect, useRef } from 'react';

type Props = {
  onIntersect: () => void;
  enabled: boolean;
};

export const useInfiniteScrollObserver = ({ onIntersect, enabled }: Props) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        rootMargin: '200px',
      }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [enabled, onIntersect]);

  return sentinelRef;
};

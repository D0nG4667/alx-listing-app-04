import { MAX_DESC_LENGTH } from '@/constants';
import { PropertyProps } from '@/interfaces';
import { useState } from 'react';

export default function PropertyDescription({
  property,
  activeTab,
}: {
  property: PropertyProps;
  activeTab: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const description = property.description ?? '';

  const isLong = description.length > MAX_DESC_LENGTH;
  const visibleText =
    expanded || !isLong ? description : description.slice(0, MAX_DESC_LENGTH) + '...';

  return (
    <div className="mt-8">
      {activeTab === 'description' && (
        <div>
          <h2 className="text-2xl font-semibold">{/* Description */}</h2>
          <p className="text-muted-foreground mt-2">{visibleText}</p>

          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-accent mt-2 text-sm font-medium hover:underline"
            >
              {expanded ? 'Show less' : 'Read more →'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

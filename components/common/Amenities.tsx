import Icon from '@/components/common/Icon';
import { IconName } from '@/constants/IconName';
import { AmenitiesProps } from '@/interfaces';
import { toEnumKey } from '@/utils';

const getClosestIconName = (amenity: string): IconName => {
  // Normalize amenity string (remove spaces, lowercase)
  const normalized = toEnumKey(amenity).toLowerCase(); // e.g. "Bed 1" → "Bed1"

  // Get all enum keys
  const keys = Object.keys(IconName) as (keyof typeof IconName)[];

  // Simple similarity function (Levenshtein-lite: counts matching chars)
  const similarity = (a: string, b: string): number => {
    let matches = 0;
    const minLen = Math.min(a.length, b.length);
    for (let i = 0; i < minLen; i++) {
      if (a[i] === b[i]) matches++;
    }
    return matches / Math.max(a.length, b.length);
  };

  // Rank keys by similarity
  let bestKey: keyof typeof IconName | null = null;
  let bestScore = 0;

  keys.forEach((k) => {
    const score = similarity(normalized, k.toLowerCase());
    if (score > bestScore) {
      bestScore = score;
      bestKey = k;
    }
  });

  return bestKey ? IconName[bestKey] : IconName.People1; // fallback
};

const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  return (
    <>
      <ul className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        {amenities.map((amenity, index) => {
          console.log(amenity);
          const iconName = getClosestIconName(amenity); // lookup in enum
          return (
            <li key={index} className="flex items-center space-x-2 px-3 py-2">
              <Icon
                name={iconName}
                size={24}
                className="text-foreground overflow-hidden"
                active={true}
              />
              <span className="text-gray-700">{amenity}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Amenities;

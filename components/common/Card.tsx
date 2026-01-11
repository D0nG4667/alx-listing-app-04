import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';
import Icon from './Icon';
import { IconName } from '@/constants/IconName';
import DiscountBadge from './DiscountBadge';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';

const Card: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
  discount,
}) => {
  const slug = slugify(name);

  return (
    <Link href={`/property/${slug}`}>
      <div className="relative z-20 overflow-visible">
        {discount && (
          // <span className="absolute top-2 left-2 rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
          //   {discount}% Off
          // </span>
          <DiscountBadge discount={discount} />
        )}
        <div className="transform overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
          {/* Image with discount badge */}
          <div className="group relative aspect-4/3 w-full overflow-hidden">
            {image && (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            )}
          </div>

          {/* Tags */}
          {category && (
            <div className="flex flex-wrap gap-2 py-4">
              {category.map((cat, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          {/* Content */}
          <div className="p-2">
            {/* Title + Rating */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{name}</h2>
              {rating && (
                <div className="text-md flex items-center">
                  <Icon name={IconName.Star2} size={20} className="text-warning mr-1" /> {rating}
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-3 text-sm">
              {address.city}, {address.state}, {address.country}
            </p>

            {/* Property details */}
            <div className="mb-3 flex w-full items-center justify-between text-sm">
              {/* Left: Beds, Baths, Guests */}
              <div className="flex items-center gap-4 rounded-full border border-gray-300 px-3 py-1">
                {offers.bed && (
                  <span className="flex items-center gap-1">
                    <Icon name={IconName.Bed1} size={20} className="text-muted-foreground" />{' '}
                    {offers.bed}
                  </span>
                )}
                {offers.shower && (
                  <span className="flex items-center gap-1">
                    <Icon name={IconName.Bathtub1} size={20} className="text-muted-foreground" />{' '}
                    {offers.shower}
                  </span>
                )}
                {offers.occupants && (
                  <span className="flex items-center gap-1">
                    <Icon name={IconName.People1} size={20} className="text-muted-foreground" />{' '}
                    {offers.occupants}
                  </span>
                )}
              </div>

              {/* Right: Price */}
              {price && (
                <span className="text-lg font-bold text-gray-800">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(price)}
                  <span className="text-md font-normal">/n</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

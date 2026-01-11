import { PropertyProps } from '@/interfaces';
import Image from 'next/image';
import { IconName } from '@/constants/IconName';
import Icon from '@/components/common/Icon';
import { DetailPill } from '@/components/common/DetailPill';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const placeholderProperty = 'https://placehold.co/300x300.png';

  const { name, address, rating, offers, image, reviews, images, marketSegment } = property;

  const labelClassName = "hidden sm:inline"

  return (
    <>
      <h1 className="text-4xl font-bold">{name}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm sm:text-base">
          {rating && (
            <div className="text-md flex items-center">
              <Icon name={IconName.Star2} size={20} className="text-warning mr-1" /> {rating}
            </div>
          )}
          {/* Review count */}
          <span className="text-gray-500">
            ({reviews?.length} {reviews.length === 1 ? 'review' : 'reviews'})
          </span>
          <Icon name={IconName.MapPoint} size={20} className="ml-2" />
          <span className="text-gray-500">
            {address.city}, {address.state}, {address.country}
          </span>
          <Icon name={IconName.Profile1} size={20} className="ml-2" />
          <span className="text-gray-500">{marketSegment?.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <DetailPill iconName={IconName.Fav} label="Save" labelClassName={labelClassName} />
          <DetailPill iconName={IconName.Share} label="Share" labelClassName={labelClassName} />
        </div>
      </div>

      {/* Image Grid */}
      <div className="mt-4 grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
        {/* Large main image (left side, spans 2 rows) */}
        <div className="relative col-span-2 row-span-2 h-96">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            style={{ borderTopLeftRadius: '0.75rem', borderBottomLeftRadius: '0.75rem' }} // rounded-l-xl
          />
        </div>

        {/* Top right image */}
        <div className="relative col-span-2 row-span-1">
          <Image
            src={images?.[0] ?? placeholderProperty}
            alt={`${name}-1`}
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom center image */}
        <div className="relative col-span-1 row-span-1">
          <Image
            src={images?.[1] ?? placeholderProperty}
            alt={`${name}-2`}
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom right image with overlay button */}
        <div className="relative col-span-1 row-span-1">
          <Image
            src={images?.[2] ?? placeholderProperty}
            alt={`${name}-3`}
            fill
            className="object-cover"
          />
          <button className="text-white-foreground hover:text-accent absolute bottom-2 left-1/2 -translate-x-1/2 rounded-lg border bg-white/50 px-3 py-1 text-sm font-medium backdrop-blur-sm hover:bg-white/90">
            Show all photo
          </button>
        </div>
      </div>

      {/* Property details */}
      <div className="mb-3 flex w-full sm:w-[50%] text-sm">
        <DetailPill className="flex-1 text-center mr-3" iconName={IconName.Bed1} label={`${offers.bed} Bedrooms`} />
        <DetailPill className="flex-1 text-center mr-3" iconName={IconName.Bathtub1} label={`${offers.shower} Bathroom`} />
        <DetailPill className="flex-1 text-center" iconName={IconName.People1} label={`${offers.occupants} Guests`} />
      </div>

    </>
  );
};

export default PropertyDetail;

import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { useRouter } from 'next/router';
import PropertyDetail from '@/components/property/PropertyDetail';
import ReviewSection from '@/components/property/ReviewSection';
import BookingSection from '@/components/property/BookingSection';
import { slugify } from '@/utils/slugify';
import { NextPageWithLayout } from '@/interfaces';
import BaseLayout from '@/components/layout/BaseLayout';
import { ReactElement } from 'react';
import PropertyDetailBody from '@/components/property/PropertyDetailBody';

const PropertyPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => slugify(item.name) === id);

  if (!property) return <p className="p-6 text-center text-gray-500">Property not found</p>;

  return (
    <div className="bg-primary min-h-screen p-8">
      {/* Responsive grid layout */}
      {/* Outer container */}
      <div className="container mx-auto">
        {/* Property detail grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left side: images + tabs */}
          <div className="space-y-8 lg:col-span-3">
            {/* Top four images */}
            <PropertyDetail property={property} />
          </div>
          <div className="space-y-8 lg:col-span-2">
            {/* Top four images */}
            <PropertyDetailBody property={property} />
          </div>

          {/* Right side: Booking section */}
          <div className="lg:col-span-1">
            <BookingSection price={property.price} />
          </div>

          {/* Bottom reviews */}
          <div className="space-y-8 lg:col-span-2">
            <ReviewSection reviews={property.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default PropertyPage;

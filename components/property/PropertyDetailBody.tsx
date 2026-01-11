import { PropertyProps } from '@/interfaces';
import { useState } from 'react';
import ReviewSection from '@/components/property/ReviewSection';
import Amenities from '../common/Amenities';
import PropertyDescription from '../common/PropertyDescription';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'offer' | 'reviews' | 'host'>(
    'description',
  );

  return (
    <>
      {/* Tabs Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between border-b border-gray-300">
          {/* Tab buttons */}
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-2 ${activeTab === 'description' ? 'text-accent border-accent border-b-2 font-semibold' : ''}`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('offer')}
              className={`pb-2 ${activeTab === 'offer' ? 'text-accent border-accent border-b-2 font-semibold' : ''}`}
            >
              What we offer
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 ${activeTab === 'reviews' ? 'text-accent border-accent border-b-2 font-semibold' : ''}`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('host')}
              className={`pb-2 ${activeTab === 'host' ? 'text-accent border-accent border-b-2 font-semibold' : ''}`}
            >
              About host
            </button>
          </div>

          {/* Published date floated right */}
          <div className="text-sm text-gray-500">
            {property.publishedAt ?? 'Published by July 01, 2024'}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'description' && (
            <PropertyDescription property={property} activeTab={activeTab} />
          )}

          {activeTab === 'offer' && (
            <div>
              <h2 className="text-2xl font-semibold">{/* What this place offers */}</h2>
              <Amenities amenities={property.category} />
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <ReviewSection reviews={property.reviews} />
            </div>
          )}

          {activeTab === 'host' && (
            <div>
              <h2 className="text-2xl font-semibold">{/* About the Host */}</h2>
              <p className="mt-2">{property.host?.bio || 'Host information coming soon.'}</p>
            </div>
          )}
        </div>
      </div>
      {/* Amenities */}
      <div className="mt-4">
        <h2 className="border-t border-gray-300 pt-8 pb-2 text-2xl font-semibold">
          What this place offers
        </h2>
        <p className="text-sm">
          Each home is fully equipped to meet your needs, with ample space and privacy.
        </p>
        <Amenities amenities={property.category} />
      </div>
    </>
  );
};

export default PropertyDetail;

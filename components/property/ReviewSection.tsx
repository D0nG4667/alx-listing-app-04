import { IconName } from '@/constants/IconName';
import { Review } from '@/interfaces';
import Image from 'next/image';
import { useState } from 'react';
import Icon from '../common/Icon';

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4; // adjust as needed

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const placeholderAvatar = 'https://placehold.co/150x150.png';

  return (
    <>
      <h3 className="mb-2 border-t border-gray-300 pt-8 text-2xl font-semibold">{/* Reviews */}</h3>
      {/* Total Reviews*/}
      <div className="mb-4 flex items-center text-lg font-semibold">
        <Icon name={IconName.Star2} size={20} className="text-warning mr-1" />
        {reviews.length > 0
          ? (
            reviews.reduce((acc, review) => acc + (review.rating || 0), 0) / reviews.length
          ).toFixed(2)
          : '0.00'}
        <span className="ml-2 text-gray-500">({reviews.length} reviews)</span>
      </div>

      {/* Individual Reviews */}

      <div className="grid grid-cols-1 gap-6 border-b border-gray-200 pb-8 md:grid-cols-2">
        {currentReviews.map((review, index) => (
          <div key={index} className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
            {/* Header: Avatar + Name + Membership */}
            <div className="mb-4 flex items-center">
              <Image
                src={review.avatar ?? placeholderAvatar}
                alt={review.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="text-foreground text-base font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">
                  {review.memberSince && `${review.memberSince} years on ALX`}
                </p>
              </div>
            </div>

            {/* Date + Trip Type */}
            <p className="mb-2 text-sm">
              <span className="mr-2 font-semibold">{review.date}</span>
              <span className="text-gray-500">•</span>
              <span className="ml-2 text-gray-500">{review.activity}</span>
            </p>

            {/* Comment */}
            <p className="text-foreground text-[15px] leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex items-center justify-center space-x-4">
        <button
          type="button"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`rounded-md px-3 py-1 ${currentPage === 1
            ? 'cursor-not-allowed bg-gray-300 text-gray-500'
            : 'bg-accent text-white'
            }`}
        >
          Previous
        </button>

        <span className="text-sm text-gray-600">
          Review Page {currentPage} of {totalPages}
        </span>

        <button
          type="button"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`rounded-md px-3 py-1 ${currentPage === totalPages
            ? 'cursor-not-allowed bg-gray-300 text-gray-500'
            : 'bg-accent text-white'
            }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ReviewSection;

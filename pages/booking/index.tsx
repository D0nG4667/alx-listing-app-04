import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import { NextPageWithLayout } from '@/interfaces';
import BaseLayout from '@/components/layout/BaseLayout';
import { ReactElement } from "react";

const BookingPage: NextPageWithLayout = () => {
    const bookingDetails = {
        propertyName: "Villa Arrecife Beach House",
        price: 7500,
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024",
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <BookingForm />
                    <CancellationPolicy />
                </div>
                <OrderSummary bookingDetails={bookingDetails} />
            </div>
        </div>
    );
}

BookingPage.getLayout = function getLayout(page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>;
};

export default BookingPage;


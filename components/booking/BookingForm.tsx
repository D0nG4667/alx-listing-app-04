const BookingForm = () => (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Contact Detail</h2>
        <form>
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="border p-2 w-full mt-2" title="First Name" placeholder="John" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="border p-2 w-full mt-2" title="Last Name" placeholder="Doe" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="border p-2 w-full mt-2" title="Email" placeholder="john.doe@example.com" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" className="border p-2 w-full mt-2" title="Phone Number" placeholder="+1234567890" />
                </div>
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold mt-6">Pay with</h2>
            <div className="mt-4 flex flex-col">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" className="border p-2 w-full mt-2" title="Card Number" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input type="text" id="expirationDate" className="border p-2 w-full mt-2" title="Expiration Date" placeholder="MM/YY" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" className="border p-2 w-full mt-2" title="CVV" placeholder="XXX" />
                </div>
            </div>

            {/* Billing Address */}
            <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
            <div className="mt-4 flex flex-col">
                <label htmlFor="streetAddress">Street Address</label>
                <input type="text" id="streetAddress" className="border p-2 w-full mt-2" title="Street Address" placeholder="123 Main St" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" className="border p-2 w-full mt-2" title="City" placeholder="New York" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" className="border p-2 w-full mt-2" title="State" placeholder="NY" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" className="border p-2 w-full mt-2" title="Zip Code" placeholder="90210" />
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" id="country" className="border p-2 w-full mt-2" title="Country" placeholder="USA" />
                </div>
            </div>

            {/* Submit Button */}
            <button type="button" className="mt-6 bg-accent text-white py-2 px-4 rounded-md w-full">
                Confirm & Pay
            </button>
        </form>
    </div>
);

export default BookingForm;
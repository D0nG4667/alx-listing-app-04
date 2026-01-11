import axios from "axios";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post("/api/bookings", formData);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      });
      alert("Booking confirmed!");
      console.log("Booking response:", response.status);
    } catch (error) {
      setError("Failed to submit booking. Please try again.");
      console.error("Booking error:", error, response.status);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="border p-2 w-full mt-2" title="First Name" placeholder="John" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="border p-2 w-full mt-2" title="Last Name" placeholder="Doe" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="border p-2 w-full mt-2" title="Email" placeholder="john.doe@example.com" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border p-2 w-full mt-2" title="Phone Number" placeholder="+1234567890" />
                </div>
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold mt-6">Pay with</h2>
            <div className="mt-4 flex flex-col">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" value={formData.cardNumber} onChange={handleChange} className="border p-2 w-full mt-2" title="Card Number" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input type="text" id="expirationDate" value={formData.expirationDate} onChange={handleChange} className="border p-2 w-full mt-2" title="Expiration Date" placeholder="MM/YY" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" value={formData.cvv} onChange={handleChange} className="border p-2 w-full mt-2" title="CVV" placeholder="XXX" />
                </div>
            </div>

            {/* Billing Address */}
            <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
            <div className="mt-4 flex flex-col">
                <label htmlFor="streetAddress">Street Address</label>
                <input type="text" id="streetAddress" value={formData.streetAddress} onChange={handleChange} className="border p-2 w-full mt-2" title="Street Address" placeholder="123 Main St" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={formData.city} onChange={handleChange} className="border p-2 w-full mt-2" title="City" placeholder="New York" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" value={formData.state} onChange={handleChange} className="border p-2 w-full mt-2" title="State" placeholder="NY" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" value={formData.zipCode} onChange={handleChange} className="border p-2 w-full mt-2" title="Zip Code" placeholder="90210" />
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" id="country" value={formData.country} onChange={handleChange} className="border p-2 w-full mt-2" title="Country" placeholder="USA" />
                </div>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading} className="mt-6 bg-accent text-white py-2 px-4 rounded-md w-full disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "Processing..." : "Confirm & Pay"}
            </button>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

            {/* Success Message */}
            {success && <p className="text-green-500 mt-4 text-center">Booking confirmed successfully!</p>}
        </form>
    </div>
  );
};

export default BookingForm;
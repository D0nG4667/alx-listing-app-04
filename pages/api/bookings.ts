import type { NextApiRequest, NextApiResponse } from 'next';

interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

type ResponseData = 
  | { message: string; bookingId: string }
  | { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const bookingData: BookingData = req.body;

    // Validate required fields
    if (
      !bookingData.firstName ||
      !bookingData.lastName ||
      !bookingData.email ||
      !bookingData.phoneNumber ||
      !bookingData.streetAddress ||
      !bookingData.city ||
      !bookingData.state ||
      !bookingData.zipCode ||
      !bookingData.country ||
      !bookingData.cardNumber ||
      !bookingData.expirationDate ||
      !bookingData.cvv
    ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // In a real application, you would:
    // 1. Process payment with card details
    // 2. Create booking in database
    // 3. Send confirmation email
    // For now, we just return a success response

    // Generate a mock booking ID
    const bookingId = `BK-${Date.now()}`;

    // Log booking (in production, save to database)
    console.log('New booking received:', {
      bookingId,
      ...bookingData,
      // Never log full card numbers in production!
      cardNumber: `****-****-****-${bookingData.cardNumber.slice(-4)}`,
    });

    res.status(201).json({
      message: 'Booking confirmed successfully',
      bookingId,
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

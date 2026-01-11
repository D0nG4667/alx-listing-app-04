import type { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { Review } from '@/interfaces';
import { slugify } from '@/utils/slugify';

type ResponseData = Review[] | { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'Invalid property ID' });
    }

    // Find property by slug
    const property = PROPERTYLISTINGSAMPLE.find(
      (p) => slugify(p.name) === id
    );

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Return reviews for the property
    res.status(200).json(property.reviews || []);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

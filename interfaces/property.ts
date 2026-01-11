import { IconName } from "@/constants/IconName";

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  type?: ButtonType;
  ariaLabel?: string;
}

export interface IconProps {
  name: string;
  file?: string
  size?: number;
  className?: string;
  active?: boolean;
};

export interface CardProps {
  title: string;
  description: string;
  image: string;
  discount?: string;
  rating?: number;
  beds?: number;
  baths?: number;
  guests?: string | number;
  tags?: string[];
  price?: number;
}


export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export enum ActivityType {
  FamilyTrip = "Family trip",
  // Add more later, e.g. BusinessTrip = "Business trip"
}

export interface Review {
  name: string;
  avatar?: string;       
  rating: number;   
  comment: string;
  date: string;
  activity?: ActivityType;
  memberSince?: string;
}

export interface PropertyHost {
    name: string;
    avatar: string;
    bio: string;
    rating?: number;
    reviews: Review[];
    verified?: boolean;
}

export enum SegmentType {
  Mainstream = "Mainstream",
  Prime = "Prime",
  Luxury = "Luxury",
  Commercial = "Commercial",
  Industrial = "Industrial",
  Land = "Land",
  Niche = "Niche",
}

// Single interface for properties
export interface PropertySegment {
  id: string;
  name: string;
  description: string;
  averagePriceRange: [number, number]; // min-max
  targetAudience: string;
  type: SegmentType; // classification
}

export interface PropertyProps {
  name: string,
  description?: string;
  host?: PropertyHost
  address: Address,
  rating: number,
  category: string[],
  price: number,
  offers: Offers,
  image: string,
  images?: string[],
  discount?: string,
  reviews: Review[];
  publishedAt?: string;
  marketSegment?: PropertySegment;
}

export interface CardGridProps {
  cards: PropertyProps[];
}

export interface DiscountBadgeProps {
  discount: string;
}

export interface PillProps {
  label: string;
  isActive: boolean;
  onClick: (label: string) => void;
}

export interface DetailPillProps {
  iconName: IconName;
  label: string;
  className?: string;        // ✅ for the pill container
  labelClassName?: string;   // ✅ new prop for the label span
}

export interface FilterMenuProps {
  filters: string[];
  focus: string;
  onChange: (value: string) => void;
}

export interface SortMenuProps {
  sortBy: string;
  onChange: (value: string) => void;
}

export interface FilterSectionProps {
  activeFilter: string;
  setActiveFilter: (c: string) => void;
  sortBy: string;
  setSortBy: (s: string) => void;
}

export interface AmenitiesProps {
  amenities: string[];
}

export interface DatePickerInputProps {
  label: string;
  minDate?: Date; // optional restriction
  onSelect: (formatted: string, rawDate: Date) => void;
}

export interface CustomDateInputProps extends React.ComponentPropsWithoutRef<'input'> {
  value?: string;
  onClick?: () => void;
}

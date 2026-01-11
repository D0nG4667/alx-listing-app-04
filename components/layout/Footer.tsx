import React from 'react';
import Link from 'next/link';
import Icon from '../common/Icon';
import { IconName } from '@/constants/IconName';
import MadeWithLove from './sections/MadeWithLove';

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="flex flex-col gap-6">
    <h3 className="text-footer-foreground font-quicksand text-lg font-semibold md:text-xl">
      {title}
    </h3>
    <nav aria-label={title} className="flex flex-col gap-2">
      {children}
    </nav>
  </div>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    href={href}
    className="text-footer-foreground font-quicksand hover:text-accent text-sm leading-[26px] transition-colors md:text-base"
  >
    {children}
  </Link>
);

/* Main Footer */
export default function Footer() {
  return (
    <>
      <footer className="bg-footer text-footer-foreground">
        {/* Top stripe uses brand primary (green) */}
        <div className="bg-banner h-9 w-full" />

        <div className="mx-auto px-4 py-10 md:px-6 md:py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,640px)_1fr] lg:gap-24">
            {/* Left: Logo + description */}
            <div className="flex flex-col gap-6">
              <Icon name={IconName.AlxWhite} size={58} />
              <p className="font-quicksand max-w-2xl text-sm leading-7 font-medium md:text-base">
                ALX is a platform where travelers can discover and book unique, comfortable, and
                affordable lodging options worldwide. From cozy city apartments and tranquil
                countryside retreats to exotic beachside villas, ALX connects you with the perfect
                place to stay for any trip.
              </p>
            </div>

            {/* Right: Navigation columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12">
              <FooterColumn title="Explore">
                <FooterLink href="/dubai">Apartments in Dubai</FooterLink>
                <FooterLink href="/new-york">Hotels in New York</FooterLink>
                <FooterLink href="/spain">Villa in Spain</FooterLink>
                <FooterLink href="/indonesia">Mansion in Indonesia</FooterLink>
              </FooterColumn>

              <FooterColumn title="Company">
                <FooterLink href="/about">About us</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/career">Career</FooterLink>
                <FooterLink href="/customers">Customers</FooterLink>
                <FooterLink href="/brand">Brand</FooterLink>
              </FooterColumn>

              <FooterColumn title="Help">
                <FooterLink href="/support">Support</FooterLink>
                <FooterLink href="/cancel-booking">Cancel booking</FooterLink>
                <FooterLink href="/refunds">Refunds Process</FooterLink>
              </FooterColumn>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-b border-gray-200/10" />

          {/* Bottom row */}
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-quicksand max-w-xl text-sm md:text-base">
              Some hotels require you to cancel more than 24 hours before check-in. Details{' '}
              <Link href="/details" className="text-accent hover:underline">
                here
              </Link>
            </p>

            <div className="flex flex-wrap gap-3 text-sm md:gap-6 md:text-base">
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link
                href="/policy"
                className="hover:text-accent text-footer-foreground transition-colors"
              >
                Policy service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-accent text-footer-foreground transition-colors"
              >
                Cookies Policy
              </Link>
              <Link
                href="/partners"
                className="hover:text-accent text-footer-foreground transition-colors"
              >
                Partners
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Made with love section */}
      <MadeWithLove />
    </>
  );
}

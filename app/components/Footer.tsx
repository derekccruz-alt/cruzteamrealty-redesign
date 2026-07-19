'use client';

import Link from 'next/link';
import { Phone, InstagramLogo, MapPin } from '@phosphor-icons/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream border-t-4 border-sage">
      <div className="container-max py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="heading-md text-cream">Cruz Team Realty</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Local real estate expertise. 27+ years of combined experience serving Southwest Riverside County families.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-cream text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li>
                <Link href="#buy" className="hover:text-sage transition-colors">
                  Buyer Representation
                </Link>
              </li>
              <li>
                <Link href="#build" className="hover:text-sage transition-colors">
                  New Construction
                </Link>
              </li>
              <li>
                <Link href="#sell" className="hover:text-sage transition-colors">
                  Home Selling
                </Link>
              </li>
              <li>
                <Link href="#lease" className="hover:text-sage transition-colors">
                  Rental Listings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-cream text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+19517042180"
                  className="flex items-center gap-3 text-cream/70 hover:text-sage transition-colors text-sm"
                >
                  <Phone size={18} weight="bold" />
                  (951) 704-2180
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/the_newhomeguy/"
                  className="flex items-center gap-3 text-cream/70 hover:text-sage transition-colors text-sm"
                >
                  <InstagramLogo size={18} weight="bold" />
                  @the_newhomeguy
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-3 text-cream/70 text-sm">
                  <MapPin size={18} weight="bold" />
                  Temecula Valley, CA
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-cream text-sm uppercase tracking-wider">
              Free Tools
            </h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li>
                <Link
                  href="https://cruz-valuation.pages.dev/"
                  className="hover:text-sage transition-colors"
                >
                  Home Valuation
                </Link>
              </li>
              <li>
                <Link
                  href="https://g.page/r/CRIN9fNclviHEBM/review"
                  className="hover:text-sage transition-colors"
                >
                  Leave a Review
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10">
          <p className="text-cream/50 text-xs text-center">
            © {currentYear} Cruz Team Realty. All rights reserved. Serving Temecula Valley & Southwest Riverside County.
          </p>
        </div>
      </div>
    </footer>
  );
}

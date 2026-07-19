'use client';

import Image from 'next/image';
import { Star } from '@phosphor-icons/react';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Sarah M.',
    title: 'First-Time Buyer',
    quote:
      'Derek made the entire process feel less overwhelming. He explained every step and fought for us during negotiations. Best decision we made.',
    rating: 5,
    image: '/images/home1.jpg',
  },
  {
    name: 'James & Claire T.',
    title: 'Home Sellers',
    quote:
      'Listed with Derek. Sold 8% above asking in 12 days. The marketing strategy he outlined from day one actually worked.',
    rating: 5,
    image: '/images/home2.jpg',
  },
  {
    name: 'Michael R.',
    title: 'New Construction Buyer',
    quote:
      'Derek negotiated $20k in upgrades. He understood exactly how builders price and where we could add value. Exceptional.',
    rating: 5,
    image: '/images/home3.jpg',
  },
];

export function Testimonials() {
  return (
    <section className="container-max py-24 md:py-32 space-y-16">
      {/* Couple Photo */}
      <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden shadow-lg animate-fade-in">
        <Image
          src="/images/couple1.jpg"
          alt="Derek & Gina Cruz"
          fill
          className="object-cover"
        />
      </div>

      {/* Featured Quote */}
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-sage/30" />
          <p className="text-sm font-mono uppercase tracking-wider text-sage">
            Client Stories
          </p>
          <div className="flex-1 h-px bg-sage/30" />
        </div>
        <blockquote className="heading-lg max-w-3xl leading-tight">
          "Derek made the entire process feel less overwhelming. He explained every step and fought for us during negotiations."
        </blockquote>
        <p className="text-lg font-semibold text-charcoal">Sarah M. · First-Time Buyer</p>
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <article
            key={testimonial.name}
            className="space-y-4 overflow-hidden border border-sage/20 rounded-sm hover:border-sage/40 transition-all duration-200 animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} weight="fill" className="text-sage" />
                ))}
              </div>
              <p className="subtext">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-charcoal/60">{testimonial.title}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Google Reviews CTA */}
      <div className="pt-8 border-t border-sage/20 space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <p className="text-lg font-semibold text-charcoal">
          Worked with the Cruz Team? Your review helps the next family in the valley find an agent they can trust.
        </p>
        <Link href="https://g.page/r/CRIN9fNclviHEBM/review">
          <button className="btn-secondary">Leave a Google Review</button>
        </Link>
      </div>
    </section>
  );
}

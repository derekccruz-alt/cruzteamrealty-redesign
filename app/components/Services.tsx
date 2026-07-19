'use client';

import { ArrowRight } from '@phosphor-icons/react';

const services = [
  {
    id: 'buy',
    number: '01',
    title: 'Buyer Representation',
    description: 'From first-time buyers to move-up families — search, tour, negotiate, and close with an agent who knows the Southwest Riverside market inside and out.',
  },
  {
    id: 'build',
    number: '02',
    title: 'New Construction Guidance',
    description: 'The specialty. We steer you to the right builder, right phase, and right lot — and negotiate upgrade packages worth thousands.',
  },
  {
    id: 'sell',
    number: '03',
    title: 'Listing & Selling',
    description: 'Pricing, staging, marketing, and positioning that consistently deliver results — from a three-time Sales Team of the Year.',
  },
  {
    id: 'lease',
    number: '04',
    title: 'Rental Listings',
    description: 'Full rental listing services for owners and relocating families across the valley. Property management coordination included.',
  },
];

export function Services() {
  return (
    <section className="container-max py-24 md:py-32">
      <div className="space-y-4 mb-16">
        <h2 className="heading-lg max-w-3xl">
          Everything between "just looking" and keys in hand.
        </h2>
        <p className="subtext max-w-2xl">
          Whether you're buying, building, selling, or renting — we handle the complexity so you handle the excitement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {services.map((service, idx) => (
          <article
            key={service.id}
            className={`space-y-4 pb-8 border-b border-sage/20 animate-fade-in`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <h3 className="heading-md max-w-xs">{service.title}</h3>
              <span className="text-6xl font-bold text-sage/20 flex-shrink-0">
                {service.number}
              </span>
            </div>
            <p className="subtext max-w-sm">{service.description}</p>
            <div className="pt-2">
              <button className="inline-flex items-center gap-2 text-sage font-semibold hover:gap-3 transition-all">
                Learn more
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

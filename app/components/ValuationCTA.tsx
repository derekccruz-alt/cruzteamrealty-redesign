'use client';

import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

export function ValuationCTA() {
  return (
    <section className="py-24 md:py-32 bg-sage/10">
      <div className="container-max space-y-8">
        <div
          className="space-y-6 max-w-2xl animate-fade-in"
        >
          <h2 className="heading-lg">
            Thinking about selling? Start with your number.
          </h2>
          <p className="subtext">
            If you've owned your home for a while, you've likely built more equity than you think. Get a free, professional home valuation in minutes — no obligation, no pressure.
          </p>
          <Link href="https://cruz-valuation.pages.dev/">
            <button className="btn-primary flex items-center gap-2">
              Get Your Free Valuation
              <ArrowRight size={20} weight="bold" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

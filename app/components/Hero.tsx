'use client';

import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="container-max min-h-[100dvh] flex items-center py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Text */}
        <div
          className="space-y-8 animate-fade-in"
        >
          <div className="space-y-2">
            <p className="text-sm font-mono uppercase tracking-widest text-sage">
              Temecula Valley · SW Riverside County
            </p>
            <h1 className="heading-xl max-w-[600px] leading-[1.1]">
              Meet the <br />
              New Home <br />
              Guy.
            </h1>
          </div>

          <p className="subtext max-w-[500px]">
            Derek & Gina Cruz are the husband-and-wife team behind Cruz Team Realty — 27+ combined years guiding Southwest Riverside County families into new-construction and resale homes, and getting sellers top-dollar results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="tel:+19517042180">
              <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                Contact Derek
                <ArrowRight size={20} weight="bold" />
              </button>
            </Link>
            <Link href="https://cruz-valuation.pages.dev/">
              <button className="btn-secondary whitespace-nowrap">
                Free Home Valuation
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-sage/20">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-sage">27+</p>
                <p className="text-sm text-charcoal/60">Combined years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sage">2025</p>
                <p className="text-sm text-charcoal/60">Top Producer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-sm overflow-hidden shadow-xl animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Derek Cruz at a new-construction open house in Southwest Riverside County"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          <p className="absolute bottom-6 left-6 text-sm font-mono uppercase tracking-wider text-cream/90">
            On site · New construction
          </p>
        </div>
      </div>
    </section>
  );
}

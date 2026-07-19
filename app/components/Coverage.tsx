'use client';

const cities = [
  'Temecula',
  'Murrieta',
  'Menifee',
  'Winchester',
  'French Valley',
  'Wildomar',
  'Lake Elsinore',
  'Canyon Lake',
  'Hemet',
  'San Jacinto',
  'Perris',
  'Moreno Valley',
  'Homeland',
  'Banning',
  'Beaumont',
  'Oceanside',
  'San Marcos',
];

export function Coverage() {
  return (
    <section className="py-24 md:py-32 bg-charcoal/5">
      <div className="container-max space-y-12">
        <div className="space-y-4">
          <h2 className="heading-lg">
            Southwest Riverside County is home turf.
          </h2>
          <p className="subtext max-w-2xl">
            Based in Temecula Valley, serving 17 cities across the region. One market. One team. Deep roots.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {cities.map((city, idx) => (
            <div
              key={city}
              className="px-4 py-2 bg-cream border border-sage/30 rounded-full text-sm font-medium text-charcoal hover:border-sage hover:bg-sage hover:text-cream transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${Math.min(idx * 40, 400)}ms` }}
            >
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

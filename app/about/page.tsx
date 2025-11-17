'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif mb-8" style={{ color: 'var(--foreground)' }}>About Tribals</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-serif mb-4" style={{ color: 'var(--foreground)' }}>Our Mission</h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              We celebrate and support the incredible artisanal traditions of Jharkhand's tribal communities. 
              Every product on our platform represents generations of skill, cultural wisdom, and creative excellence.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4" style={{ color: 'var(--foreground)' }}>Our Story</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              Founded with a passion for preserving tribal heritage, Tribals connects artisans directly with 
              customers who appreciate authentic, handcrafted goods. We believe that every purchase is an investment 
              in cultural preservation and community empowerment.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              From the intricate Dokra castings to hand-woven textiles, each item tells a story of tradition, 
              skill, and the unique identity of Jharkhand's tribal peoples.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-4" style={{ color: 'var(--foreground)' }}>The Tribes We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Santhal', 'Ho', 'Oraon', 'Munda', 'Kharia', 'Kurukh'].map((tribe) => (
                <div key={tribe} className="p-6" style={{ backgroundColor: 'var(--light-bg)' }}>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{tribe} Tribe</h3>
                  <p style={{ color: 'var(--muted)' }}>
                    Learn about the rich cultural heritage and traditional crafts of the {tribe} people of Jharkhand.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

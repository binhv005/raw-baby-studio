import React, { useState } from 'react';
import { gallery, galleryFilters } from '../data/studio';

export default function Amenities({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  const items = filter === 'all' ? gallery : gallery.filter((g) => g.cats.includes(filter));

  return (
    <section
      id="amenities"
      className="section-resort"
      style={{
        position: 'relative',
        backgroundColor: '#FFFCFB',
        paddingTop: '60px',
        paddingBottom: '85px',
      }}
    >
      <div className="container container-wide">
        {/* Section Header */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="tag-subtitle">BỘ SƯU TẬP</span>
          <h2
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              color: 'var(--color-coral)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '10px',
            }}
          >
            Khoảnh khắc đáng yêu
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', maxWidth: '650px', margin: '8px auto 0 auto' }}>
            Ảnh thật từ các buổi chụp của bé và gia đình tại RAW Baby Studio.
          </p>
        </div>

        {/* Filters */}
        <div
          className="reveal reveal-up delay-100"
          role="tablist"
          aria-label="Lọc bộ sưu tập"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '36px' }}
        >
          {galleryFilters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                style={{
                  padding: '9px 22px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  borderRadius: '30px',
                  border: '1px solid ' + (active ? 'var(--color-coral)' : '#F5DADA'),
                  backgroundColor: active ? 'var(--color-coral)' : '#ffffff',
                  color: active ? '#ffffff' : 'var(--color-forest)',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Editorial masonry gallery */}
        <div className="mood-masonry">
          {items.map((g, idx) => (
            <button
              key={g.src}
              className="mood-masonry-item"
              onClick={() => onOpenLightbox(items, idx)}
              aria-label={`Xem ảnh: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .mood-masonry { column-count: 3; column-gap: 18px; }
        .mood-masonry-item {
          display: block; width: 100%; margin: 0 0 18px 0; padding: 0;
          break-inside: avoid; overflow: hidden; cursor: zoom-in;
          background: #F5DADA; border-radius: 4px;
          box-shadow: 0 10px 26px rgba(122, 60, 60, 0.10);
        }
        .mood-masonry-item img {
          width: 100%; height: auto; display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mood-masonry-item:hover img { transform: scale(1.04); }
        @media (max-width: 900px) { .mood-masonry { column-count: 2; column-gap: 12px; } .mood-masonry-item { margin-bottom: 12px; } }
      `}</style>
    </section>
  );
}

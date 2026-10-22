import React from 'react';
import AutoSlideshow from './AutoSlideshow';

// Ảnh ngang, chủ thể nằm giữa/phải khung để chữ bên trái không che gương mặt
const heroImages = [
  { src: '/images/raw/newborn/01.jpg', alt: 'Bé sơ sinh ngủ ngon trên thú bông ngựa trắng - RAW Baby Studio', pos: '45% 40%' },
  { src: '/images/raw/sinh-nhat/09.jpg', alt: 'Bé gái trong tiệc sinh nhật pastel - RAW Baby Studio', pos: '50% 35%' },
  { src: '/images/raw/tho-dan/15.jpg', alt: 'Bé hóa thân thổ dân giữa rừng cây - RAW Baby Studio', pos: '50% 30%' },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-full">
      {/* Full-bleed photo, fading out to the left */}
      <div className="hero-full-bg">
        <AutoSlideshow images={heroImages} interval={5500} eager />
      </div>

      <div className="container container-wide hero-full-content">
        <div className="reveal reveal-up hero-full-text">
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)', letterSpacing: '4px' }}>
            STUDIO & PHOTOBOOTH · NAM ĐỊNH
          </span>
          <h1
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(2.52rem, 5.6vw, 4.62rem)',
              whiteSpace: 'nowrap',
              color: 'var(--color-coral)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '10px',
            }}
          >
            RAW Baby Studio
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.35rem, 2.2vw, 1.8rem)',
              color: 'var(--color-forest)',
              marginBottom: '14px',
            }}
          >
            Lưu giữ khoảnh khắc yêu thương của bé và cả nhà.
          </p>
          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.3vw, 1.1rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '420px',
              lineHeight: 1.7,
              marginBottom: '26px',
            }}
          >
            Chụp ảnh bầu, sơ sinh, gia đình và cá nhân với đa dạng concept, trang phục và phụ kiện - chuyên sâu ảnh newborn.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button className="btn-resort-primary" onClick={() => scrollTo('rooms')}>
              Khám phá concept
            </button>
            <button className="btn-resort-outline" onClick={() => scrollTo('booking')}>
              Đặt lịch chụp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

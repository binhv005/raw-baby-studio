import React from 'react';
import AutoSlideshow from './AutoSlideshow';

export default function About({ onOpenBooking }) {
  // 3 Vertical Portrait Photos matching the 3-column reference sample
  const photos = [
    { id: 1, images: ['newborn/03', 'newborn/07', 'newborn/05', 'newborn/02'].map((p) => `/images/raw/${p}.jpg`), alt: 'Ảnh newborn - thế mạnh của RAW Baby Studio', delayClass: 'delay-100', pos: 'center 30%' },
    { id: 2, images: ['trung-thu/04', 'trung-thu/16', 'cham-soc/06', 'trung-thu/02'].map((p) => `/images/raw/${p}.jpg`), alt: 'Ảnh gia đình mẹ và bé ngày Trung thu', delayClass: 'delay-200', pos: 'center 25%' },
    { id: 3, images: ['sinh-nhat/17', 'tho-dan/16', 'little-man/04', 'fairy/03'].map((p) => `/images/raw/${p}.jpg`), alt: 'Concept sinh nhật và nghệ thuật cho bé', delayClass: 'delay-300', pos: 'center 25%' },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        backgroundColor: '#FFFCFB',
        paddingTop: '75px',
        paddingBottom: '30px',
        overflow: 'hidden',
      }}
    >
      <div className="container container-wide">
        {/* Section Header */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
            VỀ RAW BABY STUDIO
          </span>
          <h2
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              color: 'var(--color-coral)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '10px',
              textShadow: '0 2px 8px rgba(215, 38, 61, 0.14)',
            }}
          >
            Từng khoảnh khắc bé lớn khôn
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Studio dành cho <strong>ba mẹ có con sơ sinh và trẻ nhỏ</strong>, cùng những <strong>gia đình muốn lưu giữ kỷ niệm</strong>. <strong>Đa dạng concept</strong>, <strong>trang phục</strong>, <strong>phụ kiện</strong> và kinh nghiệm chụp <strong>newborn</strong> để mỗi bộ ảnh đều đáng yêu, tươi sáng.
          </p>
        </div>

        {/* 3-Column Equal Height Portrait Gallery (Pure Photos, No Text) */}
        <div
          className="reveal reveal-up delay-150"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(12px, 2vw, 24px)',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${photo.delayClass} zoom-hover`}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3 / 4',
                maxHeight: '520px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                backgroundColor: '#FBEAEA',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(215, 38, 61, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
              }}
            >
              <AutoSlideshow images={photo.images} alt={photo.alt} interval={4200} startDelay={photo.id * 1200} defaultPos={photo.pos} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #about .reveal.reveal-up.delay-150 {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { pricingPackages } from '../data/studio';

export default function Pricing({ onOpenBooking }) {
  const hasPackages = pricingPackages.length > 0;

  return (
    <section
      id="pricing"
      className="pricing-wave-section"
      style={{
        backgroundImage: 'radial-gradient(circle at 12% 18%, rgba(255, 255, 255, 0.9) 0 16%, transparent 38%), radial-gradient(circle at 88% 82%, rgba(246, 184, 191, 0.55) 0 12%, transparent 36%), linear-gradient(135deg, #FDECEC 0%, #FFFCFB 55%, #FDECEC 100%)',
      }}
    >
      <div className="container container-wide" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
            CATALOG DỊCH VỤ
          </span>
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
            Dịch vụ chụp ảnh
          </h2>
          <p
            style={{
              maxWidth: '660px',
              margin: '0 auto',
              color: 'var(--color-text-muted)',
              fontSize: '0.98rem',
            }}
          >
            Bốn nhóm dịch vụ chính, phục vụ mọi nhu cầu chụp ảnh của bé và gia đình. Liên hệ để nhận báo giá chi tiết.
          </p>
        </div>

        {hasPackages ? (
          <div className="pricing-wave-grid">
            {pricingPackages.map((pkg, i) => (
              <div key={pkg.id} className={`pricing-wave-card reveal reveal-up delay-${(i + 1) * 100}`} style={{ borderRadius: 0 }}>
                <div className="pricing-wave-header">
                  <img src={pkg.image} alt={pkg.name} loading="lazy" className="pricing-wave-photo" style={{ objectPosition: pkg.imagePosition || 'center' }} />
                  <div className="pricing-wave-tint" style={{ background: 'linear-gradient(to bottom, rgba(42, 29, 29, 0.05) 30%, rgba(176, 30, 49, 0.6) 100%)' }} />
                  <div className="pricing-wave-head-content">
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', textShadow: '0 2px 10px rgba(0, 0, 0, 0.35)' }}>
                      {pkg.name}
                    </h3>
                  </div>
                  <div className="pricing-wave-svg-box">
                    <svg className="pricing-wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="#ffffff" />
                    </svg>
                  </div>
                </div>
                <div className="pricing-wave-body" style={{ paddingTop: '18px' }}>
                  <ul className="pricing-wave-features">
                    {(pkg.features || []).map((feat) => (
                      <li key={feat} className="pricing-wave-feat-item">
                        <span className="pricing-wave-dot" style={{ backgroundColor: 'var(--color-coral)' }} />
                        <span className="pricing-wave-feat-text">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-wave-btn-wrap">
                    <button onClick={onOpenBooking} className="pricing-wave-buy-btn" style={{ borderRadius: 0 }}>NHẬN TƯ VẤN</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Chưa có dữ liệu giá chính thức: hiển thị khối thông tin chờ cập nhật */
          <div
            className="reveal reveal-up"
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              backgroundColor: 'rgba(255, 252, 251, 0.82)',
              border: '1px solid #F5DADA',
              padding: 'clamp(32px, 5vw, 56px)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                color: 'var(--color-forest-dark)',
                marginBottom: '14px',
              }}
            >
              Bạn đang tìm concept phù hợp?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '26px' }}>
              Liên hệ RAW Baby Studio để tìm hiểu thông tin gói chụp và chi phí.
            </p>
            <button onClick={onOpenBooking} className="btn-resort-primary">
              Yêu cầu báo giá
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

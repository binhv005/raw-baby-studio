import React from 'react';
import { MapPin, ChevronRight, Phone, User } from 'lucide-react';
import { contact, services } from '../data/studio';

const FacebookIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const quickLinks = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Danh sách concept', href: '#rooms' },
  { label: 'Catalog dịch vụ', href: '#pricing' },
  { label: 'Bộ sưu tập', href: '#amenities' },
  { label: 'Đặt lịch chụp', href: '#booking' },
];

const colTitle = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.15rem',
  color: '#ffffff',
  marginBottom: '18px',
  paddingBottom: '6px',
  borderBottom: '2px solid #F6B8BF',
  display: 'inline-block',
};

export default function Contact() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* CTA band */}
      <section
        id="contact"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 25%, rgba(255, 255, 255, 0.85) 0 14%, transparent 36%), radial-gradient(circle at 90% 75%, rgba(246, 184, 191, 0.6) 0 12%, transparent 34%), linear-gradient(135deg, #FDECEC 0%, #FFFCFB 50%, #FDECEC 100%)',
          padding: '80px 0',
        }}
      >
        <div className="container container-wide">
          <div className="reveal reveal-up" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: "'Dancing Script', 'Alex Brush', cursive",
                fontSize: 'clamp(2.4rem, 4.6vw, 3.6rem)',
                color: 'var(--color-coral)',
                lineHeight: 1.15,
                marginBottom: '12px',
              }}
            >
              Hẹn gặp bé tại studio nhé!
            </h2>
            <p style={{ color: 'var(--color-forest-dark)', lineHeight: 1.7, marginBottom: '22px' }}>
              Gọi ngay <strong>{contact.phoneDisplay}</strong> ({contact.owner}) hoặc nhắn tin Facebook để được tư vấn concept, lịch chụp và chi phí.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a href="#booking" onClick={(e) => handleLinkClick(e, '#booking')} className="btn-resort-primary">Gửi yêu cầu đặt lịch</a>
              <a href={`tel:${contact.phoneTel}`} className="btn-resort-outline" style={{ color: '#2A1D1D', borderColor: '#2A1D1D' }}>
                <Phone size={16} />
                <span>Gọi {contact.phoneDisplay}</span>
              </a>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="btn-resort-outline" style={{ color: '#2A1D1D', borderColor: '#2A1D1D' }}>Xem Facebook</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer + Contact */}
      <footer
        style={{ position: 'relative', backgroundColor: '#1E1213', color: '#f5ede4', zIndex: 20, padding: '60px 0 35px 0', overflow: 'hidden' }}
      >
        <div className="container container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
              gap: '40px 48px',
              marginBottom: '45px',
            }}
          >
            {/* Brand */}
            <div className="reveal reveal-up">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', letterSpacing: '4px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
                RAW <span style={{ color: '#F6B8BF' }}>BABY STUDIO</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#DCC5C5', lineHeight: 1.7 }}>
                {contact.tagline} chụp ảnh bầu, sơ sinh, gia đình và cá nhân tại Nam Định và TP. Hồ Chí Minh.
              </p>
            </div>

            {/* Quick links */}
            <div className="reveal reveal-up delay-100">
              <h4 style={colTitle}>Khám Phá</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} style={{ color: '#DCC5C5', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ChevronRight size={14} color="#F6B8BF" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="reveal reveal-up delay-200">
              <h4 style={colTitle}>Dịch Vụ</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {services.map((s) => (
                  <li key={s} style={{ color: '#DCC5C5', fontSize: '0.9rem' }}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="reveal reveal-up delay-300">
              <h4 style={colTitle}>Liên Hệ</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#DCC5C5' }}>
                {contact.branches.map((b) => (
                  <li key={b.name} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <MapPin size={16} color="#F6B8BF" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>
                      <strong style={{ color: '#ffffff' }}>{b.name}:</strong>{' '}
                      {b.mapsUrl ? (
                        <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>{b.address}</a>
                      ) : (
                        b.address
                      )}
                    </span>
                  </li>
                ))}
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={16} color="#F6B8BF" /> <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <User size={16} color="#F6B8BF" /> <span>Liên hệ: {contact.owner}</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <FacebookIcon size={16} color="#F6B8BF" />
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Facebook RAW Baby Studio</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              fontSize: '0.85rem',
              color: '#DCC5C5',
            }}
          >
            <div>© {new Date().getFullYear()} <strong>RAW Baby Studio</strong>. Tất cả các quyền được bảo lưu.</div>
            <div>Lưu giữ khoảnh khắc yêu thương của bé và cả nhà.</div>
          </div>
        </div>
      </footer>
    </>
  );
}

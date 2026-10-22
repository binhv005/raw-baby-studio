import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RoomList from './components/RoomList';
import Pricing from './components/Pricing';
import Amenities from './components/Amenities';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import BackToTop from './components/BackToTop';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { concepts } from './data/studio';

export default function App() {
  // Enforce automatic scroll to top on page reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Smooth Scroll Reveal Observer
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Trigger only once, prevent repeated refiring on scroll
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [selectedRoomName, setSelectedRoomName] = useState('');
  const [lightboxData, setLightboxData] = useState(null); // { items, index }
  const [detailModalRoom, setDetailModalRoom] = useState(null);

  const [prefill, setPrefill] = useState(null);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Select a concept (optionally with quick-bar prefill) and jump to the booking form
  const handleSelectRoom = (conceptName, quickData, stayInPlace) => {
    setSelectedRoomName(conceptName || '');
    if (quickData) setPrefill({ ...quickData });
    if (!stayInPlace) scrollToBooking();
  };

  const handleOpenBooking = scrollToBooking;

  const handleOpenLightbox = (items, index) => setLightboxData({ items, index });
  const handleCloseLightbox = () => setLightboxData(null);
  const stepLightbox = (dir) =>
    setLightboxData((d) => d && { ...d, index: (d.index + dir + d.items.length) % d.items.length });

  // Keyboard: Escape closes, arrows navigate
  useEffect(() => {
    if (!lightboxData && !detailModalRoom) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (lightboxData) setLightboxData(null);
        else setDetailModalRoom(null);
      } else if (lightboxData && e.key === 'ArrowRight') stepLightbox(1);
      else if (lightboxData && e.key === 'ArrowLeft') stepLightbox(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxData, detailModalRoom]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About onOpenBooking={handleOpenBooking} />
        <RoomList
          rooms={concepts}
          onSelectRoom={handleSelectRoom}
          onViewDetail={(room) => setDetailModalRoom(room)}
          onOpenLightbox={handleOpenLightbox}
        />
        <Pricing onOpenBooking={handleOpenBooking} />
        <Amenities onOpenLightbox={handleOpenLightbox} />
        <BookingForm
          selectedRoomName={selectedRoomName}
          onSelectRoom={handleSelectRoom}
          onOpenLightbox={handleOpenLightbox}
          prefill={prefill}
        />
      </main>

      {/* Footer & Contact Section */}
      <Contact />

      {/* Fixed Widgets */}
      <FloatingContact />
      <BackToTop />

      {/* Lightbox Modal */}
      {lightboxData && (() => {
        const cur = lightboxData.items[lightboxData.index];
        const navBtn = (side) => ({
          position: 'absolute', top: '50%', [side]: '8px', transform: 'translateY(-50%)',
          color: '#ffffff', background: 'rgba(42, 29, 29,0.55)', borderRadius: '50%',
          width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        });
        return (
          <div
            className="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label="Xem ảnh"
            onClick={handleCloseLightbox}
            onTouchStart={(e) => { window.__lbX = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - window.__lbX;
              if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
            }}
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={handleCloseLightbox} aria-label="Đóng">
                <X size={32} />
              </button>
              {lightboxData.items.length > 1 && (
                <>
                  <button style={navBtn('left')} onClick={() => stepLightbox(-1)} aria-label="Ảnh trước"><ChevronLeft size={26} /></button>
                  <button style={navBtn('right')} onClick={() => stepLightbox(1)} aria-label="Ảnh sau"><ChevronRight size={26} /></button>
                </>
              )}
              <img src={cur.src} alt={cur.alt || 'RAW Baby Studio'} className="lightbox-img" />
              <div className="lightbox-caption">
                {lightboxData.index + 1} / {lightboxData.items.length}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Quick Room Detail Modal */}
      {detailModalRoom && (
        <div
          className="lightbox-backdrop"
          onClick={() => setDetailModalRoom(null)}
          style={{ padding: '20px', zIndex: 1100 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFCFB',
              color: '#2A1D1D',
              maxWidth: '650px',
              width: '100%',
              borderRadius: '20px',
              padding: '32px',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid #F5DADA',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={() => setDetailModalRoom(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                color: '#2A1D1D',
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
              }}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div style={{ height: '300px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px' }}>
              <img
                src={detailModalRoom.image}
                alt={detailModalRoom.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: detailModalRoom.imagePosition || 'center' }}
              />
            </div>

            {detailModalRoom.gallery.length > 1 && (
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                {detailModalRoom.gallery.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${detailModalRoom.name} ${i + 1}`}
                    loading="lazy"
                    onClick={() => handleOpenLightbox(detailModalRoom.gallery.map((g) => ({ src: g, alt: detailModalRoom.name })), i)}
                    style={{ flex: 1, minWidth: 0, height: '90px', objectFit: 'cover', objectPosition: 'center 25%', borderRadius: '8px', cursor: 'zoom-in' }}
                  />
                ))}
              </div>
            )}

            <div className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
              {detailModalRoom.badge}
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#2A1D1D', margin: '4px 0 14px 0', fontWeight: 700 }}>
              {detailModalRoom.name}
            </h3>
            <p style={{ color: '#7A5C5C', lineHeight: 1.7, marginBottom: '16px' }}>
              {detailModalRoom.fullDescription}
            </p>
            <ul style={{ margin: '0 0 24px 18px', color: '#7A5C5C', lineHeight: 1.8, fontSize: '0.92rem' }}>
              {detailModalRoom.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  const name = detailModalRoom.name;
                  setDetailModalRoom(null);
                  handleSelectRoom(name);
                }}
                className="btn-resort-primary"
                style={{ flexGrow: 1 }}
              >
                Chọn concept này
              </button>
              <button
                onClick={() => setDetailModalRoom(null)}
                style={{
                  padding: '10px 24px',
                  backgroundColor: 'transparent',
                  border: '1px solid #D7263D',
                  color: '#D7263D',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

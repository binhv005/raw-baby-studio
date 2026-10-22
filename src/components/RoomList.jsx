import React from 'react';
import { ArrowRight, ZoomIn } from 'lucide-react';
import AutoSlideshow from './AutoSlideshow';

export default function RoomList({ rooms, onSelectRoom, onViewDetail, onOpenLightbox }) {
  return (
    <section
      id="rooms"
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        padding: '30px 0 0 0',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Section Header */}
      <div className="container container-wide" style={{ marginBottom: '45px' }}>
        <div className="reveal reveal-up" style={{ textAlign: 'center' }}>
          <span className="tag-subtitle" style={{ color: 'var(--color-coral)' }}>
            DANH SÁCH CONCEPT
          </span>
          <h2
            style={{
              fontFamily: "'Dancing Script', 'Alex Brush', cursive",
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              color: 'var(--color-coral)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '8px',
            }}
          >
            Concept cho bé & gia đình
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Từ newborn, sinh nhật đến ảnh gia đình và cá nhân - chọn concept bạn yêu thích.
          </p>
        </div>
      </div>

      {/* Alternating full-width concept rows */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {rooms.map((room, index) => {
          const isImageLeft = index % 2 === 0;
          const rowBg = isImageLeft ? '#FDECEC' : '#F5DADA';

          return (
            <div
              key={room.id}
              className="reveal reveal-up"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
                backgroundColor: rowBg,
                overflow: 'hidden',
                width: '100%',
              }}
            >
              {/* Photo Block */}
              <div
                className={`reveal zoom-hover ${isImageLeft ? 'reveal-left' : 'reveal-right delay-150'}`}
                style={{
                  order: isImageLeft ? 1 : 2,
                  position: 'relative',
                  minHeight: '440px',
                  height: '100%',
                  backgroundColor: rowBg,
                }}
              >
                <AutoSlideshow images={room.gallery.map((src) => ({ src, pos: room.imagePosition }))} alt={room.name} interval={4800} startDelay={index * 900} defaultPos={room.imagePosition} />
                <button
                  onClick={() => onOpenLightbox(room.gallery.map((src) => ({ src, alt: room.name })), 0)}
                  aria-label={`Phóng to ảnh ${room.name}`}
                  style={{ position: 'absolute', right: '16px', bottom: '16px', width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(255, 252, 251,0.92)', color: 'var(--color-forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}
                >
                  <ZoomIn size={20} />
                </button>
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(255, 252, 251, 0.92)',
                    color: 'var(--color-forest)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    padding: '6px 14px',
                    textTransform: 'uppercase',
                  }}
                >
                  {room.badge}
                </div>
              </div>

              {/* Content Block */}
              <div
                className={`reveal ${isImageLeft ? 'reveal-right delay-150' : 'reveal-left'}`}
                style={{
                  order: isImageLeft ? 2 : 1,
                  padding: 'clamp(28px, 4vw, 56px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                    color: 'var(--color-forest-dark)',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    marginBottom: '12px',
                  }}
                >
                  {room.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.7,
                    marginBottom: '22px',
                    maxWidth: '460px',
                  }}
                >
                  {room.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <button
                    onClick={() => onViewDetail(room)}
                    className="btn-resort-outline"
                    style={{ borderRadius: 0, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.82rem' }}
                  >
                    <span>Khám phá</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    onClick={() => onSelectRoom(room.name)}
                    className="btn-resort-primary"
                    style={{ borderRadius: 0, fontSize: '0.82rem' }}
                  >
                    Chọn concept này
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

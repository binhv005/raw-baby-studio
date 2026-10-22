import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { contact } from '../data/studio';

export default function FloatingContact() {
  return (
    <aside
      aria-label="Liên hệ nhanh"
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '96px',
        zIndex: 800,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
      }}
    >
      {/* Call Button */}
      <div className="floating-item-wrapper" style={{ position: 'relative' }}>
        <a
          href={`tel:${contact.phoneTel}`}
          className="floating-btn"
          aria-label={`Gọi ${contact.brand}: ${contact.phoneDisplay}`}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            color: '#D7263D',
            border: '1px solid #F5DADA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(215, 38, 61, 0.25)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }}
        >
          <Phone size={21} />
        </a>
        <span className="floating-tooltip">{contact.phoneDisplay}</span>
      </div>

      {/* Messenger Button */}
      <div className="floating-item-wrapper" style={{ position: 'relative' }}>
        <a
          href={contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn messenger-btn"
          aria-label="Liên hệ RAW Baby Studio qua Facebook"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#D7263D',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(215, 38, 61, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }}
        >
          <MessageCircle size={22} />
        </a>
        <span className="floating-tooltip">Facebook RAW Baby Studio</span>
      </div>

      <style>{`
        .floating-btn:hover {
          transform: scale(1.12) translateY(-2px);
        }
        .floating-item-wrapper:hover .floating-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
        .floating-tooltip {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          background-color: rgba(15, 24, 32, 0.95);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.8rem;
          white-space: nowrap;
          border: 1px solid rgba(215, 38, 61, 0.3);
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        @media (max-width: 768px) {
          .floating-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}

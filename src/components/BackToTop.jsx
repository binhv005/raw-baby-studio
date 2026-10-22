import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Cuộn về đầu trang"
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '32px',
        zIndex: 800,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#D7263D',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-accent-gold)';
        e.currentTarget.style.color = '#B01E31';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#D7263D';
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}

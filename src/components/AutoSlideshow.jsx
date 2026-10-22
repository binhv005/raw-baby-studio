import React, { useEffect, useState } from 'react';

// Crossfading slideshow that fills its (position: relative) parent.
// images: [{ src, alt?, pos? }] or string[]
export default function AutoSlideshow({ images, alt = '', interval = 4500, startDelay = 0, eager = false, defaultPos = 'center 25%' }) {
  const list = images.map((i) => (typeof i === 'string' ? { src: i } : i));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (list.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => setIndex((i) => (i + 1) % list.length), interval);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list.length, interval, startDelay]);

  return (
    <div className="auto-slideshow" aria-label={alt}>
      {list.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={i === index ? img.alt || alt : ''}
          loading={eager && i === 0 ? 'eager' : 'lazy'}
          className={i === index ? 'is-active' : ''}
          style={{ objectPosition: img.pos || defaultPos }}
        />
      ))}
    </div>
  );
}

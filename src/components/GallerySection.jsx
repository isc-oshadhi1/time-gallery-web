import { useState, useEffect, useRef, useCallback } from 'react';
import MediaPlaceholder from './MediaPlaceholder';
import { GALLERY_IDS, ROW_HEIGHTS, TOTAL_CELLS, COLS } from './galleryOrder';
import './GallerySection.css';

const GALLERY_HEADING = '100% Positive google review';

const galleryGlob = import.meta.glob(
  '../assets/images/gallery/*.{jpg,jpeg,png,webp,gif}',
  { eager: true, import: 'default' }
);
const beforeAfterGlob = import.meta.glob(
  '../assets/images/before-after.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
);

const idToUrl = {};
for (const [path, url] of Object.entries(galleryGlob)) {
  const fname = path.split('/').pop();
  if (fname.startsWith('38f31d_')) {
    const id8 = fname.slice(7, 15);
    if (!idToUrl[id8]) idToUrl[id8] = url;
  }
}

const beforeAfterUrl = Object.values(beforeAfterGlob)[0] || null;
const watch2Url = Object.entries(galleryGlob).find(([p]) => p.includes('watch2'))?.[1] || null;
const watch1Url = Object.entries(galleryGlob).find(([p]) => p.includes('watch1'))?.[1] || null;

function buildGalleryData() {
  const cells = [];

  if (beforeAfterUrl) {
    cells.push({ src: beforeAfterUrl, alt: 'Watch repair work, photo 1' });
  } else {
    console.warn('[Gallery] Missing: before-after.jpeg');
    cells.push({ src: null, alt: 'Watch repair work, photo 1' });
  }

  GALLERY_IDS.forEach((id8, i) => {
    const url = idToUrl[id8];
    if (!url) {
      console.warn(`[Gallery] Missing: 38f31d_${id8}*`);
    }
    cells.push({ src: url || null, alt: `Watch repair work, photo ${i + 2}` });
  });

  if (watch2Url) {
    cells.push({ src: watch2Url, alt: 'Watch repair work, photo 53' });
  } else {
    console.warn('[Gallery] Missing: watch2.*');
    cells.push({ src: null, alt: 'Watch repair work, photo 53' });
  }

  if (watch1Url) {
    cells.push({ src: watch1Url, alt: 'Watch repair work, photo 54' });
  } else {
    console.warn('[Gallery] Missing: watch1.*');
    cells.push({ src: null, alt: 'Watch repair work, photo 54' });
  }

  return cells;
}

const galleryData = buildGalleryData();

function GalleryCell({ cell, index, onClick }) {
  const row = Math.floor(index / COLS);
  const height = ROW_HEIGHTS[row] || 306;

  return (
    <div
      className="gallery-cell"
      style={{ height: `${height}px` }}
    >
      {cell.src ? (
        <button
          type="button"
          className="gallery-cell-btn"
          onClick={() => onClick(index)}
          aria-label={`View ${cell.alt}`}
        >
          <img
            src={cell.src}
            alt={cell.alt}
            className="gallery-img"
            loading="lazy"
            decoding="async"
            width="316"
            height={height}
          />
        </button>
      ) : (
        <MediaPlaceholder
          type="image"
          label={`Gallery photo ${index + 1}`}
          className="gallery-placeholder"
        />
      )}
    </div>
  );
}

function Lightbox({ cells, currentIndex, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  // Lock body scroll and set focus
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Keyboard support
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  const cell = cells[currentIndex];
  if (!cell) return null;

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery lightbox"
      ref={dialogRef}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="lightbox-content">
        <button
          ref={closeRef}
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ✕
        </button>

        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={onPrev}
          aria-label="Previous photo"
        >
          ‹
        </button>

        <img
          src={cell.src}
          alt={cell.alt}
          className="lightbox-img"
        />

        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={onNext}
          aria-label="Next photo"
        >
          ›
        </button>

        <div className="lightbox-counter" aria-live="polite">
          {currentIndex + 1} / {TOTAL_CELLS}
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const triggerRef = useRef(null);

  const openLightbox = useCallback((index) => {
    triggerRef.current = document.activeElement;
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
    // Return focus to the clicked photo
    triggerRef.current?.focus();
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i <= 0 ? TOTAL_CELLS - 1 : i - 1));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i >= TOTAL_CELLS - 1 ? 0 : i + 1));
  }, []);

  return (
    <section className="gallery-section" aria-label="Photo Gallery">
      <h2 className="gallery-heading">{GALLERY_HEADING}</h2>
      <div className="gallery-grid">
        {galleryData.map((cell, i) => (
          <GalleryCell
            key={i}
            cell={cell}
            index={i}
            onClick={openLightbox}
          />
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          cells={galleryData}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}

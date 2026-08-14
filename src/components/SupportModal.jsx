import React, { useEffect, useRef, useCallback } from 'react';
import './SupportModal.css';

/* ────────────────────────────────────────────────────────────
   SupportModal
   Controlled modal — parent owns open state via `isOpen` / `onClose`.
   Renders the "why donate" explainer before handing off to PayPal.
   ──────────────────────────────────────────────────────────── */

const DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=Z86UAVMGDG98Q';

const impactPoints = [
  'Hardware components and drivetrain, sensor, and electronics parts for the competition robot',
  'Raw materials for rapid prototyping — stock metal, 3D printing filament, and fasteners',
  'Competition registration and event travel fees',
  'Free STEM and community outreach workshops for local students',
];

export default function SupportModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="support-modal__backdrop"
      onMouseDown={handleBackdropClick}
      role="presentation"
    >
      <div
        className="support-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-modal-title"
        ref={dialogRef}
      >
        <button
          type="button"
          className="support-modal__close"
          onClick={onClose}
          aria-label="Close"
          ref={closeButtonRef}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <span className="support-modal__eyebrow">TEAM 30473 DUCK</span>
        <h2 id="support-modal-title" className="support-modal__title">
          Support Duck FTC
        </h2>

        <div className="support-modal__section">
          <h3 className="support-modal__section-title">Why Donate</h3>
          <p className="support-modal__body">
            Every contribution goes directly back into the team. Your support funds:
          </p>
          <ul className="support-modal__list">
            {impactPoints.map((point) => (
              <li className="support-modal__list-item" key={point}>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="support-modal__actions">
          <a
            className="support-modal__btn support-modal__btn--primary"
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            Proceed to PayPal
          </a>
          <button
            type="button"
            className="support-modal__btn support-modal__btn--secondary"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
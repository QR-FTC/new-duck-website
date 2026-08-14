import React, { useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './SupportModal.css';

/* ────────────────────────────────────────────────────────────
   SupportModal
   Controlled modal — parent owns open state via `isOpen` / `onClose`.
   Renders a split UX for Corporate Sponsors vs Individual Donors.
   ──────────────────────────────────────────────────────────── */

const DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=Z86UAVMGDG98Q';

export default function SupportModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Close when clicking the dark overlay backdrop
  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  // Manage body scroll and Escape key closing
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

        <div className="support-modal__header">
          <span className="support-modal__eyebrow">TEAM 30473 DUCK</span>
          <h2 id="support-modal-title" className="support-modal__title">
            Support Duck FTC
          </h2>
          <p className="support-modal__subtitle">
            Every championship robot is backed by a great flock. Choose how you would like to help us build, code, and compete this season.
          </p>
        </div>

        <div className="support-modal__split-grid">
          
          {/* === Option 1: Corporate Sponsorship === */}
          <Link 
            to="/sponsors" 
            className="support-modal__card support-modal__card--sponsor" 
            onClick={onClose}
          >
            <div className="support-modal__card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="support-modal__card-title">Corporate Sponsorship</h3>
            <p className="support-modal__card-desc">
              Partner with us. View our Platinum and Gold sponsorship tiers for branding placement, tax benefits, and community ROI.
            </p>
            <span className="support-modal__card-cta support-modal__cta--yellow">
              View Tiers &rarr;
            </span>
          </Link>

          {/* === Option 2: Individual Donation === */}
          <a 
            href={DONATE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="support-modal__card support-modal__card--donate" 
            onClick={onClose}
          >
            <div className="support-modal__card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 className="support-modal__card-title">Individual Donation</h3>
            <p className="support-modal__card-desc">
              Make a direct contribution to instantly fund robot hardware, 3D printing filament, and local STEM outreach workshops.
            </p>
            <span className="support-modal__card-cta support-modal__cta--platinum">
              Donate via PayPal &rarr;
            </span>
          </a>

        </div>
      </div>
    </div>
  );
}
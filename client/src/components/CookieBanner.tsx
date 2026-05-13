import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('yumia_cookie_consent')) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem('yumia_cookie_consent', 'true');
    setVisible(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#07070E',
        borderTop: '1px solid #1C1C32',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <p
        style={{
          color: '#D8D4CC',
          fontSize: '0.875rem',
          margin: 0,
          maxWidth: '600px',
          lineHeight: 1.5,
        }}
      >
        Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.
      </p>
      <button
        onClick={handleAccept}
        style={{
          background: '#C9A96E',
          color: '#07070E',
          border: 'none',
          padding: '0.6rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: 600,
          fontSize: '0.875rem',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'opacity 150ms',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
      >
        Aceitar
      </button>
    </div>
  );
}
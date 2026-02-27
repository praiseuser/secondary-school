import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import TopBar from '../../components/TopBar';
import BottomNav from '../../components/BottomNav';
import MobileDrawer from '../../components/MobileDrawer';
import { socials } from '../navbarData';

const keyframes = `
  @keyframes nb_slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to   { transform: translateY(0);     opacity: 1; }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topBarH, setTopBarH]       = useState(0);   // measured in px
  const [bottomNavH, setBottomNavH] = useState(0);   // measured in px
  const topBarRef    = useRef(null);
  const bottomNavRef = useRef(null);

  // ── Measure real heights after mount
  useEffect(() => {
    const measure = () => {
      if (topBarRef.current)    setTopBarH(topBarRef.current.offsetHeight);
      if (bottomNavRef.current) setBottomNavH(bottomNavRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // ── Hide TopBar after scrolling past its own height
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > topBarH);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [topBarH]);

  return (
    <>
      <style>{keyframes}</style>

      {/* ══════════════════════════════════════
          TOP BAR — fixed, slides up on scroll
          ══════════════════════════════════════ */}
      <Box
        ref={topBarRef}
        sx={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1201,
          transform: {
            xs: 'translateY(0)',
            md: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          },
          opacity: {
            xs: 1,
            md: scrolled ? 0 : 1,
          },
          transition: 'transform 0.38s ease, opacity 0.38s ease',
          // keep it clickable on mobile even when "hidden" on desktop
          pointerEvents: { xs: 'auto', md: scrolled ? 'none' : 'auto' },
        }}
      >
        <TopBar socials={socials} onMobileOpen={() => setMobileOpen(true)} />
      </Box>

      {/* ══════════════════════════════════════
          BOTTOM NAV — always visible, fixed
          Sits right below TopBar when not scrolled,
          moves to top:0 when TopBar hides
          ══════════════════════════════════════ */}
      <Box
        ref={bottomNavRef}
        sx={{
          position: 'fixed',
          // key: use measured topBarH so it always sits flush below TopBar
          top: {
            xs: topBarH,                              // mobile: always below topbar
            md: scrolled ? 0 : topBarH,              // desktop: 0 when scrolled, below topbar otherwise
          },
          left: 0, right: 0,
          zIndex: 1200,
          transition: 'top 0.38s ease, box-shadow 0.3s ease',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.35)'
            : '0 2px 12px rgba(0,0,0,0.12)',
          animation: scrolled ? 'nb_slideDown 0.35s ease both' : 'none',
        }}
      >
        <BottomNav />
      </Box>

      {/* ══════════════════════════════════════
          SPACER — exact total height of both bars
          so page content starts below them
          ══════════════════════════════════════ */}
      <Box sx={{ height: topBarH + bottomNavH }} />

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        socials={socials}
      />
    </>
  );
};

export default Navbar;
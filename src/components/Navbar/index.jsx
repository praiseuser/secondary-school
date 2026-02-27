import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import TopBar from '../../components/Topbar';
import BottomNav from '../../components/Bottomnav';
import MobileDrawer from '../../components/Mobiledrawer';
import { socials } from '../../components/navbarData';


const keyframes = `
  @keyframes nb_slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to   { transform: translateY(0);     opacity: 1; }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topBarH, setTopBarH] = useState(0);
  const [bottomNavH, setBottomNavH] = useState(0);
  const topBarRef = useRef(null);
  const bottomNavRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      if (topBarRef.current) setTopBarH(topBarRef.current.offsetHeight);
      if (bottomNavRef.current) setBottomNavH(bottomNavRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > topBarH);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [topBarH]);

  return (
    <>
      <style>{keyframes}</style>

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
          pointerEvents: { xs: 'auto', md: scrolled ? 'none' : 'auto' },
        }}
      >
        <TopBar socials={socials} onMobileOpen={() => setMobileOpen(true)} />
      </Box>
      <Box
        ref={bottomNavRef}
        sx={{
          position: 'fixed',
          top: {
            xs: topBarH,
            md: scrolled ? 0 : topBarH,
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
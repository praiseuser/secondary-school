import { useState, useRef, useEffect } from 'react';
import { Box, Container, Stack, Typography, InputBase, Modal } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mainNavLinks } from '../navbarData';
import DropdownMenu from '../DropdownMenu';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes bn_dot      { 0%,100% { box-shadow:0 0 0 0 rgba(212,160,23,.6); } 50% { box-shadow:0 0 0 5px rgba(212,160,23,0); } }

  @keyframes bn_backdropIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes bn_modalIn {
    from { opacity: 0; transform: translateY(-32px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0)     scale(1);    }
  }
  @keyframes bn_modalOut {
    from { opacity: 1; transform: translateY(0)     scale(1);    }
    to   { opacity: 0; transform: translateY(-16px) scale(0.97); }
  }
  @keyframes bn_resultIn {
    from { opacity: 0; transform: translateX(-10px); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  @keyframes bn_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
  @keyframes bn_pulse {
    0%, 100% { opacity: 0.5; transform: scale(1);    }
    50%       { opacity: 1;   transform: scale(1.08); }
  }
`;

const searchIndex = mainNavLinks.flatMap((link) => [
  { label: link.label, path: link.path, category: 'Pages' },
  ...(link.dropdown || []).map((sub) => ({ label: sub.label, path: sub.path, category: link.label })),
]);

const BottomNav = () => {
  const location  = useLocation();
  const navigate  = useNavigate();
  const inputRef  = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen]         = useState(false);
  const [query, setQuery]                   = useState('');

  const results = query.trim()
    ? searchIndex.filter((i) =>
        i.label.toLowerCase().includes(query.toLowerCase()) ||
        i.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => { setSearchOpen(false); setQuery(''); }, [location.pathname]);
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') { setSearchOpen(false); setQuery(''); } };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  const openSearch  = () => { setSearchOpen(true); setTimeout(() => inputRef.current?.focus(), 120); };
  const closeSearch = () => { setSearchOpen(false); setQuery(''); };
  const goTo = (path) => { navigate(path); closeSearch(); };

  return (
    <>
      <style>{keyframes}</style>

      {/* ── Desktop nav bar ── */}
      <Box
        sx={{
          bgcolor: colors.primary.main,
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          '&::after': {
            content: '""', position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`,
            backgroundSize: '400px 100%',
            animation: 'bn_shimmer 4s linear infinite',
          },
        }}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" justifyContent="space-between">

            {/* Nav links */}
            <Stack direction="row" alignItems="stretch">
              {mainNavLinks.map((link) => {
                const isActive = location.pathname === link.path || location.pathname.startsWith(link.path + '/');
                const isOpen   = activeDropdown === link.label;
                return (
                  <Box key={link.label} onMouseEnter={() => setActiveDropdown(link.dropdown ? link.label : null)} sx={{ position: 'relative' }}>
                    <Box component={Link} to={link.path} onClick={() => setActiveDropdown(null)} sx={{ display: 'flex', alignItems: 'center', gap: 0.3, px: 1.6, py: 2.2, textDecoration: 'none', cursor: 'pointer', position: 'relative', transition: 'all 0.2s ease', '&::after': { content: '""', position: 'absolute', bottom: 0, left: '12%', right: '12%', height: 2, bgcolor: colors.secondary.main, borderRadius: '2px 2px 0 0', transform: isActive || isOpen ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 0.22s ease', transformOrigin: 'center' }, '&:hover::after': { transform: 'scaleX(1)' } }}>
                      <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: link.highlight ? typography.fontWeight.bold : isActive ? typography.fontWeight.semiBold : typography.fontWeight.regular, color: link.highlight ? colors.secondary.light : isActive || isOpen ? colors.text.light : 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap', transition: 'color 0.2s ease' }}>
                        {link.label}
                      </Typography>
                      {link.highlight && <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: colors.secondary.main, animation: 'bn_dot 1.8s ease infinite', ml: 0.4 }} />}
                      {link.dropdown && <KeyboardArrowDownIcon sx={{ fontSize: 13, color: isOpen ? colors.secondary.main : 'rgba(255,255,255,0.35)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'all 0.22s ease', ml: 0.1 }} />}
                    </Box>
                  </Box>
                );
              })}
            </Stack>

            {/* Search button */}
            <Box onClick={openSearch} sx={{ display: 'flex', alignItems: 'center', px: 1.2, py: 0.8, borderRadius: '8px', cursor: 'pointer', border: `1px solid rgba(255,255,255,0.1)`, transition: 'all 0.22s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.07)', borderColor: `${colors.secondary.main}66`, '& .search-icon': { color: colors.secondary.main } } }}>
              <SearchIcon className="search-icon" sx={{ fontSize: 25, color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s ease' }} />
            </Box>
          </Stack>
        </Container>

        {/* Dropdown menus */}
        {mainNavLinks.map((link) =>
          link.dropdown ? <DropdownMenu key={link.label} items={link.dropdown} label={link.label} visible={activeDropdown === link.label} onClose={() => setActiveDropdown(null)} /> : null
        )}
      </Box>

      {/* ── Search Modal ── */}
      <Modal open={searchOpen} onClose={closeSearch} sx={{ zIndex: 1500 }} disableAutoFocus>
        <Box
          onClick={closeSearch}
          sx={{
            position: 'fixed', inset: 0,
            // Theme-based backdrop: deep navy with gold shimmer hint
            background: `linear-gradient(135deg, ${colors.primary.dark}55 0%, ${colors.primary.main}44 50%, ${colors.primary.dark}55 100%)`,
            backdropFilter: 'blur(3px)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            pt: { xs: 10, md: 13 },
            px: 2,
            animation: 'bn_backdropIn 0.2s ease both',
            // Subtle dot pattern overlay
            '&::before': {
              content: '""', position: 'absolute', inset: 0,
              backgroundImage: `radial-gradient(${colors.secondary.main}08 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
              pointerEvents: 'none',
            },
            // Gold shimmer top line
            '&::after': {
              content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`,
              backgroundSize: '400px 100%',
              animation: 'bn_shimmer 3s linear infinite',
              pointerEvents: 'none',
            },
          }}
        >
          {/* Modal card */}
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              width: '100%', maxWidth: 640,
              bgcolor: colors.primary.dark,
              borderRadius: '20px',
              overflow: 'hidden',
              border: `1px solid ${colors.secondary.main}44`,
              boxShadow: `0 0 0 1px ${colors.secondary.main}22, 0 40px 80px rgba(0,0,0,0.5), 0 0 60px ${colors.primary.dark}80`,
              animation: 'bn_modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Gold top bar on modal */}
            <Box sx={{ height: 2, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`, backgroundSize: '400px 100%', animation: 'bn_shimmer 3s linear infinite' }} />

            {/* Search input row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2.5, py: 2.2, borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
              <SearchIcon sx={{ color: colors.secondary.main, fontSize: 22, flexShrink: 0, animation: 'bn_pulse 2s ease infinite' }} />
              <InputBase
                inputRef={inputRef}
                placeholder="Search pages, sections..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
                sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.light, '& input::placeholder': { color: 'rgba(255,255,255,0.2)', opacity: 1 } }}
              />
              {query
                ? <Box onClick={() => setQuery('')} sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s', '&:hover': { bgcolor: colors.secondary.dark, transform: 'scale(1.1)' } }}>
                    <CloseIcon sx={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }} />
                  </Box>
                : <Box onClick={closeSearch} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 1.2, py: 0.5, borderRadius: '6px', border: `1px solid rgba(255,255,255,0.1)`, cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s', '&:hover': { borderColor: colors.secondary.main + '66', bgcolor: 'rgba(255,255,255,0.05)' } }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: 0.5 }}>ESC</Typography>
                  </Box>
              }
            </Box>

            {/* Results */}
            {results.length > 0 && (
              <Box sx={{ maxHeight: 360, overflowY: 'auto', '&::-webkit-scrollbar': { width: 3 }, '&::-webkit-scrollbar-thumb': { bgcolor: colors.secondary.main + '44', borderRadius: 2 } }}>
                {results.map((item, i) => (
                  <Box key={item.path} onClick={() => goTo(item.path)}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, py: 1.8, cursor: 'pointer', borderBottom: i < results.length - 1 ? `1px solid rgba(255,255,255,0.04)` : 'none', transition: 'all 0.15s ease', animation: `bn_resultIn 0.25s ease ${i * 0.05}s both`,
                      '&:hover': { bgcolor: `${colors.secondary.main}10`, '& .arr': { opacity: 1, transform: 'translateX(0)' }, '& .lbl': { color: colors.secondary.main } }
                    }}
                  >
                    <Stack direction="row" alignItems="center" gap={2}>
                      <Box sx={{ bgcolor: `${colors.secondary.main}15`, border: `1px solid ${colors.secondary.main}33`, px: 1.2, py: 0.3, borderRadius: '4px', flexShrink: 0 }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.58rem', fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 1.2, textTransform: 'uppercase' }}>{item.category}</Typography>
                      </Box>
                      <Typography className="lbl" sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: 'rgba(255,255,255,0.8)', transition: 'color 0.15s ease' }}>{item.label}</Typography>
                    </Stack>
                    <ArrowForwardIcon className="arr" sx={{ fontSize: 14, color: colors.secondary.main, opacity: 0, transform: 'translateX(-8px)', transition: 'all 0.2s ease', flexShrink: 0 }} />
                  </Box>
                ))}
              </Box>
            )}

            {/* Quick links — shown when no query */}
            {!query.trim() && (
              <Box sx={{ px: 2.5, py: 3 }}>
                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                  <Box sx={{ width: 20, height: 1, bgcolor: colors.secondary.main, opacity: 0.4 }} />
                  <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.6 }}>Quick Links</Typography>
                  <Box sx={{ flex: 1, height: 1, bgcolor: colors.secondary.main, opacity: 0.1 }} />
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {mainNavLinks.map((link, i) => (
                    <Box key={link.path} onClick={() => goTo(link.path)}
                      sx={{ px: 2, py: 0.9, borderRadius: '8px', border: `1px solid rgba(255,255,255,0.08)`, cursor: 'pointer', transition: 'all 0.2s ease', animation: `bn_resultIn 0.3s ease ${i * 0.06}s both`,
                        '&:hover': { bgcolor: `${colors.secondary.main}15`, borderColor: colors.secondary.main + '55', transform: 'translateY(-2px)', '& .ql': { color: colors.secondary.main } }
                      }}
                    >
                      <Typography className="ql" sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s ease' }}>{link.label}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            {/* No results */}
            {query.trim() && !results.length && (
              <Box sx={{ px: 2.5, py: 4, textAlign: 'center' }}>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.2)' }}>
                  No results for "<Box component="span" sx={{ color: colors.secondary.main }}>{query}</Box>"
                </Typography>
              </Box>
            )}

            {/* Footer */}
            <Box sx={{ px: 2.5, py: 1.5, borderTop: `1px solid rgba(255,255,255,0.04)`, display: 'flex', gap: 3 }}>
              <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', color: 'rgba(255,255,255,0.18)', letterSpacing: 0.5 }}>↵ to navigate</Typography>
              <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', color: 'rgba(255,255,255,0.18)', letterSpacing: 0.5 }}>ESC to close</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BottomNav;
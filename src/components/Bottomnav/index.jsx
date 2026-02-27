import { useState } from 'react';
import { Box, Container, Stack, Typography, IconButton, Collapse, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Link, useLocation } from 'react-router-dom';
import { mainNavLinks } from '../navbarData';
import DropdownMenu from '../DropdownMenu';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes bn_searchIn {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bn_dotPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,160,23,0.6); }
    50%       { box-shadow: 0 0 0 5px rgba(212,160,23,0); }
  }
  @keyframes bn_underlineIn {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
`;

const BottomNav = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <>
      <style>{keyframes}</style>
      <Box
        sx={{
          bgcolor: colors.primary.main,
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          // Bottom gold line
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`,
          },
        }}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" justifyContent="space-between">

            {/* ── Nav links */}
            <Stack direction="row" alignItems="stretch">
              {mainNavLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const hasDropdown = link.dropdown?.length > 0;
                const isOpen = activeDropdown === link.label;

                return (
                  <Box
                    key={link.label}
                    onMouseEnter={() => setActiveDropdown(hasDropdown ? link.label : null)}
                    sx={{ position: 'relative' }}
                  >
                    <Box
                      component={Link}
                      to={link.path}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.4,
                        px: 1.8,
                        py: 2.4,
                        textDecoration: 'none',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'all 0.22s ease',

                        // Active indicator bar at bottom
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0, left: '15%', right: '15%',
                          height: 2,
                          bgcolor: colors.secondary.main,
                          borderRadius: '2px 2px 0 0',
                          transform: isActive || isOpen ? 'scaleX(1)' : 'scaleX(0)',
                          transition: 'transform 0.25s ease',
                          transformOrigin: 'center',
                        },
                        '&:hover::after': { transform: 'scaleX(1)' },
                      }}
                    >
                      {/* Link text */}
                      <Typography
                        sx={{
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.sm,
                          fontWeight: link.highlight
                            ? typography.fontWeight.bold
                            : isActive
                              ? typography.fontWeight.semiBold
                              : typography.fontWeight.regular,
                          color: link.highlight
                            ? colors.secondary.light
                            : isActive || isOpen
                              ? colors.text.light
                              : 'rgba(255,255,255,0.72)',
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.01em',
                          lineHeight: 1,
                          transition: 'color 0.22s ease',
                        }}
                      >
                        {link.label}
                      </Typography>

                      {/* Highlight fire icon + pulsing dot */}
                      {link.highlight && (
                        <Box
                          sx={{
                            width: 6, height: 6,
                            borderRadius: '50%',
                            bgcolor: colors.secondary.main,
                            animation: 'bn_dotPulse 1.8s ease infinite',
                            flexShrink: 0,
                            ml: 0.3,
                          }}
                        />
                      )}

                      {/* Dropdown chevron */}
                      {hasDropdown && (
                        <KeyboardArrowDownIcon sx={{
                          fontSize: 14,
                          color: isOpen ? colors.secondary.main : 'rgba(255,255,255,0.45)',
                          transition: 'transform 0.25s ease, color 0.22s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                          ml: 0.2,
                        }} />
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Stack>

            {/* ── Right side: Search */}
            <Stack direction="row" alignItems="center" gap={1}>

              {/* Search toggle */}
              <Box
                onClick={() => { setSearchOpen(!searchOpen); setSearchVal(''); }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.8, py: 1,
                  borderRadius: '6px',
                  border: `1px solid rgba(255,255,255,0.1)`,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.07)',
                    borderColor: colors.secondary.main + '55',
                  },
                  ...(searchOpen && {
                    bgcolor: `${colors.primary.dark}88`,
                    borderColor: colors.secondary.main + '55',
                  }),
                }}
              >
                {searchOpen
                  ? <CloseIcon sx={{ fontSize: 15, color: colors.secondary.main }} />
                  : <SearchIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.6)' }} />
                }
                <Typography sx={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.xs,
                  fontWeight: typography.fontWeight.medium,
                  color: searchOpen ? colors.secondary.main : 'rgba(255,255,255,0.5)',
                  transition: 'color 0.2s ease',
                }}>
                  {searchOpen ? 'Close' : 'Search'}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          {/* ── Search Bar — slides down */}
          <Collapse in={searchOpen}>
            <Box
              sx={{
                py: 2.5,
                borderTop: `1px solid rgba(255,255,255,0.08)`,
                animation: searchOpen ? 'bn_searchIn 0.3s ease both' : 'none',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: 560,
                  mx: 'auto',
                  bgcolor: colors.primary.dark,
                  border: `1px solid ${colors.secondary.main}44`,
                  borderRadius: '10px',
                  px: 2.5,
                  py: 1.2,
                  gap: 1.5,
                  boxShadow: `0 0 0 4px ${colors.secondary.main}10`,
                  transition: 'box-shadow 0.3s ease',
                  '&:focus-within': {
                    boxShadow: `0 0 0 4px ${colors.secondary.main}25`,
                    borderColor: colors.secondary.main,
                  },
                }}
              >
                <SearchIcon sx={{ color: colors.secondary.main, fontSize: 18, flexShrink: 0 }} />
                <InputBase
                  placeholder="Search the school website..."
                  autoFocus
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  fullWidth
                  sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.sm,
                    color: colors.text.light,
                    '& input::placeholder': {
                      color: 'rgba(255,255,255,0.28)',
                      opacity: 1,
                    },
                  }}
                />
                {searchVal && (
                  <Box
                    onClick={() => setSearchVal('')}
                    sx={{
                      width: 20, height: 20,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                    }}
                  >
                    <CloseIcon sx={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }} />
                  </Box>
                )}
              </Box>
            </Box>
          </Collapse>
        </Container>

        {/* ── Dropdowns */}
        {mainNavLinks.map((link) =>
          link.dropdown ? (
            <DropdownMenu
              key={link.label}
              items={link.dropdown}
              label={link.label}
              visible={activeDropdown === link.label}
            />
          ) : null
        )}
      </Box>
    </>
  );
};

export default BottomNav;
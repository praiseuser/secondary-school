import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';   // ← added
import { colors, typography } from '../../../theme';

// ── Keyframes
const keyframes = `
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes revealLine {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes floatBadge {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-8px); }
  }
`;

const highlights = [
  'Cambridge & WAEC Accredited Curriculum',
  'World-class Science & Technology Labs',
  'Award-winning Sports Programme',
  'Safe, Inclusive & Inspiring Campus',
];

const WelcomeSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();   // ← added

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{keyframes}</style>

      <Box
        ref={ref}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          bgcolor: colors.primary.dark,
        }}
      >
        {/* BIG FADED BACKGROUND TEXT */}
        <Typography
          sx={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: typography.fontFamily.accent,
            fontSize: { xs: '12rem', md: '20rem' },
            fontWeight: typography.fontWeight.black,
            color: colors.primary.light,
            opacity: 0.04,
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0, lineHeight: 1,
          }}
        >
          PRESTON
        </Typography>

        {/* LAYOUT */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: { xs: 'auto', md: '85vh' },
            position: 'relative', zIndex: 1,
          }}
        >
          {/* LEFT — IMAGE PANEL */}
          <Box
            sx={{
              flex: { xs: 'none', md: '0 0 48%' },
              position: 'relative',
              minHeight: { xs: 360, md: 'auto' },
              overflow: 'hidden',
              animation: visible ? 'slideInLeft 0.9s ease both' : 'none',
            }}
          >
            <Box
              component="img"
              src="/welcome.jpg"
              alt="Preston students"
              sx={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                display: 'block',
                transition: 'transform 6s ease',
                '&:hover': { transform: 'scale(1.04)' },
              }}
            />

            {/* Dark overlay */}
            <Box
              sx={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(135deg, ${colors.primary.dark}BB 0%, transparent 60%, ${colors.primary.dark}77 100%)`,
              }}
            />

            {/* Diagonal clip */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                top: 0, right: -1, bottom: 0, width: 80,
                background: colors.primary.dark,
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                zIndex: 2,
              }}
            />

            {/* Floating badge */}
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 20, md: 48 },
                left: { xs: 20, md: 40 },
                zIndex: 3,
                animation: 'floatBadge 4s ease-in-out infinite',
              }}
            >
              <Box
                sx={{
                  bgcolor: colors.secondary.main,
                  borderRadius: '12px',
                  px: 3, py: 2.5,
                  boxShadow: `0 12px 40px rgba(212,160,23,0.4)`,
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '2.2rem', fontWeight: typography.fontWeight.extraBold, color: colors.primary.dark, lineHeight: 1 }}>
                  25+
                </Typography>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, letterSpacing: 1.5, mt: 0.4 }}>
                  YEARS STRONG
                </Typography>
              </Box>
            </Box>

            {/* Quote tag */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 20, md: 40 },
                right: { xs: 20, md: 60 },
                zIndex: 3,
                bgcolor: 'rgba(10,20,50,0.75)',
                backdropFilter: 'blur(8px)',
                border: `1px solid ${colors.secondary.main}55`,
                borderLeft: `3px solid ${colors.secondary.main}`,
                px: 2, py: 1.2,
                borderRadius: '0 8px 8px 0',
              }}
            >
              <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold, color: colors.secondary.light, letterSpacing: 1 }}>
                "Excellence is our Standard"
              </Typography>
            </Box>
          </Box>

          {/* RIGHT — TEXT PANEL */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              px: { xs: 3, sm: 5, md: 7, lg: 10 },
              py: { xs: 7, md: 10 },
              animation: visible ? 'slideInRight 0.9s ease 0.2s both' : 'none',
            }}
          >
            <Box sx={{ maxWidth: 540 }}>

              {/* Section label */}
              <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2.5 }}>
                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                  Who We Are
                </Typography>
              </Stack>

              {/* Heading */}
              <Typography
                sx={{
                  fontFamily: typography.fontFamily.accent,
                  fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' },
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text.light,
                  lineHeight: 1.2, mb: 1,
                  animation: visible ? 'slideInUp 0.7s ease 0.35s both' : 'none',
                }}
              >
                A Legacy Built on
              </Typography>

              {/* Gold underlined word */}
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily.accent,
                    fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' },
                    fontWeight: typography.fontWeight.bold,
                    color: colors.secondary.main, lineHeight: 1.2,
                  }}
                >
                  Excellence & Purpose.
                </Typography>
                <Box
                  sx={{
                    position: 'absolute', bottom: -4, left: 0,
                    height: 3, bgcolor: colors.secondary.main, borderRadius: 2,
                    animation: visible ? 'revealLine 0.8s ease 0.7s both' : 'none',
                    width: visible ? '100%' : 0,
                  }}
                />
              </Box>

              {/* Body text */}
              <Typography
                sx={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.base,
                  fontWeight: typography.fontWeight.regular,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.9, mb: 4,
                  animation: visible ? 'slideInUp 0.7s ease 0.5s both' : 'none',
                }}
              >
                Preston International School is more than a classroom —
                it is a community forged in discipline, driven by ambition,
                and rooted in the rich spirit of Nigerian excellence.
                For over two decades, we have shaped confident, capable leaders.
              </Typography>

              {/* Highlights */}
              <Box sx={{ mb: 4.5, animation: visible ? 'slideInUp 0.7s ease 0.6s both' : 'none' }}>
                {highlights.map((item, i) => (
                  <Box
                    key={item}
                    sx={{
                      display: 'flex', alignItems: 'center', gap: 1.5,
                      py: 1.1,
                      borderBottom: i < highlights.length - 1 ? `1px solid rgba(255,255,255,0.06)` : 'none',
                    }}
                  >
                    <CheckCircleIcon sx={{ color: colors.secondary.main, fontSize: 18, flexShrink: 0 }} />
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: 'rgba(255,255,255,0.75)' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* CTA — ← navigates to /about/history */}
              <Box sx={{ animation: visible ? 'slideInUp 0.7s ease 0.75s both' : 'none' }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate('/about/history')}
                  sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.semiBold,
                    bgcolor: colors.secondary.main,
                    color: colors.primary.dark,
                    px: 3.5, py: 1.5,
                    borderRadius: '6px',
                    textTransform: 'none',
                    boxShadow: `0 4px 20px rgba(212,160,23,0.3)`,
                    transition: 'all 0.25s ease',
                    '& .MuiButton-endIcon': { transition: 'transform 0.25s ease' },
                    '&:hover': {
                      bgcolor: colors.secondary.light,
                      boxShadow: `0 8px 28px rgba(212,160,23,0.45)`,
                      transform: 'translateY(-2px)',
                    },
                    '&:hover .MuiButton-endIcon': { transform: 'translateX(5px)' },
                  }}
                >
                  Read Our Full Story
                </Button>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WelcomeSection;
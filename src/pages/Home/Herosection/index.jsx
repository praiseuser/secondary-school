import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { colors, typography } from '../../../theme';

const slides = [
  {
    src: '/image.jpg',
    tag: 'Welcome to Preston',
    heading: 'Shaping Leaders\nof Tomorrow',
    sub: 'A world-class secondary school committed to academic excellence, character, and purpose.',
  },
  {
    src: '/image1.jpg',
    tag: 'Academic Excellence',
    heading: 'Where Knowledge\nMeets Ambition',
    sub: 'Our curriculum nurtures critical thinking, creativity, and a passion for lifelong learning.',
  },
  {
    src: '/image2.jpg',
    tag: 'Beyond the Classroom',
    heading: 'Grow Beyond\nEvery Boundary',
    sub: 'Sports, arts, clubs and culture — we build well-rounded students ready for the world.',
  },
  {
    src: '/image3.jpg',
    tag: 'Our Community',
    heading: 'Together We\nBuild Greatness',
    sub: 'A thriving community of students, teachers and families united by one vision — excellence.',
  },
];

// ── CSS keyframes injected once
const keyframes = `
  @keyframes kenBurns {
    0%   { transform: scale(1)    translateX(0px); }
    50%  { transform: scale(1.08) translateX(-12px); }
    100% { transform: scale(1)    translateX(0px); }
  }
  @keyframes slideUpFade {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes expandWidth {
    from { width: 0; }
    to   { width: 60px; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.6; transform: scaleX(1); }
    50%       { opacity: 1;   transform: scaleX(1.15); }
  }
`;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);   // bumping this re-triggers CSS animations
  const timerRef = useRef(null);

  const goTo = (index) => {
    if (index === current) return;
    setCurrent(index);
    setAnimKey((k) => k + 1);
    clearInterval(timerRef.current);
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setAnimKey((k) => k + 1);
    }, 8000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      {/* Inject keyframes once */}
      <style>{keyframes}</style>

      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          minHeight: 640,
          overflow: 'hidden',
        }}
      >
        {/* ══════════════════════════════
            SLIDES — Ken Burns zoom effect
            ══════════════════════════════ */}
        {slides.map((slide, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              opacity: i === current ? 1 : 0,
              transition: 'opacity 1.1s ease',
              zIndex: i === current ? 1 : 0,
              // Ken Burns only on the active slide
              animation: i === current ? 'kenBurns 14s ease-in-out infinite' : 'none',
            }}
          />
        ))}

        {/* ══════════════════════════════
            OVERLAY — primary dark + gradient
            ══════════════════════════════ */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: `
              linear-gradient(
                105deg,
                ${colors.primary.dark}EE 0%,
                ${colors.primary.dark}99 30%,
                ${colors.primary.main}55 60%,
                ${colors.primary.dark}CC 100%
              )
            `,
          }}
        />

        {/* ══════════════════════════════
            DECORATIVE ELEMENTS
            ══════════════════════════════ */}

        {/* Vertical gold line — left side */}
        <Box
          sx={{
            position: 'absolute',
            left: { md: 60 },
            top: '18%',
            bottom: '18%',
            width: '1px',
            background: `linear-gradient(180deg, transparent, ${colors.secondary.main}, transparent)`,
            zIndex: 3,
            display: { xs: 'none', md: 'block' },
          }}
        />

        {/* Big faded school initial — decorative */}
        <Typography
          sx={{
            position: 'absolute',
            right: { xs: '-10%', md: '2%' },
            bottom: '-5%',
            fontFamily: typography.fontFamily.accent,
            fontSize: { xs: '18rem', md: '24rem' },
            fontWeight: typography.fontWeight.black,
            color: colors.primary.light,
            opacity: 0.06,
            lineHeight: 1,
            userSelect: 'none',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          P
        </Typography>

        {/* ══════════════════════════════
            CONTENT — center-left
            ══════════════════════════════ */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            pl: { xs: 3, sm: 6, md: 10, lg: 14 },
            pr: { xs: 3, md: 0 },
          }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: 580 } }}>

            {/* ── Tag pill */}
            <Box
              key={`tag-${animKey}`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
                px: 2,
                py: 0.7,
                border: `1px solid ${colors.secondary.main}`,
                borderLeft: `3px solid ${colors.secondary.main}`,
                borderRadius: '0 4px 4px 0',
                animation: 'fadeIn 0.6s ease 0.1s both',
              }}
            >
              <Box
                sx={{
                  width: 6, height: 6,
                  borderRadius: '50%',
                  bgcolor: colors.secondary.main,
                  animation: 'pulse 2s ease infinite',
                }}
              />
              <Typography
                sx={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.xs,
                  fontWeight: typography.fontWeight.semiBold,
                  color: colors.secondary.light,
                  letterSpacing: 2.5,
                  textTransform: 'uppercase',
                }}
              >
                {slides[current].tag}
              </Typography>
            </Box>

            {/* ── Main Heading */}
            <Typography
              key={`heading-${animKey}`}
              sx={{
                fontFamily: typography.fontFamily.accent,
                fontSize: { xs: typography.fontSize['3xl'], md: '3.2rem', lg: '3.8rem' },
                fontWeight: typography.fontWeight.bold,
                color: colors.text.light,
                lineHeight: 1.12,
                mb: 1,
                whiteSpace: 'pre-line',
                animation: 'slideUpFade 0.7s ease 0.2s both',
              }}
            >
              {slides[current].heading}
            </Typography>

            {/* ── Gold expanding underline */}
            <Box
              key={`line-${animKey}`}
              sx={{
                height: 3,
                bgcolor: colors.secondary.main,
                mb: 3,
                borderRadius: 2,
                animation: 'expandWidth 0.6s ease 0.5s both',
              }}
            />

            {/* ── Subtitle */}
            <Typography
              key={`sub-${animKey}`}
              sx={{
                fontFamily: typography.fontFamily.body,
                fontSize: { xs: typography.fontSize.base, md: typography.fontSize.md },
                fontWeight: typography.fontWeight.regular,
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.85,
                mb: 4.5,
                maxWidth: 460,
                animation: 'slideUpFade 0.7s ease 0.4s both',
              }}
            >
              {slides[current].sub}
            </Typography>

            {/* ── CTA Buttons */}
            <Stack
              key={`cta-${animKey}`}
              direction={{ xs: 'column', sm: 'row' }}
              gap={2}
              sx={{ animation: 'slideUpFade 0.7s ease 0.55s both' }}
            >
              <Button
                variant="contained"
                sx={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.semiBold,
                  bgcolor: colors.secondary.main,
                  color: colors.primary.dark,
                  px: 3.5, py: 1.5,
                  borderRadius: '4px',
                  textTransform: 'none',
                  boxShadow: `0 4px 20px rgba(212,160,23,0.35)`,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: colors.secondary.light,
                    boxShadow: `0 8px 28px rgba(212,160,23,0.5)`,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Apply for Admission
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.semiBold,
                  borderColor: 'rgba(255,255,255,0.45)',
                  color: colors.text.light,
                  px: 3.5, py: 1.5,
                  borderRadius: '4px',
                  textTransform: 'none',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: colors.secondary.main,
                    color: colors.secondary.light,
                    bgcolor: 'rgba(212,160,23,0.08)',
                    boxShadow: 'none',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Explore the School
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* ══════════════════════════════
            BOTTOM — progress bar + dots + counter
            ══════════════════════════════ */}

        {/* Auto-progress bar */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: 3,
            bgcolor: 'rgba(255,255,255,0.1)',
            zIndex: 5,
          }}
        >
          <Box
            key={`progress-${animKey}`}
            sx={{
              height: '100%',
              bgcolor: colors.secondary.main,
              animation: 'expandWidth 8s linear both',
              width: '100%',
            }}
          />
        </Box>

        {/* Slide dots */}
        <Stack
          direction="row"
          gap={1.2}
          alignItems="center"
          sx={{
            position: 'absolute',
            bottom: 28,
            left: { xs: '50%', md: 'auto' },
            right: { xs: 'auto', md: 52 },
            transform: { xs: 'translateX(-50%)', md: 'none' },
            zIndex: 5,
          }}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              onClick={() => goTo(i)}
              sx={{
                width: i === current ? 32 : 8,
                height: 8,
                borderRadius: '4px',
                bgcolor: i === current ? colors.secondary.main : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                '&:hover': { bgcolor: colors.secondary.light },
              }}
            />
          ))}
        </Stack>

        {/* Slide counter */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 26,
            left: { xs: 20, md: 80 },
            zIndex: 5,
          }}
        >
          <Typography
            sx={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.xs,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: 3,
            }}
          >
            {String(current + 1).padStart(2, '0')}
            <Box component="span" sx={{ color: colors.secondary.main, mx: 0.5 }}>—</Box>
            {String(slides.length).padStart(2, '0')}
          </Typography>
        </Box>

      </Box>
    </>
  );
};

export default HeroSection;
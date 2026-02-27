import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes countUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes iconPop {
    0%   { transform: scale(0.5); opacity: 0; }
    70%  { transform: scale(1.15); }
    100% { transform: scale(1);   opacity: 1; }
  }
`;

const stats = [
  { icon: <SchoolIcon   sx={{ fontSize: 36 }} />, value: 25,     suffix: '+',  label: 'Years of Excellence' },
  { icon: <GroupsIcon   sx={{ fontSize: 36 }} />, value: 3000,   suffix: '+',  label: 'Students Enrolled'  },
  { icon: <EmojiEventsIcon sx={{ fontSize: 36 }} />, value: 120, suffix: '+',  label: 'Awards Won'         },
  { icon: <WorkspacePremiumIcon sx={{ fontSize: 36 }} />, value: 98, suffix: '%', label: 'University Placement' },
];

const useCountUp = (target, duration = 1800, started) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
};

// ── Single stat item
const StatItem = ({ stat, index, started }) => {
  const count = useCountUp(stat.value, 1800 + index * 200, started);

  return (
    <Box
      sx={{
        flex: '0 0 auto',
        textAlign: 'center',
        px: { xs: 3, md: 5 },
        py: { xs: 3.5, md: 4 },
        position: 'relative',
        '&:not(:last-child)::after': {
          content: '""',
          position: 'absolute',
          right: 0, top: '20%', bottom: '20%',
          width: '1px',
          background: `linear-gradient(180deg, transparent, ${colors.secondary.main}55, transparent)`,
        },
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'translateY(-4px)' },
        '&:hover .stat-icon': { color: colors.secondary.light },
        '&:hover .stat-value': { color: colors.secondary.light },
      }}
    >
      <Box
        className="stat-icon"
        sx={{
          color: colors.secondary.main,
          mb: 1.5,
          display: 'flex',
          justifyContent: 'center',
          transition: 'color 0.3s ease',
          animation: started ? `iconPop 0.6s ease ${index * 0.15}s both` : 'none',
        }}
      >
        {stat.icon}
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: 0.3,
          mb: 0.8,
          animation: started ? `countUp 0.6s ease ${index * 0.15 + 0.2}s both` : 'none',
        }}
      >
        <Typography
          className="stat-value"
          sx={{
            fontFamily: typography.fontFamily.accent,
            fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' },
            fontWeight: typography.fontWeight.extraBold,
            color: colors.text.light,
            lineHeight: 1,
            transition: 'color 0.3s ease',
          }}
        >
          {count.toLocaleString()}
        </Typography>
        <Typography
          sx={{
            fontFamily: typography.fontFamily.accent,
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.bold,
            color: colors.secondary.main,
            lineHeight: 1,
          }}
        >
          {stat.suffix}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: typography.fontFamily.body,
          fontSize: typography.fontSize.xs,
          fontWeight: typography.fontWeight.semiBold,
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          animation: started ? `countUp 0.6s ease ${index * 0.15 + 0.35}s both` : 'none',
        }}
      >
        {stat.label}
      </Typography>
    </Box>
  );
};

const StatsBar = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
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
          zIndex: 10,
          mt: { xs: -6, md: -10 },
          display: 'flex',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: colors.primary.dark,
            borderRadius: '16px 16px 0 0',
            boxShadow: '0 -8px 50px rgba(0,0,0,0.4)',
            overflow: 'hidden',
            display: 'inline-flex',       
            flexDirection: 'column',
            '&::before': {
              content: '""',
              display: 'block',
              height: '3px',
              background: `linear-gradient(90deg, ${colors.secondary.dark}, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, ${colors.secondary.dark})`,
              backgroundSize: '400px 100%',
              animation: 'shimmer 3s linear infinite',
            },
          }}
        >
          <Stack
            direction={{ xs: 'row', md: 'row' }}
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            justifyContent="center"
          >
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} started={started} />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default StatsBar;
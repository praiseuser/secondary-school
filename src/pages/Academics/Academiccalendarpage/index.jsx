import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CircleIcon from '@mui/icons-material/Circle';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SchoolIcon from '@mui/icons-material/School';
import { colors, typography } from '../../../theme';
import PageHero from '../../../components/common/PageHero';

const keyframes = `
  @keyframes ac_fadeUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const terms = [
  {
    term: 'First Term', color: colors.primary.main, period: 'September — December 2025', weeks: 14, events: [
      { date: 'Sept 8', label: 'Resumption Day', type: 'resumption' },
      { date: 'Sept 15', label: 'Parent-Teacher Forum', type: 'event' },
      { date: 'Oct 6', label: 'Inter-House Sports Day', type: 'event' },
      { date: 'Oct 20 – 24', label: 'Mid-Term Break', type: 'break' },
      { date: 'Nov 10 – 21', label: 'First Term Examinations', type: 'exam' },
      { date: 'Dec 5', label: 'Cultural Day & Prize Giving', type: 'event' },
      { date: 'Dec 12', label: 'End of First Term', type: 'break' },
    ]
  },
  {
    term: 'Second Term', color: colors.secondary.dark, period: 'January — April 2026', weeks: 13, events: [
      { date: 'Jan 12', label: 'Resumption Day', type: 'resumption' },
      { date: 'Feb 5', label: 'Science & Innovation Fair', type: 'event' },
      { date: 'Feb 14', label: "Founders' Day Celebration", type: 'event' },
      { date: 'Feb 23 – 27', label: 'Mid-Term Break', type: 'break' },
      { date: 'Mar 9', label: 'Mock Examinations (SS3)', type: 'exam' },
      { date: 'Mar 23 – Apr 3', label: 'Second Term Examinations', type: 'exam' },
      { date: 'Apr 9', label: 'End of Second Term', type: 'break' },
    ]
  },
  {
    term: 'Third Term', color: '#2E7D32', period: 'April — July 2026', weeks: 11, events: [
      { date: 'Apr 27', label: 'Resumption Day', type: 'resumption' },
      { date: 'May 4', label: 'WAEC Examinations Begin (SS3)', type: 'exam' },
      { date: 'May 25', label: "Children's Day Celebration", type: 'event' },
      { date: 'Jun 1 – 5', label: 'Mid-Term Break', type: 'break' },
      { date: 'Jun 22 – Jul 3', label: 'Third Term Examinations', type: 'exam' },
      { date: 'Jul 10', label: 'Graduation & Valedictory', type: 'event' },
      { date: 'Jul 17', label: 'Long Vacation Begins', type: 'break' },
    ]
  },
];

const typeConfig = {
  resumption: { color: colors.primary.main, label: 'Resumption' },
  event: { color: colors.secondary.dark, label: 'Event' },
  exam: { color: '#C62828', label: 'Examination' },
  break: { color: '#2E7D32', label: 'Break/Holiday' },
};

const quickStats = [
  { icon: EventNoteIcon, value: '3', label: 'Terms' },
  { icon: DateRangeIcon, value: '38', label: 'School Weeks' },
  { icon: SchoolIcon, value: 'Sept', label: 'First Resumption' },
  { icon: WbSunnyIcon, value: 'July', label: 'Long Vacation' },
];

const AcademicCalendarPage = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const [activeTerm, setActiveTerm] = useState(0);
  const term = terms[activeTerm];

  return (
    <>
      <style>{keyframes}</style>
      <Box ref={ref}>

        <PageHero
          label="Academic Calendar"
          title="2025 / 2026 Academic Calendar"
          subtitle="Plan Ahead. Stay Ahead."
          description="All key dates, examinations, events and holidays for the current academic session in one place."
          backLabel="Back to Academics"
          backPath="/academics"
          visible={visible}
        />

        <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
          <Container maxWidth="xl">

            {/* Quick stats */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4,1fr)' }, gap: 2, mb: 6, animation: visible ? 'ac_fadeUp 0.6s ease 0.1s both' : 'none' }}>
              {quickStats.map((s) => {
                const Icon = s.icon;
                return (
                  <Box key={s.label} sx={{ p: 2.5, bgcolor: colors.background.paper, borderRadius: '12px', border: `1px solid ${colors.divider}` }}>
                    <Icon sx={{ fontSize: 20, color: colors.secondary.main, mb: 0.8 }} />
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1 }}>{s.value}</Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary, letterSpacing: 1, textTransform: 'uppercase', mt: 0.4 }}>{s.label}</Typography>
                  </Box>
                );
              })}
            </Box>

            {/* Legend */}
            <Stack direction="row" flexWrap="wrap" gap={2.5} sx={{ mb: 5, animation: visible ? 'ac_fadeUp 0.6s ease 0.2s both' : 'none' }}>
              {Object.entries(typeConfig).map(([key, val]) => (
                <Stack key={key} direction="row" alignItems="center" gap={0.8}>
                  <CircleIcon sx={{ fontSize: 10, color: val.color }} />
                  <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary }}>{val.label}</Typography>
                </Stack>
              ))}
            </Stack>

            {/* Term selector */}
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} sx={{ mb: 5 }}>
              {terms.map((t, i) => (
                <Box key={t.term} onClick={() => setActiveTerm(i)} sx={{ flex: 1, p: 2.5, borderRadius: '12px', cursor: 'pointer', bgcolor: activeTerm === i ? t.color : colors.background.paper, border: `2px solid ${activeTerm === i ? t.color : colors.divider}`, transition: 'all 0.25s ease', animation: visible ? `ac_fadeUp 0.6s ease ${i * 0.1 + 0.2}s both` : 'none', '&:hover': { borderColor: t.color } }}>
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <CalendarMonthIcon sx={{ color: activeTerm === i ? 'white' : t.color, fontSize: 20 }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: activeTerm === i ? 'white' : colors.primary.dark }}>{t.term}</Typography>
                      <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.7rem', color: activeTerm === i ? 'rgba(255,255,255,0.7)' : colors.text.secondary }}>{t.period}</Typography>
                    </Box>
                    <Box sx={{ bgcolor: activeTerm === i ? 'rgba(255,255,255,0.2)' : t.color + '22', px: 1.2, py: 0.4, borderRadius: '4px' }}>
                      <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: activeTerm === i ? 'white' : t.color }}>{t.weeks}wks</Typography>
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>

            {/* Events timeline */}
            <Box key={activeTerm} sx={{ animation: 'ac_fadeUp 0.4s ease both', bgcolor: colors.background.paper, borderRadius: '16px', overflow: 'hidden', border: `1px solid ${colors.divider}`, borderTop: `4px solid ${term.color}` }}>
              <Box sx={{ px: { xs: 3, md: 4 }, py: 2.5, borderBottom: `1px solid ${colors.divider}`, bgcolor: `${term.color}10` }}>
                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: term.color }}>{term.term} — {term.period}</Typography>
              </Box>
              {term.events.map((ev, i) => {
                const tc = typeConfig[ev.type];
                return (
                  <Box key={ev.date} sx={{ display: 'grid', gridTemplateColumns: { xs: '100px 1fr', md: '160px 1fr' }, borderBottom: i < term.events.length - 1 ? `1px solid ${colors.divider}` : 'none', '&:hover': { bgcolor: `${tc.color}08` } }}>
                    <Box sx={{ px: { xs: 2, md: 3 }, py: 2, borderRight: `1px solid ${colors.divider}`, display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: tc.color }}>{ev.date}</Typography>
                    </Box>
                    <Stack direction="row" alignItems="center" gap={1.5} sx={{ px: { xs: 2, md: 3 }, py: 2 }}>
                      <CircleIcon sx={{ fontSize: 8, color: tc.color, flexShrink: 0 }} />
                      <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.primary, fontWeight: typography.fontWeight.medium, flexGrow: 1 }}>{ev.label}</Typography>
                      <Box sx={{ bgcolor: tc.color + '18', border: `1px solid ${tc.color}44`, px: 1.2, py: 0.3, borderRadius: '4px', flexShrink: 0 }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: tc.color }}>{tc.label}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                );
              })}
            </Box>

          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AcademicCalendarPage;
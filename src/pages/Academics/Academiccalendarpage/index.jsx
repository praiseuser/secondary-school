import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes ac_fadeUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ac_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`;

const terms = [
    {
        term: 'First Term',
        color: colors.primary.main,
        period: 'September — December 2025',
        weeks: 14,
        events: [
            { date: 'Sept 8', label: 'Resumption Day', type: 'resumption' },
            { date: 'Sept 15', label: 'Parent-Teacher Forum', type: 'event' },
            { date: 'Oct 6', label: 'Inter-House Sports Day', type: 'event' },
            { date: 'Oct 20 – 24', label: 'Mid-Term Break', type: 'break' },
            { date: 'Nov 10 – 21', label: 'First Term Examinations', type: 'exam' },
            { date: 'Dec 5', label: 'Cultural Day & Prize Giving', type: 'event' },
            { date: 'Dec 12', label: 'End of First Term', type: 'break' },
        ],
    },
    {
        term: 'Second Term',
        color: colors.secondary.dark,
        period: 'January — April 2026',
        weeks: 13,
        events: [
            { date: 'Jan 12', label: 'Resumption Day', type: 'resumption' },
            { date: 'Feb 5', label: 'Science & Innovation Fair', type: 'event' },
            { date: 'Feb 14', label: 'Founders\' Day Celebration', type: 'event' },
            { date: 'Feb 23 – 27', label: 'Mid-Term Break', type: 'break' },
            { date: 'Mar 9', label: 'Mock Examinations Begin (SS3)', type: 'exam' },
            { date: 'Mar 23 – Apr 3', label: 'Second Term Examinations', type: 'exam' },
            { date: 'Apr 9', label: 'End of Second Term', type: 'break' },
        ],
    },
    {
        term: 'Third Term',
        color: '#2E7D32',
        period: 'April — July 2026',
        weeks: 11,
        events: [
            { date: 'Apr 27', label: 'Resumption Day', type: 'resumption' },
            { date: 'May 4', label: 'WAEC Examinations Begin (SS3)', type: 'exam' },
            { date: 'May 25', label: 'Children\'s Day Celebration', type: 'event' },
            { date: 'Jun 1 – 5', label: 'Mid-Term Break', type: 'break' },
            { date: 'Jun 22 – Jul 3', label: 'Third Term Examinations', type: 'exam' },
            { date: 'Jul 10', label: 'Graduation & Valedictory Service', type: 'event' },
            { date: 'Jul 17', label: 'Long Vacation Begins', type: 'break' },
        ],
    },
];

const typeConfig = {
    resumption: { color: colors.primary.main, label: 'Resumption' },
    event: { color: colors.secondary.dark, label: 'Event' },
    exam: { color: '#C62828', label: 'Examination' },
    break: { color: '#2E7D32', label: 'Break/Holiday' },
};

const AcademicCalendarPage = () => {
    const [visible, setVisible] = useState(false);
    const [activeTerm, setActiveTerm] = useState(0);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const term = terms[activeTerm];

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                {/* Hero */}
                <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 8, md: 11 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)`, backgroundSize: '400px 100%', animation: 'ac_shimmer 3s linear infinite' }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, cursor: 'pointer' }} onClick={() => navigate('/academics')}>
                            <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold }}>Back to Academics</Typography>
                        </Stack>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
                            <Box>
                                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'ac_fadeUp 0.6s ease both' : 'none' }}>
                                    <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Academic Calendar</Typography>
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1.5, animation: visible ? 'ac_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                                    2025 / 2026<br />Academic Year
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 480, animation: visible ? 'ac_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                                    Stay up to date with every important date — from resumption and mid-term breaks to examinations and events.
                                </Typography>
                            </Box>

                            {/* Quick stats */}
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, animation: visible ? 'ac_fadeUp 0.8s ease 0.3s both' : 'none' }}>
                                {[
                                    { value: '3', label: 'Terms', icon: '📅' },
                                    { value: '38', label: 'School Weeks', icon: '📆' },
                                    { value: 'Sept', label: 'First Resumption', icon: '🎒' },
                                    { value: 'July', label: 'Long Vacation', icon: '🏖️' },
                                ].map((s) => (
                                    <Box key={s.label} sx={{ bgcolor: 'rgba(255,255,255,0.06)', borderRadius: '12px', p: 2.5, border: `1px solid rgba(255,255,255,0.08)` }}>
                                        <Typography sx={{ fontSize: '1.4rem', mb: 0.5 }}>{s.icon}</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, lineHeight: 1 }}>{s.value}</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', mt: 0.4 }}>{s.label}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {/* Calendar content */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">

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
                                <Box key={t.term} onClick={() => setActiveTerm(i)} sx={{
                                    flex: 1, p: 2.5, borderRadius: '12px', cursor: 'pointer',
                                    bgcolor: activeTerm === i ? t.color : colors.background.paper,
                                    border: `2px solid ${activeTerm === i ? t.color : colors.divider}`,
                                    transition: 'all 0.25s ease',
                                    animation: visible ? `ac_fadeUp 0.6s ease ${i * 0.1 + 0.2}s both` : 'none',
                                    '&:hover': { borderColor: t.color },
                                }}>
                                    <Stack direction="row" alignItems="center" gap={1.5}>
                                        <CalendarMonthIcon sx={{ color: activeTerm === i ? 'white' : t.color, fontSize: 20 }} />
                                        <Box>
                                            <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: activeTerm === i ? 'white' : colors.primary.dark }}>{t.term}</Typography>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.7rem', color: activeTerm === i ? 'rgba(255,255,255,0.7)' : colors.text.secondary }}>{t.period}</Typography>
                                        </Box>
                                        <Box sx={{ ml: 'auto', bgcolor: activeTerm === i ? 'rgba(255,255,255,0.2)' : t.color + '22', px: 1.2, py: 0.4, borderRadius: '4px' }}>
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
                            <Stack gap={0}>
                                {term.events.map((ev, i) => {
                                    const tc = typeConfig[ev.type];
                                    return (
                                        <Box key={ev.date} sx={{
                                            display: 'grid',
                                            gridTemplateColumns: { xs: '100px 1fr', md: '160px 1fr' },
                                            gap: 0,
                                            borderBottom: i < term.events.length - 1 ? `1px solid ${colors.divider}` : 'none',
                                            transition: 'bgcolor 0.2s ease',
                                            '&:hover': { bgcolor: `${tc.color}08` },
                                        }}>
                                            {/* Date */}
                                            <Box sx={{ px: { xs: 2, md: 3 }, py: 2, borderRight: `1px solid ${colors.divider}`, display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: tc.color }}>
                                                    {ev.date}
                                                </Typography>
                                            </Box>
                                            {/* Event */}
                                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ px: { xs: 2, md: 3 }, py: 2 }}>
                                                <CircleIcon sx={{ fontSize: 8, color: tc.color, flexShrink: 0 }} />
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.primary, fontWeight: typography.fontWeight.medium }}>
                                                    {ev.label}
                                                </Typography>
                                                <Box sx={{ ml: 'auto', bgcolor: tc.color + '18', border: `1px solid ${tc.color}44`, px: 1.2, py: 0.3, borderRadius: '4px', flexShrink: 0 }}>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: tc.color, letterSpacing: 0.5 }}>
                                                        {tc.label}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default AcademicCalendarPage;
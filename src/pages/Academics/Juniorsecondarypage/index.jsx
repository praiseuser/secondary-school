import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes js_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes js_fadeLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes js_fadeRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const jssClasses = [
    {
        level: 'JSS 1', color: colors.primary.main,
        desc: 'Introduction to secondary school. Students settle in, build confidence and develop strong study habits.',
        subjects: ['English Language', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'CRS/IRS', 'French', 'Yoruba/Igbo/Hausa', 'Agricultural Science', 'Home Economics', 'Physical Education', 'Computer Studies'],
    },
    {
        level: 'JSS 2', color: colors.secondary.dark,
        desc: 'Building on foundations. Students deepen subject knowledge and begin exploring areas of interest.',
        subjects: ['English Language', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'CRS/IRS', 'French', 'Local Language', 'Agricultural Science', 'Home Economics', 'Physical Education', 'Computer Studies'],
    },
    {
        level: 'JSS 3', color: colors.primary.dark,
        desc: 'Preparation for BECE and transition to Senior Secondary. Focus intensifies on core subjects.',
        subjects: ['English Language', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'CRS/IRS', 'French', 'Local Language', 'Agricultural Science', 'Home Economics', 'Physical Education', 'Computer Studies'],
    },
];

const highlights = [
    { value: '3 Years', label: 'Programme Duration' },
    { value: '12', label: 'Subjects Per Class' },
    { value: 'BECE', label: 'Exit Qualification' },
    { value: '100%', label: 'Transition Rate to SS' },
];

const JuniorSecondaryPage = () => {
    const [visible, setVisible] = useState(false);
    const [activeClass, setActiveClass] = useState(0);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                {/* Hero */}
                <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 8, md: 11 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, cursor: 'pointer' }} onClick={() => navigate('/academics')}>
                            <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold }}>Back to Academics</Typography>
                        </Stack>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
                            <Box>
                                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'js_fadeUp 0.6s ease both' : 'none' }}>
                                    <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Junior Secondary</Typography>
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1.5, animation: visible ? 'js_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                                    JSS 1 — JSS 3
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 480, mb: 4, animation: visible ? 'js_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                                    The Junior Secondary years are where students discover who they are as learners. We build
                                    confidence, curiosity and strong academic habits that carry through to SS3 and beyond.
                                </Typography>
                                {/* Stats row */}
                                <Stack direction="row" flexWrap="wrap" gap={3} sx={{ animation: visible ? 'js_fadeUp 0.6s ease 0.3s both' : 'none' }}>
                                    {highlights.map((h) => (
                                        <Box key={h.label}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.secondary.main, lineHeight: 1 }}>{h.value}</Typography>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', mt: 0.4 }}>{h.label}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                            <Box sx={{ display: { xs: 'none', md: 'block' }, animation: visible ? 'js_fadeRight 0.8s ease 0.2s both' : 'none', position: 'relative' }}>
                                <Box component="img" src="/academics-junior.jpg" alt="Junior Secondary"
                                    sx={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: '20px', display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
                                />
                                <Box sx={{ position: 'absolute', top: 20, left: -20, right: 20, bottom: -20, border: `2px solid ${colors.secondary.main}33`, borderRadius: '20px', zIndex: -1 }} />
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {/* Class switcher */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">
                        {/* Tab row */}
                        <Stack direction="row" gap={2} sx={{ mb: 5, flexWrap: 'wrap', animation: visible ? 'js_fadeUp 0.7s ease 0.2s both' : 'none' }}>
                            {jssClasses.map((cls, i) => (
                                <Box key={cls.level} onClick={() => setActiveClass(i)}
                                    sx={{
                                        px: 3, py: 1.5, borderRadius: '10px', cursor: 'pointer',
                                        bgcolor: activeClass === i ? cls.color : 'transparent',
                                        border: `2px solid ${activeClass === i ? cls.color : colors.divider}`,
                                        transition: 'all 0.25s ease',
                                        '&:hover': { borderColor: cls.color },
                                    }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize.sm, color: activeClass === i ? 'white' : colors.text.secondary, transition: 'color 0.25s ease' }}>
                                        {cls.level}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>

                        {/* Active class content */}
                        <Box key={activeClass} sx={{ animation: 'js_fadeUp 0.4s ease both' }}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
                                <Box>
                                    <Box sx={{ bgcolor: jssClasses[activeClass].color, display: 'inline-block', px: 2, py: 0.6, borderRadius: '6px', mb: 2 }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1, textTransform: 'uppercase' }}>
                                            {jssClasses[activeClass].level}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: typography.fontSize['2xl'] }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1.5 }}>
                                        What to Expect in {jssClasses[activeClass].level}
                                    </Typography>
                                    <Box sx={{ width: 36, height: 3, bgcolor: jssClasses[activeClass].color, mb: 2 }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9 }}>
                                        {jssClasses[activeClass].desc}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 2.5 }}>
                                        Subjects Offered
                                    </Typography>
                                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                                        {jssClasses[activeClass].subjects.map((s) => (
                                            <Stack key={s} direction="row" alignItems="center" gap={1}>
                                                <CheckCircleIcon sx={{ fontSize: 14, color: jssClasses[activeClass].color, flexShrink: 0 }} />
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.primary }}>{s}</Typography>
                                            </Stack>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default JuniorSecondaryPage;
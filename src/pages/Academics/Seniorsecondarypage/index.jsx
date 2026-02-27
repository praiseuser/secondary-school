import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScienceIcon from '@mui/icons-material/Science';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes ss_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ss_fadeRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const arms = [
    {
        id: 'science', label: 'Sciences', icon: ScienceIcon,
        color: colors.primary.main,
        tag: 'Most Popular',
        desc: 'For students passionate about scientific discovery, medicine, engineering and technology.',
        compulsory: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
        electives: ['Further Mathematics', 'Agricultural Science', 'Technical Drawing', 'Computer Science'],
    },
    {
        id: 'arts', label: 'Arts', icon: AutoStoriesIcon,
        color: colors.secondary.dark,
        tag: 'Creative & Analytical',
        desc: 'For students with a passion for language, history, law, media and the social sciences.',
        compulsory: ['English Language', 'Literature in English', 'Government', 'History or Geography'],
        electives: ['CRS/IRS', 'French', 'Fine Art', 'Yoruba/Igbo/Hausa', 'Music'],
    },
    {
        id: 'commercial', label: 'Commercials', icon: TrendingUpIcon,
        color: colors.primary.dark,
        tag: 'Business & Finance',
        desc: 'For future entrepreneurs, accountants, economists and business leaders.',
        compulsory: ['English Language', 'Mathematics', 'Economics', 'Accounting'],
        electives: ['Commerce', 'Office Practice', 'Marketing', 'Government', 'Computer Science'],
    },
];

const SeniorSecondaryPage = () => {
    const [visible, setVisible] = useState(false);
    const [activeArm, setActiveArm] = useState(0);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const arm = arms[activeArm];
    const ArmIcon = arm.icon;

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
                                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'ss_fadeUp 0.6s ease both' : 'none' }}>
                                    <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Senior Secondary</Typography>
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1.5, animation: visible ? 'ss_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                                    SS 1 — SS 3
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 480, mb: 4, animation: visible ? 'ss_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                                    The Senior Secondary years are where students specialise and sharpen their focus.
                                    Three clear pathways — Sciences, Arts and Commercials — each designed to lead to excellence.
                                </Typography>
                                <Stack direction="row" gap={3} sx={{ animation: visible ? 'ss_fadeUp 0.6s ease 0.3s both' : 'none' }}>
                                    {[{ value: '98%', label: 'WAEC Pass Rate' }, { value: '3', label: 'Academic Arms' }, { value: 'SS3', label: 'WAEC Year' }].map((s) => (
                                        <Box key={s.label}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.secondary.main, lineHeight: 1 }}>{s.value}</Typography>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', mt: 0.4 }}>{s.label}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                            <Box sx={{ display: { xs: 'none', md: 'block' }, animation: visible ? 'ss_fadeRight 0.8s ease 0.2s both' : 'none', position: 'relative' }}>
                                <Box component="img" src="/academics-senior.jpg" alt="Senior Secondary"
                                    sx={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: '20px', display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
                                />
                                <Box sx={{ position: 'absolute', top: 20, left: -20, right: 20, bottom: -20, border: `2px solid ${colors.secondary.main}33`, borderRadius: '20px', zIndex: -1 }} />
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {/* Arm selector + detail */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">

                        {/* Arm cards */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: 6 }}>
                            {arms.map((a, i) => {
                                const Icon = a.icon;
                                const isActive = activeArm === i;
                                return (
                                    <Box key={a.id} onClick={() => setActiveArm(i)}
                                        sx={{
                                            borderRadius: '14px', p: 3, cursor: 'pointer',
                                            bgcolor: isActive ? a.color : colors.background.paper,
                                            border: `2px solid ${isActive ? a.color : colors.divider}`,
                                            transition: 'all 0.3s ease',
                                            transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                                            boxShadow: isActive ? `0 16px 40px rgba(0,0,0,0.15)` : 'none',
                                            animation: visible ? `ss_fadeUp 0.7s ease ${i * 0.12 + 0.2}s both` : 'none',
                                            '&:hover': { borderColor: a.color, transform: 'translateY(-4px)' },
                                        }}>
                                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
                                            <Box sx={{ width: 42, height: 42, borderRadius: '10px', bgcolor: isActive ? 'rgba(255,255,255,0.2)' : a.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Icon sx={{ fontSize: 22, color: isActive ? 'white' : a.color }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: isActive ? 'white' : colors.primary.dark }}>{a.label}</Typography>
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', color: isActive ? 'rgba(255,255,255,0.7)' : colors.secondary.main, fontWeight: typography.fontWeight.semiBold, letterSpacing: 1 }}>{a.tag}</Typography>
                                            </Box>
                                        </Stack>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: isActive ? 'rgba(255,255,255,0.75)' : colors.text.secondary, lineHeight: 1.7 }}>{a.desc}</Typography>
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Detail panel */}
                        <Box key={activeArm} sx={{ animation: 'ss_fadeUp 0.4s ease both', bgcolor: colors.background.paper, borderRadius: '16px', p: { xs: 3, md: 5 }, border: `1px solid ${arm.color}33`, borderTop: `4px solid ${arm.color}` }}>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 3 }}>
                                <Box sx={{ width: 48, height: 48, borderRadius: '12px', bgcolor: arm.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ArmIcon sx={{ fontSize: 24, color: 'white' }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>{arm.label}</Typography>
                                    <Box sx={{ width: 30, height: 2, bgcolor: arm.color, mt: 0.5 }} />
                                </Box>
                            </Stack>

                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
                                <Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: arm.color, letterSpacing: 2, textTransform: 'uppercase', mb: 1.5 }}>Compulsory Subjects</Typography>
                                    <Stack gap={1}>
                                        {arm.compulsory.map((s) => (
                                            <Stack key={s} direction="row" alignItems="center" gap={1}>
                                                <CheckCircleIcon sx={{ fontSize: 15, color: arm.color, flexShrink: 0 }} />
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.primary }}>{s}</Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: 'rgba(0,0,0,0.4)', letterSpacing: 2, textTransform: 'uppercase', mb: 1.5 }}>Elective Subjects</Typography>
                                    <Stack gap={1}>
                                        {arm.electives.map((s) => (
                                            <Stack key={s} direction="row" alignItems="center" gap={1}>
                                                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: arm.color, flexShrink: 0 }} />
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{s}</Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default SeniorSecondaryPage;
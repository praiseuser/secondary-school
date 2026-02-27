import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes cu_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cu_fadeLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes cu_fadeRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes cu_lineGrow {
    from { width: 0; }
    to   { width: 100%; }
  }
`;

const frameworks = [
    {
        title: 'WAEC / NECO',
        color: colors.primary.main,
        desc: 'Our primary national examination framework. Students are fully prepared for WASSCE and SSCE across all subjects.',
        points: ['Strong past-question training', 'Mock examinations every term', 'Expert WAEC-accredited teachers', '98% average pass rate'],
    },
    {
        title: 'Cambridge IGCSE',
        color: colors.secondary.dark,
        desc: 'Cambridge-aligned curriculum offering internationally recognised qualifications that open doors worldwide.',
        points: ['Internationally benchmarked', 'Critical thinking focus', 'Cambridge-certified instructors', 'Recognised in 160+ countries'],
    },
    {
        title: 'Nigerian National Curriculum',
        color: colors.primary.dark,
        desc: 'Full compliance with the Federal Ministry of Education guidelines ensuring all students meet national standards.',
        points: ['FME curriculum-aligned', 'Cultural context integration', 'Civic and values education', 'National identity emphasis'],
    },
];

const arms = [
    { label: 'Sciences', color: colors.primary.main, desc: 'Biology, Chemistry, Physics, Mathematics, Further Maths' },
    { label: 'Arts', color: colors.secondary.dark, desc: 'Literature, History, Government, CRS/IRS, Fine Art' },
    { label: 'Commercials', color: colors.primary.dark, desc: 'Accounting, Economics, Commerce, Office Practice, Marketing' },
];

const CurriculumPage = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                {/* ── Hero */}
                <Box sx={{
                    bgcolor: colors.primary.dark,
                    py: { xs: 8, md: 11 },
                    position: 'relative', overflow: 'hidden',
                    '&::before': {
                        content: '""', position: 'absolute', inset: 0,
                        backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`,
                        backgroundSize: '28px 28px',
                    },
                }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, cursor: 'pointer' }} onClick={() => navigate('/academics')}>
                            <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold, letterSpacing: 1 }}>
                                Back to Academics
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'cu_fadeUp 0.6s ease both' : 'none' }}>
                            <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                Curriculum
                            </Typography>
                        </Stack>
                        <Typography sx={{
                            fontFamily: typography.fontFamily.accent,
                            fontSize: { xs: typography.fontSize['3xl'], md: '3.4rem' },
                            fontWeight: typography.fontWeight.bold,
                            color: colors.text.light, lineHeight: 1.15, mb: 1,
                            animation: visible ? 'cu_fadeUp 0.6s ease 0.1s both' : 'none',
                        }}>
                            Curriculum Overview
                        </Typography>
                        <Box sx={{ position: 'relative', display: 'inline-block', mb: 3, animation: visible ? 'cu_fadeUp 0.6s ease 0.15s both' : 'none' }}>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: '1.8rem' }, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, lineHeight: 1.3 }}>
                                Built for Nigeria. Ready for the World.
                            </Typography>
                            <Box sx={{ position: 'absolute', bottom: -2, left: 0, height: 2, bgcolor: colors.secondary.main, borderRadius: 2, animation: visible ? 'cu_lineGrow 0.9s ease 0.6s both' : 'none', width: visible ? '100%' : 0 }} />
                        </Box>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 620, animation: visible ? 'cu_fadeUp 0.6s ease 0.25s both' : 'none' }}>
                            Our curriculum blends the Nigerian National Curriculum with Cambridge's
                            internationally recognised framework — creating graduates who are both
                            rooted in Nigerian values and globally competitive.
                        </Typography>
                    </Container>
                </Box>

                {/* ── Split image + intro */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'center', mb: { xs: 8, md: 12 } }}>
                            <Box sx={{ animation: visible ? 'cu_fadeLeft 0.8s ease 0.2s both' : 'none' }}>
                                <Box component="img" src="/academics-curriculum.jpg" alt="Curriculum"
                                    sx={{ width: '100%', height: { xs: 260, md: 400 }, objectFit: 'cover', borderRadius: '16px', boxShadow: '0 24px 60px rgba(0,0,0,0.15)', display: 'block' }}
                                />
                            </Box>
                            <Box sx={{ animation: visible ? 'cu_fadeRight 0.8s ease 0.3s both' : 'none' }}>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.2, mb: 2 }}>
                                    A Curriculum Designed to Develop the Whole Student
                                </Typography>
                                <Box sx={{ width: 40, height: 3, bgcolor: colors.secondary.main, mb: 2.5 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9, mb: 2 }}>
                                    At Preston, we believe education goes beyond passing exams. Our curriculum is deliberately designed
                                    to develop critical thinkers, ethical leaders and innovative problem-solvers.
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9 }}>
                                    From JSS1 through SS3, every subject is taught within a framework that builds on previous
                                    knowledge, challenges students to think deeper and connects learning to the real world.
                                </Typography>
                            </Box>
                        </Box>

                        {/* ── Frameworks */}
                        <Box sx={{ mb: { xs: 8, md: 12 } }}>
                            <Box sx={{ textAlign: 'center', mb: 6, animation: visible ? 'cu_fadeUp 0.7s ease 0.3s both' : 'none' }}>
                                <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                    <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Frameworks</Typography>
                                    <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>
                                    Three Frameworks. One Purpose.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                                {frameworks.map((f, i) => (
                                    <Box key={f.title} sx={{
                                        bgcolor: colors.background.paper,
                                        borderRadius: '16px', p: 3.5,
                                        border: `1px solid ${colors.divider}`,
                                        borderTop: `4px solid ${f.color}`,
                                        transition: 'all 0.3s ease',
                                        animation: visible ? `cu_fadeUp 0.7s ease ${i * 0.12 + 0.3}s both` : 'none',
                                        '&:hover': { transform: 'translateY(-6px)', boxShadow: `0 20px 50px rgba(0,0,0,0.1)`, borderColor: f.color + '55' },
                                    }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: f.color, mb: 1 }}>{f.title}</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7, mb: 2.5 }}>{f.desc}</Typography>
                                        <Stack gap={1}>
                                            {f.points.map((p) => (
                                                <Stack key={p} direction="row" alignItems="center" gap={1}>
                                                    <CheckCircleIcon sx={{ fontSize: 15, color: f.color, flexShrink: 0 }} />
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.primary }}>{p}</Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* ── Arms */}
                        <Box>
                            <Box sx={{ textAlign: 'center', mb: 5, animation: visible ? 'cu_fadeUp 0.7s ease 0.4s both' : 'none' }}>
                                <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                    <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Senior Arms</Typography>
                                    <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>
                                    Three Pathways to Excellence
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                                {arms.map((arm, i) => (
                                    <Box key={arm.label} sx={{
                                        bgcolor: arm.color,
                                        borderRadius: '14px', p: 3.5,
                                        animation: visible ? `cu_fadeUp 0.7s ease ${i * 0.12 + 0.4}s both` : 'none',
                                        transition: 'all 0.3s ease',
                                        '&:hover': { transform: 'translateY(-5px)', boxShadow: `0 20px 50px rgba(0,0,0,0.2)` },
                                    }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: 'rgba(255,255,255,0.15)', lineHeight: 1, mb: 1 }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: 'white', mb: 1 }}>{arm.label}</Typography>
                                        <Box sx={{ width: 30, height: 2, bgcolor: colors.secondary.main, mb: 1.5 }} />
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{arm.desc}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default CurriculumPage;
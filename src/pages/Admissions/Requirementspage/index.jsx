import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes rq_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes rq_scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to   { opacity: 1; transform: scale(1); }
  }
`;

const levels = [
    {
        level: 'JSS 1 Entry',
        subtitle: 'For Primary 6 Graduates',
        color: colors.primary.main,
        ageRange: '10–13 years',
        requirements: [
            { text: 'Primary 6 School Leaving Certificate', required: true },
            { text: 'Minimum of 5 credits in Primary School Leaving Exam', required: true },
            { text: 'Birth Certificate', required: true },
            { text: 'Two recent passport photographs', required: true },
            { text: 'Completed Application Form', required: true },
            { text: 'Evidence of payment of Application Fee', required: true },
            { text: 'Last two school reports from Primary School', required: true },
            { text: 'Medical fitness certificate (on enrolment)', required: false },
        ],
        assessment: ['English Language', 'Mathematics', 'General Knowledge'],
    },
    {
        level: 'JSS 2 / JSS 3 Entry',
        subtitle: 'For Transfer Students',
        color: colors.secondary.dark,
        ageRange: '11–15 years',
        requirements: [
            { text: 'Previous school report cards (last 2 terms)', required: true },
            { text: 'School Transfer Certificate', required: true },
            { text: 'Birth Certificate', required: true },
            { text: 'Two recent passport photographs', required: true },
            { text: 'Completed Application Form', required: true },
            { text: 'Evidence of payment of Application Fee', required: true },
            { text: 'Good standing letter from previous school', required: true },
            { text: 'Disciplinary record from previous school', required: false },
        ],
        assessment: ['English Language', 'Mathematics', 'Basic Science'],
    },
    {
        level: 'SS 1 Entry',
        subtitle: 'For JSS 3 / BECE Graduates',
        color: colors.primary.dark,
        ageRange: '14–17 years',
        requirements: [
            { text: 'JSS 3 School Leaving Certificate', required: true },
            { text: 'BECE Result (minimum 5 credits)', required: true },
            { text: 'Birth Certificate', required: true },
            { text: 'Two recent passport photographs', required: true },
            { text: 'Completed Application Form', required: true },
            { text: 'Evidence of payment of Application Fee', required: true },
            { text: 'Last school report card', required: true },
            { text: 'Statement of preferred arm (Sciences/Arts/Commercials)', required: true },
        ],
        assessment: ['English Language', 'Mathematics', 'Chosen Arm Subject'],
    },
    {
        level: 'SS 2 / SS 3 Entry',
        subtitle: 'For Senior Transfer Students',
        color: '#2E7D32',
        ageRange: '15–19 years',
        requirements: [
            { text: 'SS1/SS2 Report Cards (last 2 terms)', required: true },
            { text: 'School Transfer Certificate', required: true },
            { text: 'Birth Certificate', required: true },
            { text: 'Two recent passport photographs', required: true },
            { text: 'Completed Application Form', required: true },
            { text: 'Evidence of payment of Application Fee', required: true },
            { text: 'Good standing letter from previous school', required: true },
            { text: 'Detailed academic transcript', required: true },
        ],
        assessment: ['English Language', 'Mathematics', 'Two Arm Subjects'],
    },
];

const RequirementsPage = () => {
    const [visible, setVisible] = useState(false);
    const [activeLevel, setActiveLevel] = useState(0);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const level = levels[activeLevel];

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                {/* Hero */}
                <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 8, md: 11 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, cursor: 'pointer' }} onClick={() => navigate('/admissions')}>
                            <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold }}>Back to Admissions</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'rq_fadeUp 0.6s ease both' : 'none' }}>
                            <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Entry Requirements</Typography>
                        </Stack>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1.5, animation: visible ? 'rq_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                            What You Need to Apply
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 560, animation: visible ? 'rq_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                            Requirements differ by entry level. Select your entry level below to see exactly what documents and qualifications are needed.
                        </Typography>
                    </Container>
                </Box>

                {/* Level selector + requirements */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">

                        {/* Level tabs */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2, mb: 6, animation: visible ? 'rq_fadeUp 0.7s ease 0.2s both' : 'none' }}>
                            {levels.map((l, i) => (
                                <Box key={l.level} onClick={() => setActiveLevel(i)}
                                    sx={{
                                        p: 2.5, borderRadius: '12px', cursor: 'pointer', textAlign: 'center',
                                        bgcolor: activeLevel === i ? l.color : colors.background.paper,
                                        border: `2px solid ${activeLevel === i ? l.color : colors.divider}`,
                                        transition: 'all 0.25s ease',
                                        transform: activeLevel === i ? 'translateY(-3px)' : 'translateY(0)',
                                        boxShadow: activeLevel === i ? `0 12px 32px rgba(0,0,0,0.15)` : 'none',
                                        '&:hover': { borderColor: l.color, transform: 'translateY(-3px)' },
                                    }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: activeLevel === i ? 'white' : colors.primary.dark, mb: 0.3 }}>{l.level}</Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.68rem', color: activeLevel === i ? 'rgba(255,255,255,0.75)' : colors.text.secondary }}>{l.subtitle}</Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Requirements detail */}
                        <Box key={activeLevel} sx={{ animation: 'rq_scaleIn 0.4s ease both' }}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>

                                {/* Documents */}
                                <Box sx={{ bgcolor: colors.background.paper, borderRadius: '16px', overflow: 'hidden', border: `1px solid ${colors.divider}`, borderTop: `4px solid ${level.color}` }}>
                                    <Box sx={{ px: 3, py: 2.5, borderBottom: `1px solid ${colors.divider}`, bgcolor: `${level.color}10` }}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: level.color }}>
                                                Required Documents
                                            </Typography>
                                            <Box sx={{ bgcolor: level.color, px: 1.5, py: 0.4, borderRadius: '4px' }}>
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1 }}>{level.ageRange}</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Stack gap={0}>
                                        {level.requirements.map((req, i) => (
                                            <Stack key={req.text} direction="row" alignItems="flex-start" gap={1.5}
                                                sx={{ px: 3, py: 1.8, borderBottom: i < level.requirements.length - 1 ? `1px solid ${colors.divider}` : 'none', transition: 'bgcolor 0.2s ease', '&:hover': { bgcolor: `${level.color}06` } }}>
                                                {req.required
                                                    ? <CheckCircleIcon sx={{ fontSize: 16, color: level.color, flexShrink: 0, mt: 0.2 }} />
                                                    : <CancelIcon sx={{ fontSize: 16, color: colors.text.disabled, flexShrink: 0, mt: 0.2 }} />
                                                }
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: req.required ? colors.text.primary : colors.text.secondary, lineHeight: 1.5 }}>{req.text}</Typography>
                                                </Box>
                                                <Box sx={{ bgcolor: req.required ? level.color + '18' : 'transparent', border: `1px solid ${req.required ? level.color + '44' : 'transparent'}`, px: 1, py: 0.2, borderRadius: '4px', flexShrink: 0 }}>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', fontWeight: typography.fontWeight.bold, color: req.required ? level.color : colors.text.disabled, letterSpacing: 0.5 }}>
                                                        {req.required ? 'Required' : 'Optional'}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>

                                {/* Assessment + Info */}
                                <Stack gap={3}>
                                    <Box sx={{ bgcolor: colors.background.paper, borderRadius: '16px', overflow: 'hidden', border: `1px solid ${colors.divider}`, borderTop: `4px solid ${colors.secondary.main}` }}>
                                        <Box sx={{ px: 3, py: 2.5, borderBottom: `1px solid ${colors.divider}`, bgcolor: `${colors.secondary.main}10` }}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.secondary.dark }}>Entrance Assessment</Typography>
                                        </Box>
                                        <Box sx={{ p: 3 }}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7, mb: 2 }}>
                                                All applicants are required to sit an entrance assessment covering the following subjects:
                                            </Typography>
                                            <Stack gap={1.5}>
                                                {level.assessment.map((s, i) => (
                                                    <Stack key={s} direction="row" alignItems="center" gap={1.5}>
                                                        <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: colors.secondary.main, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>{String(i + 1).padStart(2, '0')}</Typography>
                                                        </Box>
                                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: colors.text.primary }}>{s}</Typography>
                                                    </Stack>
                                                ))}
                                            </Stack>
                                        </Box>
                                    </Box>

                                    {/* Important note */}
                                    <Box sx={{ bgcolor: `${level.color}12`, border: `1px solid ${level.color}44`, borderLeft: `4px solid ${level.color}`, borderRadius: '0 12px 12px 0', p: 3 }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: level.color, mb: 1 }}>Important Note</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7 }}>
                                            All documents must be originals or certified true copies. Photocopies must be accompanied
                                            by originals for verification. Incomplete applications will not be processed.
                                            For enquiries, contact the Admissions Office on <strong>+234 800 000 0000</strong>.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default RequirementsPage;
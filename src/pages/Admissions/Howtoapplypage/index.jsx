import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArticleIcon from '@mui/icons-material/Article';
import PaymentIcon from '@mui/icons-material/Payment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes ap_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ap_fadeLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes ap_fadeRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes ap_lineDown {
    from { height: 0; }
    to   { height: 100%; }
  }
  @keyframes ap_pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,160,23,0.4); }
    50%       { box-shadow: 0 0 0 10px rgba(212,160,23,0); }
  }
`;

const steps = [
    {
        number: '01',
        icon: DownloadIcon,
        title: 'Download Application Form',
        color: colors.primary.main,
        desc: 'Download the official Preston International School application form from our website or collect a physical copy from the school\'s admissions office.',
        actions: ['Download PDF Form', 'Visit Admissions Office'],
        note: 'Forms are free of charge.',
    },
    {
        number: '02',
        icon: ArticleIcon,
        title: 'Complete & Submit the Form',
        color: colors.secondary.dark,
        desc: 'Fill in all sections of the application form carefully. Attach all required documents and submit to the Admissions Office in person or via email.',
        actions: ['Submit in Person', 'Email: admissions@prestonschool.edu.ng'],
        note: 'Incomplete forms will not be processed.',
    },
    {
        number: '03',
        icon: PaymentIcon,
        title: 'Pay the Application Fee',
        color: colors.primary.dark,
        desc: 'Pay the non-refundable application fee of ₦5,000 at the school\'s bursary or via bank transfer. Attach your payment receipt to your application.',
        actions: ['Pay at Bursary', 'Bank Transfer Available'],
        note: 'Fee: ₦5,000 (non-refundable)',
    },
    {
        number: '04',
        icon: EventAvailableIcon,
        title: 'Entrance Assessment',
        color: '#2E7D32',
        desc: 'Shortlisted applicants will be invited to sit an entrance assessment in English, Mathematics and General Knowledge. Parents will be notified via SMS and email.',
        actions: ['Assessment: Saturdays', 'Duration: 2 Hours'],
        note: 'Bring your receipt & ID on assessment day.',
    },
    {
        number: '05',
        icon: SchoolIcon,
        title: 'Admission Offer',
        color: colors.secondary.main,
        desc: 'Successful candidates will receive a formal offer letter within 2 weeks of the assessment. Accept your offer by paying the acceptance fee to secure your place.',
        actions: ['Offer Letter by Email & Post', 'Acceptance Fee: ₦20,000'],
        note: 'Places are limited — accept promptly.',
        highlight: true,
    },
];

const documents = [
    'Completed Application Form',
    'Birth Certificate (original + photocopy)',
    'Last School Report Card (2 copies)',
    '2 Passport Photographs',
    'School Leaving Certificate (SS applicants)',
    'BECE Result (SS1 applicants)',
    'Transfer Letter (where applicable)',
    'Evidence of Payment of Application Fee',
];

const HowToApplyPage = () => {
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

                {/* Hero */}
                <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 8, md: 11 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, cursor: 'pointer' }} onClick={() => navigate('/admissions')}>
                            <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold }}>Back to Admissions</Typography>
                        </Stack>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
                            <Box>
                                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'ap_fadeUp 0.6s ease both' : 'none' }}>
                                    <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>How to Apply</Typography>
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1.5, animation: visible ? 'ap_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                                    5 Simple Steps to Join Preston
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 480, animation: visible ? 'ap_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                                    Our admissions process is simple and transparent. Follow the steps below and we'll guide you every step of the way.
                                </Typography>
                            </Box>
                            <Box sx={{ display: { xs: 'none', md: 'block' }, animation: visible ? 'ap_fadeRight 0.8s ease 0.2s both' : 'none', position: 'relative' }}>
                                <Box component="img" src="/image.jpg" alt="How to Apply"
                                    sx={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: '20px', display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
                                />
                                <Box sx={{ position: 'absolute', top: 20, left: -20, right: 20, bottom: -20, border: `2px solid ${colors.secondary.main}33`, borderRadius: '20px', zIndex: -1 }} />
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {/* Steps */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">
                        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, animation: visible ? 'ap_fadeUp 0.7s ease both' : 'none' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Application Process</Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                            </Stack>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>
                                Follow These 5 Steps
                            </Typography>
                        </Box>

                        {/* Steps timeline */}
                        <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
                            {/* Vertical line */}
                            <Box sx={{
                                display: { xs: 'none', md: 'block' },
                                position: 'absolute', left: 28, top: 28, bottom: 28,
                                width: 2,
                                background: `linear-gradient(180deg, ${colors.secondary.main}, ${colors.secondary.dark}44)`,
                                zIndex: 0,
                            }} />

                            <Stack gap={3}>
                                {steps.map((step, i) => {
                                    const Icon = step.icon;
                                    return (
                                        <Box
                                            key={step.number}
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { xs: '1fr', md: '60px 1fr' },
                                                gap: { xs: 2, md: 3 },
                                                alignItems: 'flex-start',
                                                animation: visible ? `ap_fadeUp 0.7s ease ${i * 0.12 + 0.2}s both` : 'none',
                                            }}
                                        >
                                            {/* Step circle */}
                                            <Box sx={{ display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                                                <Box sx={{
                                                    width: 56, height: 56,
                                                    borderRadius: '50%',
                                                    bgcolor: step.highlight ? colors.secondary.main : step.color,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    boxShadow: step.highlight
                                                        ? `0 0 0 4px ${colors.secondary.main}44, 0 8px 24px rgba(212,160,23,0.4)`
                                                        : `0 0 0 4px ${step.color}33`,
                                                    animation: step.highlight ? 'ap_pulse 2.5s ease infinite' : 'none',
                                                    flexShrink: 0,
                                                }}>
                                                    <Icon sx={{ fontSize: 24, color: step.highlight ? colors.primary.dark : 'white' }} />
                                                </Box>
                                            </Box>

                                            {/* Content card */}
                                            <Box sx={{
                                                bgcolor: step.highlight ? colors.secondary.main : colors.background.paper,
                                                border: `1px solid ${step.highlight ? colors.secondary.dark : colors.divider}`,
                                                borderLeft: `4px solid ${step.color}`,
                                                borderRadius: '14px',
                                                p: { xs: 3, md: 3.5 },
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateX(6px)',
                                                    boxShadow: `0 12px 36px rgba(0,0,0,0.1)`,
                                                },
                                            }}>
                                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                                                    <Stack direction="row" alignItems="center" gap={1.5}>
                                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: step.highlight ? colors.primary.dark + '88' : `${step.color}88`, letterSpacing: 2 }}>
                                                            STEP {step.number}
                                                        </Typography>
                                                    </Stack>
                                                    {step.note && (
                                                        <Box sx={{ bgcolor: step.highlight ? colors.primary.dark + '22' : step.color + '18', border: `1px solid ${step.highlight ? colors.primary.dark + '33' : step.color + '44'}`, px: 1.5, py: 0.4, borderRadius: '6px' }}>
                                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.semiBold, color: step.highlight ? colors.primary.dark : step.color, letterSpacing: 0.5 }}>
                                                                {step.note}
                                                            </Typography>
                                                        </Box>
                                                    )}
                                                </Stack>

                                                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: step.highlight ? colors.primary.dark : colors.primary.dark, mb: 0.6 }}>
                                                    {step.title}
                                                </Typography>
                                                <Box sx={{ width: 28, height: 2, bgcolor: step.highlight ? colors.primary.dark : step.color, mb: 1.5 }} />
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: step.highlight ? colors.primary.dark + 'CC' : colors.text.secondary, lineHeight: 1.8, mb: 2 }}>
                                                    {step.desc}
                                                </Typography>

                                                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                                                    {step.actions.map((action) => (
                                                        <Box key={action} sx={{ display: 'flex', alignItems: 'center', gap: 0.8, bgcolor: step.highlight ? colors.primary.dark + '18' : step.color + '12', border: `1px solid ${step.highlight ? colors.primary.dark + '33' : step.color + '33'}`, px: 1.8, py: 0.8, borderRadius: '6px' }}>
                                                            <CheckCircleIcon sx={{ fontSize: 12, color: step.highlight ? colors.primary.dark : step.color }} />
                                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: step.highlight ? colors.primary.dark : step.color }}>
                                                                {action}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Box>

                        {/* Documents checklist */}
                        <Box sx={{ mt: { xs: 8, md: 12 }, animation: visible ? 'ap_fadeUp 0.7s ease 0.5s both' : 'none' }}>
                            <Box sx={{ textAlign: 'center', mb: 5 }}>
                                <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                    <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Documents Required</Typography>
                                    <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                                </Stack>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>
                                    What to Bring
                                </Typography>
                            </Box>

                            <Box sx={{ bgcolor: colors.primary.dark, borderRadius: '20px', p: { xs: 3, md: 5 }, maxWidth: 800, mx: 'auto', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}10 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' } }}>
                                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5, position: 'relative', zIndex: 1 }}>
                                    {documents.map((doc, i) => (
                                        <Stack key={doc} direction="row" alignItems="flex-start" gap={1.5}
                                            sx={{ animation: visible ? `ap_fadeUp 0.5s ease ${i * 0.07 + 0.5}s both` : 'none' }}>
                                            <CheckCircleIcon sx={{ fontSize: 16, color: colors.secondary.main, flexShrink: 0, mt: 0.2 }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{doc}</Typography>
                                        </Stack>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default HowToApplyPage;
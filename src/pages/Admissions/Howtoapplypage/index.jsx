import { Box, Typography, Stack, Container } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArticleIcon from '@mui/icons-material/Article';
import PaymentIcon from '@mui/icons-material/Payment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import { colors, typography } from '../../../theme';
import PageHero from '../../../components/common/PageHero';
import SectionHeader from '../../../components/common/SectionHeader';
import { useEffect, useRef, useState } from 'react';

const keyframes = `
  @keyframes ap_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ap_pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,160,23,0.4); }
    50%       { box-shadow: 0 0 0 10px rgba(212,160,23,0); }
  }
`;

const steps = [
    { number: '01', icon: DownloadIcon, title: 'Download Application Form', color: colors.primary.main, desc: "Download the official Preston International School application form from our website or collect a physical copy from the school's admissions office.", actions: ['Download PDF Form', 'Visit Admissions Office'], note: 'Forms are free of charge.' },
    { number: '02', icon: ArticleIcon, title: 'Complete & Submit the Form', color: colors.secondary.dark, desc: 'Fill in all sections of the application form carefully. Attach all required documents and submit to the Admissions Office in person or via email.', actions: ['Submit in Person', 'Email: admissions@prestonschool.edu.ng'], note: 'Incomplete forms will not be processed.' },
    { number: '03', icon: PaymentIcon, title: 'Pay the Application Fee', color: colors.primary.dark, desc: "Pay the non-refundable application fee of ₦5,000 at the school's bursary or via bank transfer. Attach your payment receipt to your application.", actions: ['Pay at Bursary', 'Bank Transfer Available'], note: 'Fee: ₦5,000 (non-refundable)' },
    { number: '04', icon: EventAvailableIcon, title: 'Entrance Assessment', color: '#2E7D32', desc: 'Shortlisted applicants will be invited to sit an entrance assessment in English, Mathematics and General Knowledge. Parents will be notified via SMS and email.', actions: ['Assessment: Saturdays', 'Duration: 2 Hours'], note: 'Bring your receipt & ID on assessment day.' },
    { number: '05', icon: SchoolIcon, title: 'Admission Offer', color: colors.secondary.main, desc: 'Successful candidates will receive a formal offer letter within 2 weeks of the assessment. Accept your offer by paying the acceptance fee to secure your place.', actions: ['Offer Letter by Email & Post', 'Acceptance Fee: ₦20,000'], note: 'Places are limited — accept promptly.', highlight: true },
];

const documents = [
    'Completed Application Form', 'Birth Certificate (original + photocopy)',
    'Last School Report Card (2 copies)', '2 Passport Photographs',
    'School Leaving Certificate (SS applicants)', 'BECE Result (SS1 applicants)',
    'Transfer Letter (where applicable)', 'Evidence of Payment of Application Fee',
];

const HowToApplyPage = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.05 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                <PageHero
                    label="How to Apply"
                    title="Your Journey Starts Here"
                    subtitle="Simple. Clear. Straightforward."
                    description="Follow our step-by-step application process and secure your child's place at Preston International School."
                    backLabel="Back to Admissions"
                    backPath="/admissions"
                    visible={visible}
                />

                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">

                        <SectionHeader label="Application Process" title="Follow These 5 Steps" centered animation={visible ? 'ap_fadeUp 0.7s ease both' : 'none'} mb={8} />

                        {/* Steps timeline */}
                        <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
                            <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: 28, top: 28, bottom: 28, width: 2, background: `linear-gradient(180deg, ${colors.secondary.main}, ${colors.secondary.dark}44)`, zIndex: 0 }} />
                            <Stack gap={3}>
                                {steps.map((step, i) => {
                                    const Icon = step.icon;
                                    return (
                                        <Box key={step.number} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '60px 1fr' }, gap: { xs: 2, md: 3 }, alignItems: 'flex-start', animation: visible ? `ap_fadeUp 0.7s ease ${i * 0.12 + 0.2}s both` : 'none' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                                                <Box sx={{ width: 56, height: 56, borderRadius: '50%', bgcolor: step.highlight ? colors.secondary.main : step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: step.highlight ? `0 0 0 4px ${colors.secondary.main}44, 0 8px 24px rgba(212,160,23,0.4)` : `0 0 0 4px ${step.color}33`, animation: step.highlight ? 'ap_pulse 2.5s ease infinite' : 'none', flexShrink: 0 }}>
                                                    <Icon sx={{ fontSize: 24, color: step.highlight ? colors.primary.dark : 'white' }} />
                                                </Box>
                                            </Box>
                                            <Box sx={{ bgcolor: step.highlight ? colors.secondary.main : colors.background.paper, border: `1px solid ${step.highlight ? colors.secondary.dark : colors.divider}`, borderLeft: `4px solid ${step.color}`, borderRadius: '14px', p: { xs: 3, md: 3.5 }, transition: 'all 0.3s ease', '&:hover': { transform: 'translateX(6px)', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' } }}>
                                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: step.highlight ? colors.primary.dark + '88' : `${step.color}88`, letterSpacing: 2 }}>STEP {step.number}</Typography>
                                                    {step.note && (
                                                        <Box sx={{ bgcolor: step.highlight ? colors.primary.dark + '22' : step.color + '18', border: `1px solid ${step.highlight ? colors.primary.dark + '33' : step.color + '44'}`, px: 1.5, py: 0.4, borderRadius: '6px' }}>
                                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.semiBold, color: step.highlight ? colors.primary.dark : step.color }}>{step.note}</Typography>
                                                        </Box>
                                                    )}
                                                </Stack>
                                                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 0.6 }}>{step.title}</Typography>
                                                <Box sx={{ width: 28, height: 2, bgcolor: step.highlight ? colors.primary.dark : step.color, mb: 1.5 }} />
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: step.highlight ? colors.primary.dark + 'CC' : colors.text.secondary, lineHeight: 1.8, mb: 2 }}>{step.desc}</Typography>
                                                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                                                    {step.actions.map((action) => (
                                                        <Box key={action} sx={{ display: 'flex', alignItems: 'center', gap: 0.8, bgcolor: step.highlight ? colors.primary.dark + '18' : step.color + '12', border: `1px solid ${step.highlight ? colors.primary.dark + '33' : step.color + '33'}`, px: 1.8, py: 0.8, borderRadius: '6px' }}>
                                                            <CheckCircleIcon sx={{ fontSize: 12, color: step.highlight ? colors.primary.dark : step.color }} />
                                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.medium, color: step.highlight ? colors.primary.dark : step.color }}>{action}</Typography>
                                                        </Box>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Box>

                        {/* Documents */}
                        <Box sx={{ mt: { xs: 8, md: 12 }, animation: visible ? 'ap_fadeUp 0.7s ease 0.5s both' : 'none' }}>
                            <SectionHeader label="Documents Required" title="What to Bring" centered mb={5} />
                            <Box sx={{ bgcolor: colors.primary.dark, borderRadius: '20px', p: { xs: 3, md: 5 }, maxWidth: 800, mx: 'auto', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}10 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' } }}>
                                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5, position: 'relative', zIndex: 1 }}>
                                    {documents.map((doc, i) => (
                                        <Stack key={doc} direction="row" alignItems="flex-start" gap={1.5} sx={{ animation: visible ? `ap_fadeUp 0.5s ease ${i * 0.07 + 0.5}s both` : 'none' }}>
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
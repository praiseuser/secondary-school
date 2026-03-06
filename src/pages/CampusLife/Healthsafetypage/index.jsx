import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes hs_fadeUp { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
`;

const pillars = [
    { icon: LocalHospitalIcon, color: '#C62828', title: 'School Clinic', desc: 'Our fully equipped on-campus clinic is staffed by a qualified nurse during all school hours. A visiting doctor attends three times a week.', points: ['Registered nurse on duty daily', 'Visiting doctor 3x per week', 'First aid trained in all departments', 'Emergency ambulance on call 24/7'] },
    { icon: SecurityIcon, color: colors.primary.main, title: 'Campus Security', desc: 'Preston operates a 24-hour security system with controlled access points, CCTV coverage and a trained security team at all times.', points: ['24/7 security personnel', 'CCTV across all campus areas', 'Single controlled entry/exit point', 'Visitor ID verification system'] },
    { icon: PsychologyIcon, color: '#6A1B9A', title: 'Mental Wellbeing', desc: 'Our resident school counsellor provides confidential support for students dealing with academic pressure, personal challenges or emotional wellbeing.', points: ['Resident school counsellor', 'Confidential 1-on-1 sessions', 'Peer support programme', 'Parental guidance and referrals'] },
];

const faqs = [
    { q: 'What happens if my child falls ill at school?', a: 'The school nurse will assess your child immediately. If necessary, parents will be contacted within 15 minutes. For serious cases, the school will arrange emergency transport to the nearest hospital and contact parents simultaneously.' },
    { q: 'How does the school handle emergencies?', a: 'We have a comprehensive Emergency Response Plan. All staff are trained in emergency protocols. An ambulance is on standby during school hours, and we maintain a contact list of all parent and guardian numbers.' },
    { q: 'How does Preston safeguard against bullying?', a: 'Preston has a zero-tolerance anti-bullying policy. All reported incidents are investigated by the Vice Principal. We also have a peer mediation programme and regular wellbeing check-ins in every class.' },
    { q: 'Can I speak to the school counsellor directly?', a: 'Yes. Parents can request a consultation with the school counsellor at any time by contacting the admin office. Student sessions are confidential unless there is a risk to safety.' },
];

const FaqItem = ({ faq, i, visible }) => {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ bgcolor: colors.background.paper, borderRadius: '12px', border: `1px solid ${open ? colors.primary.main + '44' : colors.divider}`, overflow: 'hidden', transition: 'all 0.25s ease', animation: visible ? `hs_fadeUp 0.6s ease ${i * 0.1 + 0.3}s both` : 'none' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} onClick={() => setOpen(!open)} sx={{ px: 3, py: 2.5, cursor: 'pointer', '&:hover': { bgcolor: `${colors.primary.main}06` } }}>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: open ? typography.fontWeight.semiBold : typography.fontWeight.medium, color: open ? colors.primary.main : colors.text.primary, lineHeight: 1.5 }}>{faq.q}</Typography>
                <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: open ? colors.primary.main : `${colors.primary.main}18`, border: `1px solid ${colors.primary.main}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s ease' }}>
                    {open ? <RemoveIcon sx={{ fontSize: 14, color: 'white' }} /> : <AddIcon sx={{ fontSize: 14, color: colors.primary.main }} />}
                </Box>
            </Stack>
            <Box sx={{ overflow: 'hidden', maxHeight: open ? '300px' : 0, transition: 'max-height 0.4s ease', px: 3, pb: open ? 2.5 : 0 }}>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8 }}>{faq.a}</Typography>
            </Box>
        </Box>
    );
};

const HealthSafetyPage = () => {
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

                {/* Hero */}
                <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 8, md: 11 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" alignItems="center" gap={1} component={Link} to="/campus-life" sx={{ mb: 3, cursor: 'pointer', width: 'fit-content', textDecoration: 'none' }}>
                            <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold, letterSpacing: 1 }}>Back to Campus Life</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'hs_fadeUp 0.6s ease both' : 'none' }}>
                            <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Health & Safety</Typography>
                        </Stack>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: '2.2rem', md: '3.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1, animation: visible ? 'hs_fadeUp 0.6s ease 0.1s both' : 'none' }}>Your Child's Safety Is Our Priority</Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: '1.8rem' }, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, mb: 2, animation: visible ? 'hs_fadeUp 0.6s ease 0.15s both' : 'none' }}>Protected. Supported. Cared For.</Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 620, animation: visible ? 'hs_fadeUp 0.6s ease 0.25s both' : 'none' }}>
                            From our fully staffed clinic to our 24-hour security and mental health support, every aspect of your child's wellbeing is covered at Preston.
                        </Typography>
                    </Container>
                </Box>

                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">

                        {/* 3 pillars */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: { xs: 8, md: 12 } }}>
                            {pillars.map((pillar, i) => {
                                const Icon = pillar.icon;
                                return (
                                    <Box key={pillar.title} sx={{ bgcolor: colors.background.paper, borderRadius: '20px', overflow: 'hidden', border: `1px solid ${colors.divider}`, animation: visible ? `hs_fadeUp 0.7s ease ${i * 0.12 + 0.1}s both` : 'none', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 24px 60px rgba(0,0,0,0.1)', borderColor: pillar.color + '44' } }}>
                                        <Box sx={{ height: 4, bgcolor: pillar.color }} />
                                        <Box sx={{ p: { xs: 3, md: 3.5 } }}>
                                            <Box sx={{ width: 52, height: 52, borderRadius: '14px', bgcolor: pillar.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5 }}>
                                                <Icon sx={{ fontSize: 26, color: pillar.color }} />
                                            </Box>
                                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1 }}>{pillar.title}</Typography>
                                            <Box sx={{ width: 30, height: 2, bgcolor: pillar.color, mb: 2 }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8, mb: 2.5 }}>{pillar.desc}</Typography>
                                            <Stack gap={1}>
                                                {pillar.points.map((p) => (
                                                    <Stack key={p} direction="row" alignItems="flex-start" gap={1}>
                                                        <CheckCircleIcon sx={{ fontSize: 14, color: pillar.color, flexShrink: 0, mt: 0.2 }} />
                                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.primary, lineHeight: 1.5 }}>{p}</Typography>
                                                    </Stack>
                                                ))}
                                            </Stack>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Emergency banner */}
                        <Box sx={{ bgcolor: '#C62828', borderRadius: '20px', p: { xs: 3, md: 4 }, mb: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden', animation: visible ? 'hs_fadeUp 0.7s ease 0.3s both' : 'none', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' } }}>
                            <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between" gap={3} sx={{ position: 'relative', zIndex: 1 }}>
                                <Stack direction="row" alignItems="center" gap={2.5}>
                                    <Box sx={{ width: 52, height: 52, borderRadius: '12px', bgcolor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <WarningIcon sx={{ fontSize: 26, color: 'white' }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: 'white', mb: 0.3 }}>Emergency Contact Line</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.75)' }}>Available 24 hours a day, 7 days a week for all urgent school-related matters.</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="row" alignItems="center" gap={1.5} sx={{ bgcolor: 'rgba(255,255,255,0.15)', px: 3, py: 2, borderRadius: '12px', flexShrink: 0 }}>
                                    <PhoneInTalkIcon sx={{ color: 'white', fontSize: 20 }} />
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: 'white' }}>+234 800 000 0000</Typography>
                                </Stack>
                            </Stack>
                        </Box>

                        {/* FAQs */}
                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'hs_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                            <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Common Questions</Typography>
                        </Stack>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 4 }}>Health & Safety FAQs</Typography>
                        <Stack gap={2} sx={{ mb: { xs: 6, md: 10 } }}>
                            {faqs.map((faq, i) => <FaqItem key={faq.q} faq={faq} i={i} visible={visible} />)}
                        </Stack>

                        {/* Certifications */}
                        <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: colors.background.paper, borderRadius: '16px', border: `1px solid ${colors.divider}`, animation: visible ? 'hs_fadeUp 0.6s ease 0.4s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                                <HealthAndSafetyIcon sx={{ color: colors.secondary.main, fontSize: 22 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Certifications & Compliance</Typography>
                            </Stack>
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 1.5 }}>
                                {['Federal Ministry of Education Approved', 'National Health & Safety Standards Compliant', 'Annual Safety Audit Certified', 'First Aid Trained Staff — All Departments', 'Child Safeguarding Policy Certified', 'Fire Safety Certificate — Current'].map((cert) => (
                                    <Stack key={cert} direction="row" alignItems="flex-start" gap={1}>
                                        <CheckCircleIcon sx={{ fontSize: 14, color: colors.secondary.main, flexShrink: 0, mt: 0.2 }} />
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.secondary, lineHeight: 1.5 }}>{cert}</Typography>
                                    </Stack>
                                ))}
                            </Box>
                        </Box>

                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default HealthSafetyPage;
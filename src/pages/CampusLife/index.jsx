import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleIcon from '@mui/icons-material/People';
import HotelIcon from '@mui/icons-material/Hotel';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes cl_fadeUp { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
  @keyframes cl_shimmer { 0% { background-position:-400px 0; } 100% { background-position:400px 0; } }
`;

const highlights = [
    { icon: PeopleIcon, color: colors.primary.main, title: 'Student Life', desc: 'A vibrant community where every student belongs, grows and thrives together.', path: '/campus-life/student-life' },
    { icon: HotelIcon, color: colors.secondary.dark, title: 'Boarding', desc: 'Safe, comfortable boarding facilities that feel like a home away from home.', path: '/campus-life/boarding' },
    { icon: HealthAndSafetyIcon, color: '#2E7D32', title: 'Health & Safety', desc: "Your child's wellbeing is our first priority — every hour of every day.", path: '/campus-life/health' },
];

const features = [
    { icon: SportsSoccerIcon, color: colors.primary.main, title: 'World-Class Sports', desc: 'Full-size football pitch, basketball courts, athletics track and a heated swimming pool.' },
    { icon: MenuBookIcon, color: colors.secondary.dark, title: 'Modern Library', desc: 'Over 12,000 volumes plus digital resources — open 7 days a week.' },
    { icon: EmojiEventsIcon, color: colors.primary.dark, title: 'Events & Competitions', desc: 'Inter-house sports, cultural day, science fairs, debate championships and more.' },
];

const stats = [
    { value: '15+', label: 'Clubs & Societies' },
    { value: '500', label: 'Boarding Students' },
    { value: '12k+', label: 'Library Volumes' },
    { value: '98%', label: 'Student Satisfaction' },
];

const CampusLifePage = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

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
                <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'cl_fadeUp 0.6s ease both' : 'none' }}>
                            <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Campus Life</Typography>
                        </Stack>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: '2.4rem', md: '3.8rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.1, mb: 2, animation: visible ? 'cl_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                            Life at Preston Is<br />More Than Academics
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 580, animation: visible ? 'cl_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                            At Preston International School, the experience inside the classroom is only half the story. We nurture confident, well-rounded individuals through sport, culture, community and care.
                        </Typography>
                    </Container>
                </Box>

                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">

                        {/* Section header */}
                        <Box sx={{ textAlign: 'center', mb: 6, animation: visible ? 'cl_fadeUp 0.6s ease 0.1s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.45, flex: '1 1 0', maxWidth: 80 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Explore</Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.45, flex: '1 1 0', maxWidth: 80 }} />
                            </Stack>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Three Pillars of Campus Life</Typography>
                        </Box>

                        {/* 3 cards */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: { xs: 8, md: 12 } }}>
                            {highlights.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <Box key={item.title} onClick={() => navigate(item.path)} sx={{ bgcolor: colors.background.paper, borderRadius: '20px', overflow: 'hidden', border: `1px solid ${colors.divider}`, cursor: 'pointer', transition: 'all 0.3s ease', animation: visible ? `cl_fadeUp 0.7s ease ${i * 0.12 + 0.2}s both` : 'none', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 24px 60px rgba(0,0,0,0.12)', borderColor: item.color + '55', '& .cl-arrow': { transform: 'translateX(4px)', opacity: 1 } } }}>
                                        <Box sx={{ height: 4, bgcolor: item.color }} />
                                        <Box sx={{ p: { xs: 3, md: 4 } }}>
                                            <Box sx={{ width: 56, height: 56, borderRadius: '14px', bgcolor: item.color + '18', border: `1px solid ${item.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5 }}>
                                                <Icon sx={{ fontSize: 28, color: item.color }} />
                                            </Box>
                                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1 }}>{item.title}</Typography>
                                            <Box sx={{ width: 32, height: 2, bgcolor: item.color, mb: 2 }} />
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8, mb: 3 }}>{item.desc}</Typography>
                                            <Stack direction="row" alignItems="center" gap={0.8}>
                                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: item.color, letterSpacing: 1, textTransform: 'uppercase' }}>Learn More</Typography>
                                                <ArrowForwardIcon className="cl-arrow" sx={{ fontSize: 14, color: item.color, transition: 'all 0.25s ease', opacity: 0.6 }} />
                                            </Stack>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Facilities */}
                        <Box sx={{ textAlign: 'center', mb: 5, animation: visible ? 'cl_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.45, flex: '1 1 0', maxWidth: 80 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Facilities</Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.45, flex: '1 1 0', maxWidth: 80 }} />
                            </Stack>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Built for a Full School Experience</Typography>
                        </Box>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: { xs: 8, md: 12 } }}>
                            {features.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <Stack key={f.title} direction="row" gap={2.5} sx={{ p: 3, bgcolor: colors.background.paper, borderRadius: '14px', border: `1px solid ${colors.divider}`, animation: visible ? `cl_fadeUp 0.6s ease ${i * 0.1 + 0.3}s both` : 'none', transition: 'all 0.3s ease', '&:hover': { borderColor: f.color + '44', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' } }}>
                                        <Box sx={{ width: 44, height: 44, borderRadius: '10px', bgcolor: f.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Icon sx={{ fontSize: 22, color: f.color }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 0.5 }}>{f.title}</Typography>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7 }}>{f.desc}</Typography>
                                        </Box>
                                    </Stack>
                                );
                            })}
                        </Box>

                        {/* Stats strip */}
                        <Box sx={{ bgcolor: colors.primary.dark, borderRadius: '20px', p: { xs: 4, md: 5 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' } }}>
                            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`, backgroundSize: '400px 100%', animation: 'cl_shimmer 3s linear infinite' }} />
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4,1fr)' }, gap: { xs: 4, md: 0 }, position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                {stats.map((s, i) => (
                                    <Box key={s.label} sx={{ borderRight: { sm: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }, px: { sm: 3 }, animation: visible ? `cl_fadeUp 0.6s ease ${i * 0.1 + 0.2}s both` : 'none' }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' }, fontWeight: 900, color: colors.secondary.main, lineHeight: 1, mb: 0.5 }}>{s.value}</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.45)', letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</Typography>
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

export default CampusLifePage;
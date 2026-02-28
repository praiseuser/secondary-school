import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import PublicIcon from '@mui/icons-material/Public';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes hs_fadeLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes hs_fadeRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes hs_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hs_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes hs_float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes hs_glow {
    0%, 100% { box-shadow: 0 0 20px rgba(212,160,23,0.2); }
    50%       { box-shadow: 0 0 40px rgba(212,160,23,0.5); }
  }
`;

const milestones = [
    { year: '1999', title: 'The Beginning', desc: 'Preston International School was founded with just 12 students and a single vision — to provide world-class education right here in Nigeria.', Icon: SchoolIcon, color: colors.primary.main },
    { year: '2004', title: 'First WAEC Results', desc: 'Our pioneer SS3 set recorded a 100% WAEC pass rate, announcing Preston to the entire nation as a school of serious academic intent.', Icon: ArticleIcon, color: colors.secondary.dark },
    { year: '2008', title: 'Cambridge Accreditation', desc: 'We became one of the first schools in the region to receive full Cambridge International certification, opening doors to the world for our students.', Icon: PublicIcon, color: colors.primary.light },
    { year: '2013', title: 'New Campus Launch', desc: 'Our state-of-the-art campus was inaugurated — featuring modern science labs, a full sports complex and boarding facilities for 500 students.', Icon: ApartmentIcon, color: colors.secondary.main },
    { year: '2018', title: 'National Excellence Award', desc: 'Preston received the National School of Excellence Award from the Federal Ministry of Education — recognition of 19 years of relentless academic pursuit.', Icon: EmojiEventsIcon, color: colors.primary.dark },
    { year: '2024', title: 'Today & Beyond', desc: "With over 3,000 students, 200+ staff and 25 years of proven results, we continue shaping Nigeria's next generation of confident, capable leaders.", Icon: RocketLaunchIcon, color: colors.secondary.dark },
];

// ── Single milestone card
const MilestoneCard = ({ m, i, visible }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = m.Icon;

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{ animation: visible ? `hs_fadeUp 0.7s ease ${i * 0.1 + 0.2}s both` : 'none', height: '100%' }}
        >
            <Box sx={{
                position: 'relative',
                bgcolor: colors.background.paper,
                borderRadius: '20px',
                overflow: 'hidden',
                border: `1px solid ${hovered ? m.color + '66' : colors.divider}`,
                boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.14), 0 0 0 1px ${m.color}33` : '0 4px 20px rgba(0,0,0,0.06)',
                transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.35s ease',
                height: '100%',
            }}>
                {/* Top color bar — expands on hover */}
                <Box sx={{
                    height: 4,
                    background: `linear-gradient(90deg, ${m.color}, ${m.color}88)`,
                    width: hovered ? '100%' : '40%',
                    transition: 'width 0.4s ease',
                }} />

                {/* Faded year watermark */}
                <Typography sx={{
                    position: 'absolute', top: 8, right: 16,
                    fontFamily: typography.fontFamily.accent,
                    fontSize: '5rem', fontWeight: typography.fontWeight.black,
                    color: m.color, opacity: hovered ? 0.1 : 0.06,
                    lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                    transition: 'opacity 0.3s ease',
                }}>
                    {m.year}
                </Typography>

                <Box sx={{ p: { xs: 3, md: 3.5 }, position: 'relative', zIndex: 1 }}>

                    {/* Icon box + year badge row */}
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                        <Box sx={{
                            width: 52, height: 52, borderRadius: '14px',
                            bgcolor: m.color + '18', border: `1px solid ${m.color}33`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            transform: hovered ? 'rotate(8deg) scale(1.1)' : 'rotate(0) scale(1)',
                            animation: hovered ? 'hs_glow 2s ease infinite' : 'none',
                        }}>
                            <Icon sx={{ fontSize: 26, color: m.color }} />
                        </Box>

                        <Box sx={{
                            bgcolor: hovered ? m.color : 'transparent',
                            border: `2px solid ${m.color}`,
                            borderRadius: '8px', px: 1.5, py: 0.5,
                            transition: 'all 0.3s ease',
                        }}>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.black,
                                color: hovered ? 'white' : m.color, letterSpacing: 1,
                                transition: 'color 0.3s ease',
                            }}>
                                {m.year}
                            </Typography>
                        </Box>
                    </Stack>

                    {/* Divider — widens on hover */}
                    <Box sx={{ height: 2, bgcolor: m.color, borderRadius: 1, mb: 2, width: hovered ? '50px' : '28px', transition: 'width 0.3s ease' }} />

                    <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.3, mb: 1.5 }}>
                        {m.title}
                    </Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.8 }}>
                        {m.desc}
                    </Typography>
                </Box>

                {/* Bottom shimmer on hover */}
                {hovered && (
                    <Box sx={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
                        background: `linear-gradient(90deg, transparent, ${m.color}, transparent)`,
                        backgroundSize: '400px 100%',
                        animation: 'hs_shimmer 2s linear infinite',
                    }} />
                )}
            </Box>
        </Box>
    );
};

const HistoryTab = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.background.default }}>
                <Container maxWidth="xl">

                    {/* ── Intro: text left + image right */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: { xs: 6, md: 10 },
                        alignItems: 'center',
                        mb: { xs: 10, md: 14 },
                    }}>
                        <Box sx={{ animation: visible ? 'hs_fadeLeft 0.8s ease both' : 'none' }}>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                    Our Story
                                </Typography>
                            </Stack>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.8rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.2, mb: 3 }}>
                                25 Years of Shaping Futures
                            </Typography>
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9, mb: 2 }}>
                                What started as a humble dream in 1999 has grown into one of Nigeria's most respected secondary schools.
                                Our founder believed that every Nigerian child deserved access to a world-class education — and that belief has never wavered.
                            </Typography>
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9 }}>
                                From 12 students in a single classroom to a thriving community of over 3,000, every chapter of our story
                                has been written by the students, staff and families who dared to dream big.
                            </Typography>
                        </Box>

                        <Box sx={{ position: 'relative', animation: visible ? 'hs_fadeRight 0.8s ease 0.2s both' : 'none' }}>
                            <Box component="img" src="/about-history.jpg" alt="School history"
                                sx={{ width: '100%', height: { xs: 280, md: 420 }, objectFit: 'cover', borderRadius: '16px', display: 'block', boxShadow: '0 24px 60px rgba(0,0,0,0.15)' }}
                            />
                            <Box sx={{ position: 'absolute', top: 20, left: -20, right: 20, bottom: -20, border: `2px solid ${colors.secondary.main}`, borderRadius: '16px', zIndex: -1, opacity: 0.35 }} />
                            <Box sx={{
                                position: 'absolute', top: -16, right: -16,
                                bgcolor: colors.secondary.main, borderRadius: '50%',
                                width: 90, height: 90,
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                boxShadow: `0 8px 24px rgba(212,160,23,0.4)`,
                                animation: 'hs_float 4s ease-in-out infinite',
                            }}>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.black, color: colors.primary.dark, lineHeight: 1 }}>1999</Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', fontWeight: typography.fontWeight.bold, color: colors.primary.dark, letterSpacing: 1 }}>FOUNDED</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* ── Milestones header */}
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, animation: visible ? 'hs_fadeUp 0.7s ease 0.1s both' : 'none' }}>
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 80 }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                Key Milestones
                            </Typography>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 80 }} />
                        </Stack>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.2, mb: 1.5 }}>
                            A Journey Marked by Greatness
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}>
                            Six defining moments that shaped 25 years of building something extraordinary.
                        </Typography>
                    </Box>

                    {/* ── Milestones grid — 3 cols desktop, 2 tablet, 1 mobile */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                        gap: 3,
                        mb: { xs: 8, md: 12 },
                    }}>
                        {milestones.map((m, i) => (
                            <MilestoneCard key={m.year} m={m} i={i} visible={visible} />
                        ))}
                    </Box>

                    {/* ── Bottom stats strip */}
                    <Box sx={{
                        bgcolor: colors.primary.dark,
                        borderRadius: '20px',
                        p: { xs: 4, md: 5 },
                        position: 'relative', overflow: 'hidden',
                        animation: visible ? 'hs_fadeUp 0.8s ease 0.7s both' : 'none',
                        '&::before': {
                            content: '""', position: 'absolute', inset: 0,
                            backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`,
                            backgroundSize: '24px 24px',
                        },
                    }}>
                        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`, backgroundSize: '400px 100%', animation: 'hs_shimmer 3s linear infinite' }} />
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr 1fr' },
                            gap: { xs: 4, md: 0 },
                            position: 'relative', zIndex: 1, textAlign: 'center',
                        }}>
                            {[
                                { value: '25+', label: 'Years of Excellence' },
                                { value: '3,000+', label: 'Students Enrolled' },
                                { value: '100%', label: 'WAEC Pass Rate' },
                                { value: '10,000+', label: 'Alumni Worldwide' },
                            ].map((stat, i) => (
                                <Box key={stat.label} sx={{
                                    borderRight: { sm: i < 3 ? `1px solid rgba(255,255,255,0.08)` : 'none' },
                                    px: { sm: 3 },
                                    animation: visible ? `hs_fadeUp 0.6s ease ${i * 0.1 + 0.8}s both` : 'none',
                                }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' }, fontWeight: typography.fontWeight.black, color: colors.secondary.main, lineHeight: 1, mb: 0.5 }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.45)', letterSpacing: 1, textTransform: 'uppercase' }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                </Container>
            </Box>
        </>
    );
};

export default HistoryTab;
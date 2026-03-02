import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes ad_heroIn {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ad_lineGrow {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes ad_cardIn {
    from { opacity: 0; transform: translateY(48px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ad_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes ad_float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes ad_pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,160,23,0.5); }
    50%       { box-shadow: 0 0 0 12px rgba(212,160,23,0); }
  }
  @keyframes ad_countUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const cards = [
    {
        id: 'apply',
        icon: HowToRegIcon,
        number: '01',
        title: 'How to Apply',
        desc: 'A simple step-by-step guide to applying for a place at Preston International School.',
        img: '/image.jpg',
        tag: 'Get Started',
        color: colors.primary.main,
        path: '/admissions/apply',
        stat: { value: '4 Steps', label: 'Simple Process' },
    },
    {
        id: 'requirements',
        icon: ChecklistIcon,
        number: '02',
        title: 'Entry Requirements',
        desc: 'Find out exactly what documents and qualifications are needed to apply for each level.',
        img: '/admissions-requirement.jpg',
        tag: 'Requirements',
        color: colors.secondary.dark,
        path: '/admissions/requirements',
        stat: { value: 'JSS & SS', label: 'Entry Levels' },
    },
    {
        id: 'faqs',
        icon: HelpOutlineIcon,
        number: '03',
        title: 'FAQs',
        desc: 'Answers to the most common questions parents and students ask about joining Preston.',
        img: '/admissions-faqs.jpg',
        tag: 'Got Questions?',
        color: colors.primary.dark,
        path: '/admissions/faqs',
        stat: { value: '20+', label: 'Questions Answered' },
    },
    {
        id: 'apply-now',
        icon: EditNoteIcon,
        number: '04',
        title: 'Apply Now',
        desc: 'Ready to join the Preston family? Start your application for the 2026/2027 session today.',
        img: '/admissions-cta.jpg',
        tag: '2026/2027 Open',
        color: colors.secondary.main,
        path: '/admissions/apply',
        stat: { value: 'July 31', label: 'Deadline' },
        highlight: true,
    },
];

// ── Deadline countdown banner data
const deadline = { day: 31, month: 6, year: 2026 }; // July 31 2026 (month is 0-indexed)

const getDaysLeft = () => {
    const now = new Date();
    const target = new Date(deadline.year, deadline.month, deadline.day);
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
};

// ── Single card
const AdmissionCard = ({ card, index, visible }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const Icon = card.icon;

    return (
        <Box
            onClick={() => navigate(card.path)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                height: { xs: 320, md: index === 3 ? 420 : 360 },
                animation: visible ? `ad_cardIn 0.7s ease ${index * 0.1 + 0.2}s both` : 'none',
                transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hovered
                    ? `0 28px 70px rgba(0,0,0,0.28), 0 0 0 2px ${card.color}66`
                    : '0 8px 30px rgba(0,0,0,0.14)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
            }}
        >
            {/* BG image */}
            <Box component="img" src={card.img} alt={card.title}
                sx={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    transform: hovered ? 'scale(1.07)' : 'scale(1)',
                }}
            />

            {/* Gradient */}
            <Box sx={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(160deg, ${card.color}CC 0%, ${card.color}88 30%, rgba(10,20,50,0.6) 60%, rgba(10,20,50,0.95) 100%)`,
                opacity: hovered ? 0.92 : 0.85,
                transition: 'opacity 0.35s ease',
            }} />

            {/* Top: number + tag */}
            <Box sx={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: '3.5rem', fontWeight: typography.fontWeight.black, color: 'rgba(255,255,255,0.12)', lineHeight: 1, userSelect: 'none' }}>
                    {card.number}
                </Typography>
                <Box sx={{ bgcolor: card.highlight ? colors.secondary.main : 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: `1px solid ${card.highlight ? colors.secondary.dark : 'rgba(255,255,255,0.2)'}`, px: 1.5, py: 0.5, borderRadius: '6px', animation: card.highlight ? 'ad_pulse 2.2s ease infinite' : 'none' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: card.highlight ? colors.primary.dark : 'white', letterSpacing: 1.5, textTransform: 'uppercase' }}>
                        {card.tag}
                    </Typography>
                </Box>
            </Box>

            {/* Bottom: content */}
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3 }}>
                {/* Stat pill */}
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: card.color, px: 1.5, py: 0.5, borderRadius: '6px', mb: 1.5, opacity: hovered ? 1 : 0.8, transform: hovered ? 'translateY(0)' : 'translateY(6px)', transition: 'all 0.3s ease' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: card.highlight ? colors.primary.dark : 'white' }}>{card.stat.value}</Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', color: card.highlight ? colors.primary.dark + '99' : 'rgba(255,255,255,0.8)', letterSpacing: 1 }}>{card.stat.label}</Typography>
                </Box>

                {/* Icon + title */}
                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1 }}>
                    <Box sx={{ width: 38, height: 38, borderRadius: '10px', bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s ease', transform: hovered ? 'rotate(8deg)' : 'rotate(0)' }}>
                        <Icon sx={{ fontSize: 20, color: 'white' }} />
                    </Box>
                    <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: 'white', lineHeight: 1.2 }}>
                        {card.title}
                    </Typography>
                </Stack>

                {/* Gold underline */}
                <Box sx={{ height: 2, bgcolor: card.highlight ? colors.primary.dark : colors.secondary.main, borderRadius: 1, mb: 1.5, width: hovered ? '60px' : '30px', transition: 'width 0.3s ease' }} />

                {/* Description */}
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, mb: 2, maxHeight: hovered ? '80px' : '0px', overflow: 'hidden', opacity: hovered ? 1 : 0, transition: 'all 0.35s ease' }}>
                    {card.desc}
                </Typography>

                {/* CTA */}
                <Stack direction="row" alignItems="center" gap={1} sx={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s ease' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: card.highlight ? colors.secondary.light : colors.secondary.light, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                        {card.highlight ? 'Start Application' : 'Learn More'}
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.light }} />
                </Stack>
            </Box>
        </Box>
    );
};

// ── Main Page
const AdmissionsPage = () => {
    const [visible, setVisible] = useState(false);
    const [daysLeft] = useState(getDaysLeft());
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    return (
        <>
            <style>{keyframes}</style>

            {/* ══════════════════
          HERO
          ══════════════════ */}
            <Box sx={{ position: 'relative', bgcolor: colors.primary.dark, overflow: 'hidden', py: { xs: 10, md: 14 } }}>
                {/* Dot grid */}
                <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}14 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px', pointerEvents: 'none' }} />
                {/* Rings */}
                <Box sx={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', border: `1px solid ${colors.secondary.main}12`, pointerEvents: 'none' }} />
                <Box sx={{ position: 'absolute', top: -60, right: -60, width: 340, height: 340, borderRadius: '50%', border: `1px solid ${colors.secondary.main}08`, pointerEvents: 'none' }} />
                {/* Glow */}
                <Box sx={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', bgcolor: colors.secondary.dark, opacity: 0.1, filter: 'blur(60px)', pointerEvents: 'none' }} />
                {/* Watermark */}
                <Typography sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: typography.fontFamily.accent, fontSize: { xs: '6rem', md: '13rem' }, fontWeight: typography.fontWeight.black, color: colors.primary.light, opacity: 0.04, whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
                    ADMISSIONS
                </Typography>
                {/* Shimmer top */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`, backgroundSize: '400px 100%', animation: 'ad_shimmer 3s linear infinite' }} />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Breadcrumb */}
                    <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, animation: visible ? 'ad_heroIn 0.6s ease 0.1s both' : 'none' }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.35)', letterSpacing: 1 }}>Home</Typography>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold, letterSpacing: 1 }}>Admissions</Typography>
                    </Stack>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
                        {/* Left */}
                        <Box>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2.5, animation: visible ? 'ad_heroIn 0.6s ease 0.2s both' : 'none' }}>
                                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                    Admissions 2026/2027
                                </Typography>
                            </Stack>

                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.6rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1, animation: visible ? 'ad_heroIn 0.6s ease 0.3s both' : 'none' }}>
                                Your Child's Future
                            </Typography>
                            <Box sx={{ position: 'relative', display: 'inline-block', mb: 3, animation: visible ? 'ad_heroIn 0.6s ease 0.35s both' : 'none' }}>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['3xl'], md: '3.6rem' }, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, lineHeight: 1.15 }}>
                                    Starts Here.
                                </Typography>
                                <Box sx={{ position: 'absolute', bottom: -2, left: 0, height: 3, bgcolor: colors.secondary.main, borderRadius: 2, animation: visible ? 'ad_lineGrow 0.9s ease 0.7s both' : 'none', width: visible ? '100%' : 0 }} />
                            </Box>

                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 480, mb: 4, animation: visible ? 'ad_heroIn 0.6s ease 0.45s both' : 'none' }}>
                                Applications are now open for the 2026/2027 academic session.
                                Limited spaces are available — secure your child's place at Preston International School today.
                            </Typography>

                            {/* Quick stats */}
                            <Stack direction="row" gap={4} sx={{ animation: visible ? 'ad_heroIn 0.6s ease 0.55s both' : 'none' }}>
                                {[
                                    { value: 'Open', label: 'Applications' },
                                    { value: 'July 31', label: 'Deadline' },
                                    { value: 'JSS & SS', label: 'Entry Levels' },
                                ].map((s) => (
                                    <Box key={s.label}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.secondary.main, lineHeight: 1 }}>{s.value}</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', mt: 0.4 }}>{s.label}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        {/* Right — floating image */}
                        <Box sx={{ position: 'relative', display: { xs: 'none', md: 'block' }, animation: visible ? 'ad_heroIn 0.8s ease 0.3s both' : 'none' }}>
                            <Box component="img" src="/admissions-hero.jpg" alt="Admissions"
                                sx={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: '20px', display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', animation: 'ad_float 6s ease-in-out infinite' }}
                            />
                            <Box sx={{ position: 'absolute', top: 20, left: -20, right: 20, bottom: -20, border: `2px solid ${colors.secondary.main}44`, borderRadius: '20px', zIndex: -1 }} />

                            {/* Deadline badge */}
                            <Box sx={{
                                position: 'absolute', bottom: -16, left: -16,
                                bgcolor: colors.secondary.main, borderRadius: '14px',
                                px: 3, py: 2,
                                boxShadow: `0 12px 32px rgba(212,160,23,0.45)`,
                                animation: 'ad_pulse 2.5s ease infinite',
                            }}>
                                <Stack direction="row" alignItems="center" gap={1.2}>
                                    <AccessTimeIcon sx={{ color: colors.primary.dark, fontSize: 20 }} />
                                    <Box>
                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.black, color: colors.primary.dark, lineHeight: 1 }}>
                                            {daysLeft}
                                        </Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: colors.primary.dark + 'BB', letterSpacing: 1, textTransform: 'uppercase' }}>
                                            Days Left
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ══════════════════
          SECTION LABEL
          ══════════════════ */}
            <Box sx={{ bgcolor: colors.background.default, pt: { xs: 8, md: 10 }, pb: 2 }}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', animation: visible ? 'ad_heroIn 0.7s ease 0.6s both' : 'none' }}>
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                How It Works
                            </Typography>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                        </Stack>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1.5 }}>
                            Everything You Need to Know
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, maxWidth: 480, mx: 'auto', lineHeight: 1.8 }}>
                            Click any card below to get the full details on that part of our admissions process.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* ══════════════════
          CARDS GRID
          ══════════════════ */}
            <Box sx={{ bgcolor: colors.background.default, py: { xs: 6, md: 8 } }}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                        gap: 3,
                        // Last card (Apply Now) spans full width on mobile, 2 cols on tablet
                        '& > :last-child': {
                            gridColumn: { xs: '1', sm: '1 / span 2', md: '4 / span 1' },
                        },
                    }}>
                        {cards.map((card, i) => (
                            <AdmissionCard key={card.id} card={card} index={i} visible={visible} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default AdmissionsPage;
import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors, typography } from '../../../theme';

// ── Keyframes
const keyframes = `
  @keyframes ql_fadeUp {
    from { opacity: 0; transform: translateY(50px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ql_headerIn {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ql_lineExpand {
    from { width: 0; }
    to   { width: 48px; }
  }
  @keyframes ql_iconSpin {
    from { transform: rotate(-15deg) scale(0.8); opacity: 0; }
    to   { transform: rotate(0deg)  scale(1);   opacity: 1; }
  }
  @keyframes ql_shimmer {
    0%   { background-position: -300px 0; }
    100% { background-position: 300px 0; }
  }
  @keyframes ql_borderGlow {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 1; }
  }
`;

const cards = [
    {
        icon: MenuBookIcon,
        number: '01',
        title: 'Academics',
        desc: 'Rigorous WAEC & Cambridge-aligned curriculum from JSS1 to SS3 — building the sharpest minds.',
        href: '/academics',
        tag: 'Learn More',
    },
    {
        icon: HowToRegIcon,
        number: '02',
        title: 'Admissions',
        desc: 'Open for 2026/2027 session. Apply now and secure your child\'s place at Preston.',
        href: '/admissions',
        tag: 'Apply Now',
        highlight: true,
    },
    {
        icon: EmojiEventsIcon,
        number: '03',
        title: 'Campus Life',
        desc: 'Sports, clubs, arts and boarding — a vibrant, full life beyond the classroom.',
        href: '/campus-life',
        tag: 'Explore',
    },
    {
        icon: CameraAltIcon,
        number: '04',
        title: 'News & Gallery',
        desc: 'Stay updated with the latest events, achievements and stories from our community.',
        href: '/news',
        tag: 'View All',
    },
];

// ── Single Card
const QuickCard = ({ card, index, visible }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = card.icon;

    return (
        <Box
            component="a"
            href={card.href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                position: 'relative',
                height: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                animation: visible ? `ql_fadeUp 0.7s ease ${index * 0.12 + 0.3}s both` : 'none',

                // Base: dark navy
                bgcolor: colors.primary.dark,
                border: `1px solid rgba(255,255,255,0.06)`,
                transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                boxShadow: hovered
                    ? `0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px ${card.highlight ? colors.secondary.main : colors.primary.light}55`
                    : '0 4px 24px rgba(0,0,0,0.2)',
                transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
                borderColor: hovered
                    ? card.highlight ? colors.secondary.main : `${colors.primary.light}88`
                    : 'rgba(255,255,255,0.06)',
            }}
        >
            {/* ── Top shimmer gold line (highlight card only — always visible) */}
            {card.highlight && (
                <Box sx={{
                    height: 3,
                    background: `linear-gradient(90deg, ${colors.secondary.dark}, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, ${colors.secondary.dark})`,
                    backgroundSize: '300px 100%',
                    animation: 'ql_shimmer 2.5s linear infinite',
                    flexShrink: 0,
                }} />
            )}

            {/* ── Glow circle behind icon */}
            <Box sx={{
                position: 'absolute',
                top: card.highlight ? -30 : -40,
                right: -40,
                width: 160, height: 160,
                borderRadius: '50%',
                bgcolor: card.highlight ? colors.secondary.main : colors.primary.light,
                opacity: hovered ? 0.12 : 0.05,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
            }} />

            {/* ── Card Body */}
            <Box sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

                {/* Number + Icon row */}
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>

                    {/* Big faded number */}
                    <Typography sx={{
                        fontFamily: typography.fontFamily.accent,
                        fontSize: '3.5rem',
                        fontWeight: typography.fontWeight.black,
                        color: card.highlight ? colors.secondary.main : colors.primary.light,
                        opacity: hovered ? 0.5 : 0.15,
                        lineHeight: 1,
                        transition: 'opacity 0.35s ease',
                        userSelect: 'none',
                    }}>
                        {card.number}
                    </Typography>

                    {/* Icon box */}
                    <Box sx={{
                        width: 52, height: 52,
                        borderRadius: '12px',
                        bgcolor: card.highlight ? colors.secondary.main : `${colors.primary.light}22`,
                        border: `1px solid ${card.highlight ? colors.secondary.dark : `${colors.primary.light}33`}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.35s ease',
                        transform: hovered ? 'rotate(8deg) scale(1.1)' : 'rotate(0) scale(1)',
                        animation: visible ? `ql_iconSpin 0.6s ease ${index * 0.12 + 0.5}s both` : 'none',
                    }}>
                        <Icon sx={{
                            fontSize: 26,
                            color: card.highlight ? colors.primary.dark : colors.secondary.main,
                        }} />
                    </Box>
                </Stack>

                {/* Title */}
                <Typography sx={{
                    fontFamily: typography.fontFamily.heading,
                    fontSize: typography.fontSize.lg,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.text.light,
                    mb: 1.5,
                    transition: 'color 0.3s ease',
                }}>
                    {card.title}
                </Typography>

                {/* Animated gold line under title */}
                <Box sx={{
                    height: 2,
                    bgcolor: colors.secondary.main,
                    borderRadius: 1,
                    mb: 2,
                    width: hovered ? '48px' : '24px',
                    transition: 'width 0.35s ease',
                }} />

                {/* Description */}
                <Typography sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.regular,
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.75,
                    flexGrow: 1,
                    mb: 3,
                }}>
                    {card.desc}
                </Typography>

                {/* CTA row */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        pt: 2,
                        borderTop: `1px solid rgba(255,255,255,0.07)`,
                    }}
                >
                    <Typography sx={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.xs,
                        fontWeight: typography.fontWeight.bold,
                        color: card.highlight ? colors.secondary.main : 'rgba(255,255,255,0.4)',
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                        transition: 'color 0.3s ease',
                        ...(hovered && { color: card.highlight ? colors.secondary.light : colors.secondary.main }),
                    }}>
                        {card.tag}
                    </Typography>

                    <Box sx={{
                        width: 32, height: 32,
                        borderRadius: '50%',
                        border: `1px solid ${hovered
                            ? card.highlight ? colors.secondary.main : `${colors.primary.light}88`
                            : 'rgba(255,255,255,0.1)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        bgcolor: hovered
                            ? card.highlight ? colors.secondary.main : `${colors.primary.light}22`
                            : 'transparent',
                        transform: hovered ? 'rotate(-45deg)' : 'rotate(0)',
                    }}>
                        <ArrowForwardIcon sx={{
                            fontSize: 14,
                            color: hovered
                                ? card.highlight ? colors.primary.dark : colors.secondary.main
                                : 'rgba(255,255,255,0.3)',
                            transition: 'color 0.3s ease',
                        }} />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

// ── Main QuickLinks
const QuickLinks = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>

            <Box
                ref={ref}
                sx={{
                    position: 'relative',
                    bgcolor: colors.background.default,
                    py: { xs: 8, md: 12 },
                    overflow: 'hidden',
                }}
            >
                {/* ── Background pattern — subtle dots */}
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary.dark}22 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                    pointerEvents: 'none',
                    zIndex: 0,
                }} />

                {/* ── Big faded background word */}
                <Typography sx={{
                    position: 'absolute',
                    bottom: '-5%',
                    right: '-2%',
                    fontFamily: typography.fontFamily.accent,
                    fontSize: { xs: '10rem', md: '16rem' },
                    fontWeight: typography.fontWeight.black,
                    color: colors.primary.dark,
                    opacity: 0.04,
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}>
                    EXPLORE
                </Typography>

                <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1400, mx: 'auto', px: { xs: 3, md: 6 } }}>

                    {/* ── Section Header */}
                    <Box
                        sx={{
                            textAlign: 'center',
                            mb: { xs: 6, md: 8 },
                            animation: visible ? 'ql_headerIn 0.7s ease both' : 'none',
                        }}
                    >
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2.5 }}>
                            <Box sx={{
                                height: 1,
                                bgcolor: colors.secondary.main,
                                opacity: 0.4,
                                flex: 1,
                                maxWidth: 80,
                            }} />
                            <Typography sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.xs,
                                fontWeight: typography.fontWeight.bold,
                                color: colors.secondary.main,
                                letterSpacing: 3,
                                textTransform: 'uppercase',
                            }}>
                                Explore Preston
                            </Typography>
                            <Box sx={{
                                height: 1,
                                bgcolor: colors.secondary.main,
                                opacity: 0.4,
                                flex: 1,
                                maxWidth: 80,
                            }} />
                        </Stack>

                        <Typography sx={{
                            fontFamily: typography.fontFamily.accent,
                            fontSize: { xs: typography.fontSize['2xl'], md: '2.8rem' },
                            fontWeight: typography.fontWeight.bold,
                            color: colors.primary.dark,
                            lineHeight: 1.2,
                            mb: 1.5,
                        }}>
                            Everything We Have to Offer
                        </Typography>

                        <Typography sx={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.base,
                            color: colors.text.secondary,
                            maxWidth: 480,
                            mx: 'auto',
                            lineHeight: 1.8,
                        }}>
                            From world-class academics to vibrant campus life — Preston is built for greatness.
                        </Typography>
                    </Box>

                    {/* ── Cards Grid */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr 1fr',
                        },
                        gap: 3,
                    }}>
                        {cards.map((card, i) => (
                            <QuickCard key={card.title} card={card} index={i} visible={visible} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default QuickLinks;
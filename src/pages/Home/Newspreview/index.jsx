import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsIcon from '@mui/icons-material/Sports';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { colors, typography } from '../../../theme';

// ── Keyframes
const keyframes = `
  @keyframes np_fadeUp {
    from { opacity: 0; transform: translateY(50px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes np_scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes np_headerIn {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes np_tagSlide {
    from { opacity: 0; transform: translateX(-12px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes np_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes np_pulse {
    0%, 100% { transform: scale(1);    opacity: 0.7; }
    50%       { transform: scale(1.08); opacity: 1; }
  }
`;

const news = [
    {
        img: '/news1.jpg',
        tag: 'Achievement',
        tagIcon: EmojiEventsIcon,
        date: 'Feb 14, 2026',
        readTime: '3 min read',
        title: 'Preston Students Sweep National Science Olympiad',
        excerpt: 'Our SS2 students claimed gold, silver and bronze at the national competition held in Abuja — a historic first for the school.',
        featured: true,   // ← first card is big/featured
    },
    {
        img: '/news2.jpg',
        tag: 'Sports',
        tagIcon: SportsIcon,
        date: 'Jan 30, 2026',
        readTime: '2 min read',
        title: 'Our Football Team Wins the State Championship',
        excerpt: 'After a thrilling final, Preston FC lifts the state cup for the third year running.',
    },
    {
        img: '/news3.jpg',
        tag: 'Events',
        tagIcon: CelebrationIcon,
        date: 'Jan 18, 2026',
        readTime: '4 min read',
        title: 'Annual Cultural Day: A Celebration of Heritage',
        excerpt: 'Students from 12 states showcased their rich cultural heritage in an unforgettable display.',
    },
];

const tagConfig = {
    Achievement: { bg: colors.secondary.dark, light: colors.secondary.light },
    Sports: { bg: colors.primary.main, light: colors.primary.light },
    Events: { bg: colors.primary.dark, light: '#7BA7D4' },
};

// ── Featured (large) card
const FeaturedCard = ({ item, visible }) => {
    const [hovered, setHovered] = useState(false);
    const TagIcon = item.tagIcon;
    const tag = tagConfig[item.tag];

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                position: 'relative',
                height: { xs: 380, md: '100%' },
                minHeight: { md: 520 },
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                animation: visible ? 'np_scaleIn 0.8s ease 0.1s both' : 'none',
                boxShadow: hovered
                    ? '0 32px 80px rgba(0,0,0,0.35)'
                    : '0 8px 32px rgba(0,0,0,0.18)',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
            }}
        >
            {/* BG Image */}
            <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 6s ease',
                    transform: hovered ? 'scale(1.06)' : 'scale(1)',
                }}
            />

            {/* Gradient overlay — stronger at bottom */}
            <Box sx={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(
          180deg,
          rgba(10,20,50,0.15) 0%,
          rgba(10,20,50,0.5)  40%,
          rgba(10,20,50,0.95) 100%
        )`,
            }} />

            {/* Top: Tag */}
            <Box sx={{
                position: 'absolute', top: 20, left: 20,
                display: 'flex', alignItems: 'center', gap: 0.8,
                bgcolor: tag.bg,
                px: 1.5, py: 0.6,
                borderRadius: '6px',
                animation: visible ? 'np_tagSlide 0.6s ease 0.4s both' : 'none',
            }}>
                <TagIcon sx={{ fontSize: 13, color: 'white' }} />
                <Typography sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.xs,
                    fontWeight: typography.fontWeight.bold,
                    color: 'white',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                }}>
                    {item.tag}
                </Typography>
            </Box>

            {/* Bottom: Content */}
            <Box sx={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                p: { xs: 3, md: 4 },
            }}>
                {/* Date + read time */}
                <Stack direction="row" gap={2} alignItems="center" sx={{ mb: 1.5 }}>
                    <Stack direction="row" alignItems="center" gap={0.6}>
                        <CalendarTodayIcon sx={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.5)' }}>
                            {item.date}
                        </Typography>
                    </Stack>
                    <Box sx={{ width: 3, height: 3, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)' }} />
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.5)' }}>
                        {item.readTime}
                    </Typography>
                </Stack>

                <Typography sx={{
                    fontFamily: typography.fontFamily.accent,
                    fontSize: { xs: typography.fontSize.xl, md: typography.fontSize['2xl'] },
                    fontWeight: typography.fontWeight.bold,
                    color: colors.text.light,
                    lineHeight: 1.25,
                    mb: 1.5,
                }}>
                    {item.title}
                </Typography>

                <Typography sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.sm,
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                    mb: 2.5,
                    display: { xs: 'none', md: 'block' },
                }}>
                    {item.excerpt}
                </Typography>

                {/* Read more */}
                <Stack direction="row" alignItems="center" gap={1}
                    sx={{
                        color: colors.secondary.main,
                        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                        Read Story
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main }} />
                </Stack>
            </Box>
        </Box>
    );
};

// ── Small side card
const SmallCard = ({ item, index, visible }) => {
    const [hovered, setHovered] = useState(false);
    const TagIcon = item.tagIcon;
    const tag = tagConfig[item.tag];

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                display: 'flex',
                gap: 2,
                bgcolor: colors.background.paper,
                borderRadius: '14px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: `1px solid ${hovered ? colors.secondary.main + '44' : colors.divider}`,
                boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.05)',
                transform: hovered ? 'translateX(6px)' : 'translateX(0)',
                transition: 'all 0.3s ease',
                animation: visible ? `np_fadeUp 0.7s ease ${0.2 + index * 0.15}s both` : 'none',
                flexShrink: 0,
            }}
        >
            {/* Left color bar */}
            <Box sx={{
                width: 4, flexShrink: 0,
                bgcolor: tag.bg,
                borderRadius: '14px 0 0 14px',
                transition: 'width 0.3s ease',
                ...(hovered && { width: 6 }),
            }} />

            {/* Thumbnail */}
            <Box sx={{
                width: { xs: 90, md: 110 },
                flexShrink: 0,
                overflow: 'hidden',
                my: 2,
                borderRadius: '8px',
            }}>
                <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        minHeight: 90,
                        transition: 'transform 0.5s ease',
                        transform: hovered ? 'scale(1.08)' : 'scale(1)',
                    }}
                />
            </Box>

            {/* Content */}
            <Box sx={{ py: 2, pr: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>

                {/* Tag pill */}
                <Stack direction="row" alignItems="center" gap={0.6} sx={{ mb: 1 }}>
                    <Box sx={{
                        width: 6, height: 6, borderRadius: '50%',
                        bgcolor: tag.bg,
                        animation: 'np_pulse 2.5s ease infinite',
                    }} />
                    <Typography sx={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: '0.68rem',
                        fontWeight: typography.fontWeight.bold,
                        color: tag.bg,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                    }}>
                        {item.tag}
                    </Typography>
                </Stack>

                <Typography sx={{
                    fontFamily: typography.fontFamily.heading,
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.semiBold,
                    color: colors.text.primary,
                    lineHeight: 1.4,
                    mb: 1,
                    transition: 'color 0.3s ease',
                    ...(hovered && { color: colors.primary.main }),
                }}>
                    {item.title}
                </Typography>

                {/* Date */}
                <Stack direction="row" alignItems="center" gap={0.6}>
                    <CalendarTodayIcon sx={{ fontSize: 10, color: colors.text.disabled }} />
                    <Typography sx={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: '0.7rem',
                        color: colors.text.disabled,
                    }}>
                        {item.date}
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

// ── Main Component
const NewsPreview = () => {
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
                    bgcolor: colors.primary.dark,
                    py: { xs: 8, md: 12 },
                    overflow: 'hidden',
                }}
            >
                {/* ── Faded BG watermark */}
                <Typography sx={{
                    position: 'absolute',
                    top: '50%', left: '-2%',
                    transform: 'translateY(-50%)',
                    fontFamily: typography.fontFamily.accent,
                    fontSize: { xs: '8rem', md: '14rem' },
                    fontWeight: typography.fontWeight.black,
                    color: colors.primary.light,
                    opacity: 0.04,
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}>
                    NEWS
                </Typography>

                {/* ── Top gold shimmer line */}
                <Box sx={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)`,
                }} />

                <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1400, mx: 'auto', px: { xs: 3, md: 6 } }}>

                    {/* ── Section Header */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: { xs: 'flex-start', sm: 'center' },
                            justifyContent: 'space-between',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            mb: { xs: 5, md: 7 },
                            animation: visible ? 'np_headerIn 0.7s ease both' : 'none',
                        }}
                    >
                        <Box>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
                                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                <Typography sx={{
                                    fontFamily: typography.fontFamily.body,
                                    fontSize: typography.fontSize.xs,
                                    fontWeight: typography.fontWeight.bold,
                                    color: colors.secondary.main,
                                    letterSpacing: 3,
                                    textTransform: 'uppercase',
                                }}>
                                    Latest News
                                </Typography>
                            </Stack>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' },
                                fontWeight: typography.fontWeight.bold,
                                color: colors.text.light,
                                lineHeight: 1.2,
                            }}>
                                Stories from the
                                <Box component="span" sx={{ color: colors.secondary.main }}> Preston </Box>
                                Community
                            </Typography>
                        </Box>

                        <Button
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.sm,
                                fontWeight: typography.fontWeight.semiBold,
                                color: colors.secondary.main,
                                border: `1px solid ${colors.secondary.main}55`,
                                px: 2.5, py: 1,
                                borderRadius: '8px',
                                textTransform: 'none',
                                whiteSpace: 'nowrap',
                                flexShrink: 0,
                                transition: 'all 0.25s ease',
                                '&:hover': {
                                    bgcolor: colors.secondary.main,
                                    color: colors.primary.dark,
                                    borderColor: colors.secondary.main,
                                    boxShadow: `0 6px 20px rgba(212,160,23,0.3)`,
                                },
                                '& .MuiButton-endIcon': { transition: 'transform 0.2s' },
                                '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
                            }}
                        >
                            View All News
                        </Button>
                    </Box>

                    {/* ── Cards Layout: big left + 2 small right */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 3,
                        alignItems: 'stretch',
                    }}>
                        {/* Featured card — left */}
                        <FeaturedCard item={news[0]} visible={visible} />

                        {/* Small cards — right, stacked */}
                        <Stack gap={3} justifyContent="space-between">
                            {news.slice(1).map((item, i) => (
                                <SmallCard key={item.title} item={item} index={i} visible={visible} />
                            ))}

                            {/* Bottom CTA card */}
                            <Box
                                sx={{
                                    borderRadius: '14px',
                                    bgcolor: colors.primary.main,
                                    border: `1px solid ${colors.secondary.main}33`,
                                    p: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: 2,
                                    flexWrap: 'wrap',
                                    animation: visible ? 'np_fadeUp 0.7s ease 0.5s both' : 'none',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: colors.secondary.main,
                                        '& .cta-text': { color: colors.primary.dark },
                                        '& .cta-sub': { color: `${colors.primary.dark}99` },
                                        '& .cta-arrow': { bgcolor: colors.primary.dark, color: colors.secondary.main },
                                    },
                                }}
                            >
                                <Box>
                                    <Typography className="cta-text" sx={{
                                        fontFamily: typography.fontFamily.heading,
                                        fontSize: typography.fontSize.md,
                                        fontWeight: typography.fontWeight.bold,
                                        color: colors.text.light,
                                        mb: 0.4,
                                        transition: 'color 0.3s ease',
                                    }}>
                                        Never miss a story
                                    </Typography>
                                    <Typography className="cta-sub" sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.xs,
                                        color: 'rgba(255,255,255,0.55)',
                                        transition: 'color 0.3s ease',
                                    }}>
                                        Follow us on social media for daily updates
                                    </Typography>
                                </Box>
                                <Box
                                    className="cta-arrow"
                                    sx={{
                                        width: 40, height: 40, borderRadius: '50%',
                                        bgcolor: `${colors.secondary.main}22`,
                                        border: `1px solid ${colors.secondary.main}55`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <ArrowForwardIcon sx={{ fontSize: 16, color: colors.secondary.main }} />
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default NewsPreview;
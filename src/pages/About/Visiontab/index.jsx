import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes vm_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes vm_scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes vm_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`;

const pillars = [
    { icon: VisibilityIcon, title: 'Our Vision', color: colors.primary.main, desc: 'To be the leading centre of academic excellence and holistic development in West Africa — producing graduates who are globally competitive and deeply rooted in Nigerian values.' },
    { icon: TrackChangesIcon, title: 'Our Mission', color: colors.secondary.dark, desc: 'To nurture every student\'s intellectual, moral, creative, and physical potential through a rigorous, inclusive and inspiring learning environment led by exceptional educators.' },
    { icon: FavoriteIcon, title: 'Our Promise', color: colors.primary.dark, desc: 'Every child who walks through our gates is seen, heard and challenged to exceed their own expectations. We promise a school experience that shapes character for life.' },
    { icon: EmojiObjectsIcon, title: 'Our Approach', color: colors.primary.light, desc: 'We blend the best of the Cambridge and WAEC frameworks with a uniquely Nigerian spirit — producing thinkers, leaders and innovators ready for the 21st century.' },
];

const VisionTab = () => {
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
            <Box ref={ref}>

                {/* ── Top dark statement banner */}
                <Box sx={{
                    bgcolor: colors.primary.dark,
                    py: { xs: 8, md: 10 },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute', inset: 0,
                        backgroundImage: `radial-gradient(${colors.primary.light}18 1px, transparent 1px)`,
                        backgroundSize: '28px 28px',
                    },
                }}>
                    {/* Shimmer top line */}
                    <Box sx={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                        background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`,
                        backgroundSize: '400px 100%',
                        animation: 'vm_shimmer 3s linear infinite',
                    }} />

                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <Box sx={{ animation: visible ? 'vm_fadeUp 0.7s ease both' : 'none' }}>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.xs,
                                fontWeight: typography.fontWeight.bold,
                                color: colors.secondary.main,
                                letterSpacing: 3,
                                textTransform: 'uppercase',
                                mb: 3,
                            }}>
                                What We Stand For
                            </Typography>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: { xs: typography.fontSize['2xl'], md: '3rem' },
                                fontWeight: typography.fontWeight.bold,
                                color: colors.text.light,
                                lineHeight: 1.25,
                                mb: 3,
                            }}>
                                "Education is not the filling of a pail,
                                but the lighting of a fire."
                            </Typography>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.sm,
                                color: colors.secondary.main,
                                letterSpacing: 2,
                            }}>
                                — W.B. YEATS · THE PRESTON PHILOSOPHY
                            </Typography>
                        </Box>
                    </Container>
                </Box>

                {/* ── 4 Pillars grid */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">
                        <Box sx={{
                            textAlign: 'center', mb: { xs: 6, md: 8 },
                            animation: visible ? 'vm_fadeUp 0.7s ease 0.1s both' : 'none',
                        }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                    Vision & Mission
                                </Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                            </Stack>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' },
                                fontWeight: typography.fontWeight.bold,
                                color: colors.primary.dark,
                            }}>
                                Our Purpose, Defined
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                            gap: 3,
                        }}>
                            {pillars.map((p, i) => {
                                const Icon = p.icon;
                                return (
                                    <Box
                                        key={p.title}
                                        sx={{
                                            position: 'relative',
                                            bgcolor: colors.background.paper,
                                            borderRadius: '16px',
                                            p: { xs: 3.5, md: 5 },
                                            overflow: 'hidden',
                                            border: `1px solid ${colors.divider}`,
                                            transition: 'all 0.3s ease',
                                            animation: visible ? `vm_scaleIn 0.7s ease ${0.1 * i + 0.2}s both` : 'none',
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                boxShadow: `0 20px 50px rgba(0,0,0,0.1)`,
                                                borderColor: colors.secondary.main + '55',
                                                '& .pillar-icon-box': { bgcolor: p.color, transform: 'rotate(8deg) scale(1.1)' },
                                                '& .pillar-icon': { color: 'white' },
                                            },
                                            // Top colored border
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0, left: 0, right: 0,
                                                height: 3,
                                                bgcolor: p.color,
                                            },
                                        }}
                                    >
                                        {/* Big faded number bg */}
                                        <Typography sx={{
                                            position: 'absolute', bottom: -10, right: 10,
                                            fontFamily: typography.fontFamily.accent,
                                            fontSize: '7rem',
                                            fontWeight: typography.fontWeight.black,
                                            color: p.color,
                                            opacity: 0.06,
                                            lineHeight: 1,
                                            userSelect: 'none',
                                        }}>
                                            {String(i + 1).padStart(2, '0')}
                                        </Typography>

                                        <Stack direction="row" alignItems="flex-start" gap={2.5}>
                                            <Box
                                                className="pillar-icon-box"
                                                sx={{
                                                    width: 56, height: 56,
                                                    borderRadius: '14px',
                                                    bgcolor: p.color + '18',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    flexShrink: 0,
                                                    transition: 'all 0.3s ease',
                                                }}
                                            >
                                                <Icon className="pillar-icon" sx={{ fontSize: 26, color: p.color, transition: 'color 0.3s ease' }} />
                                            </Box>

                                            <Box>
                                                <Typography sx={{
                                                    fontFamily: typography.fontFamily.heading,
                                                    fontSize: typography.fontSize.lg,
                                                    fontWeight: typography.fontWeight.bold,
                                                    color: colors.primary.dark,
                                                    mb: 0.6,
                                                }}>
                                                    {p.title}
                                                </Typography>
                                                <Box sx={{ width: 32, height: 2, bgcolor: p.color, mb: 1.5 }} />
                                                <Typography sx={{
                                                    fontFamily: typography.fontFamily.body,
                                                    fontSize: typography.fontSize.sm,
                                                    color: colors.text.secondary,
                                                    lineHeight: 1.8,
                                                }}>
                                                    {p.desc}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default VisionTab;
import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FlagIcon from '@mui/icons-material/Flag';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes cv_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cv_iconPop {
    0%   { transform: scale(0.5) rotate(-10deg); opacity: 0; }
    70%  { transform: scale(1.15) rotate(3deg); }
    100% { transform: scale(1) rotate(0); opacity: 1; }
  }
  @keyframes cv_barGrow {
    from { width: 0; }
    to   { width: var(--bar-width); }
  }
`;

const values = [
    { icon: EmojiEventsIcon, label: 'Excellence', color: colors.secondary.main, strength: 98, desc: 'We pursue the highest standards in everything — academics, character and conduct.' },
    { icon: HandshakeIcon, label: 'Integrity', color: colors.primary.main, strength: 95, desc: 'We act with honesty and strong moral principles in all that we do.' },
    { icon: FlagIcon, label: 'Service', color: colors.primary.dark, strength: 90, desc: 'We are called to serve our community, our nation and one another.' },
    { icon: GroupsIcon, label: 'Community', color: colors.primary.light, strength: 92, desc: 'We celebrate diversity and build a family where every student belongs.' },
    { icon: LightbulbIcon, label: 'Innovation', color: colors.secondary.dark, strength: 88, desc: 'We embrace creative thinking and challenge students to solve real problems.' },
    { icon: AutoAwesomeIcon, label: 'Discipline', color: '#2E7D32', strength: 96, desc: 'We build the self-discipline that turns potential into achievement.' },
];

const CoreValuesTab = () => {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(null);
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
            <Box ref={ref} sx={{ bgcolor: colors.primary.dark, py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>

                {/* Dot pattern bg */}
                <Box sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary.light}12 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                    pointerEvents: 'none',
                }} />

                {/* Faded bg text */}
                <Typography sx={{
                    position: 'absolute', bottom: '-8%', right: '-2%',
                    fontFamily: typography.fontFamily.accent,
                    fontSize: { xs: '8rem', md: '14rem' },
                    fontWeight: typography.fontWeight.black,
                    color: colors.primary.light, opacity: 0.04,
                    userSelect: 'none', pointerEvents: 'none', lineHeight: 1,
                }}>
                    VALUES
                </Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                    {/* Header */}
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, animation: visible ? 'cv_fadeUp 0.7s ease both' : 'none' }}>
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                Core Values
                            </Typography>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                        </Stack>
                        <Typography sx={{
                            fontFamily: typography.fontFamily.accent,
                            fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' },
                            fontWeight: typography.fontWeight.bold,
                            color: colors.text.light,
                        }}>
                            The Principles We Live By
                        </Typography>
                    </Box>

                    {/* Values grid */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                        gap: 3,
                    }}>
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            const isHovered = hovered === i;

                            return (
                                <Box
                                    key={v.label}
                                    onMouseEnter={() => setHovered(i)}
                                    onMouseLeave={() => setHovered(null)}
                                    sx={{
                                        bgcolor: isHovered ? v.color : 'rgba(255,255,255,0.04)',
                                        border: `1px solid ${isHovered ? v.color : 'rgba(255,255,255,0.07)'}`,
                                        borderRadius: '16px',
                                        p: 3.5,
                                        cursor: 'default',
                                        transition: 'all 0.35s ease',
                                        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                                        boxShadow: isHovered ? `0 20px 50px ${v.color}44` : 'none',
                                        animation: visible ? `cv_fadeUp 0.7s ease ${0.1 * i + 0.1}s both` : 'none',
                                    }}
                                >
                                    {/* Icon */}
                                    <Box sx={{
                                        width: 56, height: 56,
                                        borderRadius: '14px',
                                        bgcolor: isHovered ? 'rgba(255,255,255,0.2)' : v.color + '22',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        mb: 2.5,
                                        transition: 'all 0.35s ease',
                                        animation: visible ? `cv_iconPop 0.6s ease ${0.1 * i + 0.3}s both` : 'none',
                                    }}>
                                        <Icon sx={{ fontSize: 26, color: isHovered ? 'white' : v.color, transition: 'color 0.35s ease' }} />
                                    </Box>

                                    <Typography sx={{
                                        fontFamily: typography.fontFamily.heading,
                                        fontSize: typography.fontSize.lg,
                                        fontWeight: typography.fontWeight.bold,
                                        color: isHovered ? 'white' : colors.text.light,
                                        mb: 0.8,
                                        transition: 'color 0.35s ease',
                                    }}>
                                        {v.label}
                                    </Typography>

                                    <Typography sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.sm,
                                        color: isHovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.45)',
                                        lineHeight: 1.7,
                                        mb: 2.5,
                                        transition: 'color 0.35s ease',
                                    }}>
                                        {v.desc}
                                    </Typography>

                                    {/* Strength bar */}
                                    <Box>
                                        <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.7 }}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.68rem', color: isHovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)', letterSpacing: 1, textTransform: 'uppercase', transition: 'color 0.35s ease' }}>
                                                Commitment
                                            </Typography>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.68rem', fontWeight: typography.fontWeight.bold, color: isHovered ? 'white' : v.color, transition: 'color 0.35s ease' }}>
                                                {v.strength}%
                                            </Typography>
                                        </Stack>
                                        <Box sx={{ height: 4, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                                            <Box sx={{
                                                height: '100%',
                                                borderRadius: 2,
                                                bgcolor: isHovered ? 'white' : v.color,
                                                width: visible ? `${v.strength}%` : 0,
                                                transition: `width 1s ease ${0.1 * i + 0.5}s, background-color 0.35s ease`,
                                            }} />
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default CoreValuesTab;
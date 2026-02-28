import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom'; 
import { colors, typography } from '../../../theme';

// ── Keyframes
const keyframes = `
  @keyframes cta_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cta_scaleIn {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes cta_shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }
  @keyframes cta_float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33%       { transform: translateY(-12px) rotate(2deg); }
    66%       { transform: translateY(-6px) rotate(-1deg); }
  }
  @keyframes cta_spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes cta_pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,160,23,0.4); }
    50%       { box-shadow: 0 0 0 16px rgba(212,160,23,0); }
  }
  @keyframes cta_countUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cta_lineGrow {
    from { width: 0; }
    to   { width: 100%; }
  }
`;

const perks = [
    'Cambridge & WAEC Curriculum',
    'Boarding & Day Options Available',
    'Scholarships for Exceptional Students',
    'Applications Close July 31, 2026',
];

const miniStats = [
    { icon: GroupsIcon, value: '3,000+', label: 'Students' },
    { icon: StarIcon, value: '98%', label: 'Pass Rate' },
    { icon: AccessTimeIcon, value: '25+', label: 'Years' },
];

const CTABanner = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();   // ← added

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
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
                    overflow: 'hidden',
                    bgcolor: colors.primary.dark,
                }}
            >
                {/* Decorative spinning rings */}
                <Box sx={{
                    position: 'absolute', top: -120, right: -120,
                    width: 500, height: 500, borderRadius: '50%',
                    border: `1px solid ${colors.secondary.main}18`,
                    animation: 'cta_spinSlow 30s linear infinite',
                    pointerEvents: 'none', zIndex: 0,
                }} />
                <Box sx={{
                    position: 'absolute', top: -60, right: -60,
                    width: 360, height: 360, borderRadius: '50%',
                    border: `1px solid ${colors.secondary.main}10`,
                    animation: 'cta_spinSlow 20s linear infinite reverse',
                    pointerEvents: 'none', zIndex: 0,
                }} />

                {/* Bottom left glow */}
                <Box sx={{
                    position: 'absolute', bottom: -100, left: -80,
                    width: 400, height: 400, borderRadius: '50%',
                    bgcolor: colors.primary.main, opacity: 0.25,
                    filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
                }} />

                {/* Faded BG word */}
                <Typography sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: typography.fontFamily.accent,
                    fontSize: { xs: '10rem', md: '18rem' },
                    fontWeight: typography.fontWeight.black,
                    color: colors.primary.light, opacity: 0.04,
                    whiteSpace: 'nowrap', userSelect: 'none',
                    pointerEvents: 'none', zIndex: 0, lineHeight: 1,
                }}>
                    ADMISSIONS
                </Typography>

                {/* Top shimmer bar */}
                <Box sx={{
                    bgcolor: colors.primary.main,
                    borderBottom: `1px solid rgba(255,255,255,0.06)`,
                    py: 1.5, position: 'relative', zIndex: 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                        background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`,
                        backgroundSize: '600px 100%',
                        animation: 'cta_shimmer 3s linear infinite',
                    },
                }} />

                <Box sx={{
                    position: 'relative', zIndex: 1,
                    maxWidth: 1400, mx: 'auto',
                    px: { xs: 3, md: 6 },
                    py: { xs: 8, md: 12 },
                }}>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: { xs: 6, md: 10 },
                        alignItems: 'center',
                    }}>

                        {/* LEFT: Main message */}
                        <Box sx={{ animation: visible ? 'cta_fadeUp 0.8s ease 0.1s both' : 'none' }}>

                            {/* Label */}
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 3 }}>
                                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                <Typography sx={{
                                    fontFamily: typography.fontFamily.body,
                                    fontSize: typography.fontSize.xs,
                                    fontWeight: typography.fontWeight.bold,
                                    color: colors.secondary.main,
                                    letterSpacing: 3, textTransform: 'uppercase',
                                }}>
                                    Admissions Open — 2026/2027
                                </Typography>
                            </Stack>

                            {/* Heading */}
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: { xs: typography.fontSize['3xl'], md: '3.2rem', lg: '3.8rem' },
                                fontWeight: typography.fontWeight.bold,
                                color: colors.text.light, lineHeight: 1.15, mb: 1,
                            }}>
                                Give Your Child
                            </Typography>

                            {/* Gold underlined */}
                            <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                                <Typography sx={{
                                    fontFamily: typography.fontFamily.accent,
                                    fontSize: { xs: typography.fontSize['3xl'], md: '3.2rem', lg: '3.8rem' },
                                    fontWeight: typography.fontWeight.bold,
                                    color: colors.secondary.main, lineHeight: 1.15,
                                }}>
                                    The Best Start.
                                </Typography>
                                <Box sx={{
                                    position: 'absolute', bottom: -2, left: 0,
                                    height: 3, bgcolor: colors.secondary.main, borderRadius: 2,
                                    animation: visible ? 'cta_lineGrow 0.8s ease 0.6s both' : 'none',
                                    width: visible ? '100%' : 0,
                                }} />
                            </Box>

                            <Typography sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.base,
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.9, mb: 5, maxWidth: 480,
                            }}>
                                Applications are now open for the new academic session.
                                Limited spaces available — don't miss your child's place at
                                Preston International School.
                            </Typography>

                            {/* CTA Buttons */}
                            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>

                                {/* ← Apply → /admissions */}
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowForwardIcon />}
                                    onClick={() => navigate('/admissions')}
                                    sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.sm,
                                        fontWeight: typography.fontWeight.semiBold,
                                        bgcolor: colors.secondary.main,
                                        color: colors.primary.dark,
                                        px: 4, py: 1.7, borderRadius: '8px',
                                        textTransform: 'none',
                                        animation: 'cta_pulse 2.5s ease infinite',
                                        transition: 'all 0.25s ease',
                                        '&:hover': {
                                            bgcolor: colors.secondary.light,
                                            transform: 'translateY(-3px)',
                                            boxShadow: `0 12px 32px rgba(212,160,23,0.45)`,
                                        },
                                        '& .MuiButton-endIcon': { transition: 'transform 0.25s ease' },
                                        '&:hover .MuiButton-endIcon': { transform: 'translateX(5px)' },
                                    }}
                                >
                                    Apply for Admission
                                </Button>

                                {/* ← Download Prospectus → /admissions/requirements */}
                                <Button
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                    onClick={() => navigate('/admissions/requirements')}
                                    sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.sm,
                                        fontWeight: typography.fontWeight.semiBold,
                                        borderColor: `${colors.secondary.main}55`,
                                        color: colors.text.light,
                                        px: 4, py: 1.7, borderRadius: '8px',
                                        textTransform: 'none',
                                        transition: 'all 0.25s ease',
                                        '&:hover': {
                                            borderColor: colors.secondary.main,
                                            color: colors.secondary.light,
                                            bgcolor: `${colors.secondary.main}12`,
                                            boxShadow: 'none',
                                            transform: 'translateY(-3px)',
                                        },
                                    }}
                                >
                                    Download Prospectus
                                </Button>
                            </Stack>
                        </Box>

                        {/* RIGHT: Perks card */}
                        <Box
                            sx={{
                                bgcolor: colors.primary.main,
                                borderRadius: '20px',
                                border: `1px solid rgba(255,255,255,0.07)`,
                                overflow: 'hidden',
                                boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
                                animation: visible
                                    ? 'cta_scaleIn 0.8s ease 0.3s both, cta_float 6s ease-in-out 1s infinite'
                                    : 'none',
                            }}
                        >
                            {/* Card top bar */}
                            <Box sx={{
                                bgcolor: colors.secondary.main,
                                px: 3, py: 2,
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            }}>
                                <Typography sx={{
                                    fontFamily: typography.fontFamily.heading,
                                    fontSize: typography.fontSize.base,
                                    fontWeight: typography.fontWeight.bold,
                                    color: colors.primary.dark,
                                }}>
                                    Why Choose Preston?
                                </Typography>
                                <StarIcon sx={{ color: colors.primary.dark, fontSize: 20 }} />
                            </Box>

                            {/* Perks list */}
                            <Box sx={{ p: 3 }}>
                                {perks.map((perk, i) => (
                                    <Box
                                        key={perk}
                                        sx={{
                                            display: 'flex', alignItems: 'center', gap: 1.5,
                                            py: 1.6,
                                            borderBottom: i < perks.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                            animation: visible ? `cta_fadeUp 0.6s ease ${0.4 + i * 0.1}s both` : 'none',
                                        }}
                                    >
                                        <CheckCircleIcon sx={{ color: colors.secondary.main, fontSize: 18, flexShrink: 0 }} />
                                        <Typography sx={{
                                            fontFamily: typography.fontFamily.body,
                                            fontSize: typography.fontSize.sm,
                                            fontWeight: typography.fontWeight.medium,
                                            color: 'rgba(255,255,255,0.8)',
                                        }}>
                                            {perk}
                                        </Typography>
                                    </Box>
                                ))}

                                {/* Deadline pill */}
                                <Box sx={{
                                    mt: 2.5,
                                    bgcolor: `${colors.secondary.main}15`,
                                    border: `1px solid ${colors.secondary.main}44`,
                                    borderRadius: '8px',
                                    px: 2, py: 1.5,
                                    display: 'flex', alignItems: 'center', gap: 1.2,
                                }}>
                                    <AccessTimeIcon sx={{ color: colors.secondary.main, fontSize: 16 }} />
                                    <Typography sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.xs,
                                        fontWeight: typography.fontWeight.semiBold,
                                        color: colors.secondary.light, letterSpacing: 0.5,
                                    }}>
                                        Application Deadline: <strong>July 31, 2026</strong>
                                    </Typography>
                                </Box>

                                {/* ← View requirements → /admissions/requirements */}
                                <Box
                                    onClick={() => navigate('/admissions/requirements')}
                                    sx={{
                                        mt: 2,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1,
                                        py: 1.5, borderRadius: '8px',
                                        border: `1px solid rgba(255,255,255,0.1)`,
                                        cursor: 'pointer', transition: 'all 0.25s ease',
                                        '&:hover': {
                                            bgcolor: `${colors.secondary.main}18`,
                                            borderColor: colors.secondary.main,
                                        },
                                    }}
                                >
                                    <Typography sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.xs,
                                        fontWeight: typography.fontWeight.bold,
                                        color: colors.secondary.main,
                                        letterSpacing: 1, textTransform: 'uppercase',
                                    }}>
                                        View Entry Requirements
                                    </Typography>
                                    <ArrowForwardIcon sx={{ fontSize: 13, color: colors.secondary.main }} />
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>

                {/* Bottom gold shimmer line */}
                <Box sx={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
                    background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)`,
                }} />
            </Box>
        </>
    );
};

export default CTABanner;
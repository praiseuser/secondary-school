import { Box, Typography, Stack, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes ph_fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ph_lineGrow {
    from { width: 0; }
    to   { width: 100%; }
  }
`;

const PageHero = ({
    label,
    title,
    subtitle,
    description,
    backLabel,
    backPath,
    visible = true,
}) => {
    const navigate = useNavigate();

    return (
        <>
            <style>{keyframes}</style>
            <Box sx={{
                bgcolor: colors.primary.dark,
                py: { xs: 8, md: 11 },
                position: 'relative',
                overflow: 'hidden',
                // Dot grid bg
                '&::before': {
                    content: '""',
                    position: 'absolute', inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`,
                    backgroundSize: '28px 28px',
                },
            }}>
                {/* Gold shimmer top line */}
                <Box sx={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)`,
                }} />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                    {/* Back button */}
                    {backLabel && backPath && (
                        <Stack
                            direction="row" alignItems="center" gap={1}
                            onClick={() => navigate(backPath)}
                            sx={{
                                mb: 3, cursor: 'pointer', width: 'fit-content',
                                '&:hover .back-label': { color: colors.secondary.light },
                                '&:hover .back-arrow': { transform: 'rotate(180deg) translateX(3px)' },
                            }}
                        >
                            <ArrowForwardIcon className="back-arrow" sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)', transition: 'transform 0.2s ease' }} />
                            <Typography className="back-label" sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold, letterSpacing: 1, transition: 'color 0.2s ease' }}>
                                {backLabel}
                            </Typography>
                        </Stack>
                    )}

                    {/* Label */}
                    {label && (
                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'ph_fadeUp 0.6s ease both' : 'none' }}>
                            <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                {label}
                            </Typography>
                        </Stack>
                    )}

                    {/* Title */}
                    <Typography sx={{
                        fontFamily: typography.fontFamily.accent,
                        fontSize: { xs: typography.fontSize['3xl'], md: '3.4rem' },
                        fontWeight: typography.fontWeight.bold,
                        color: colors.text.light,
                        lineHeight: 1.15, mb: subtitle ? 1 : 1.5,
                        animation: visible ? 'ph_fadeUp 0.6s ease 0.1s both' : 'none',
                    }}>
                        {title}
                    </Typography>

                    {/* Gold subtitle with animated underline */}
                    {subtitle && (
                        <Box sx={{ position: 'relative', display: 'inline-block', mb: 3, animation: visible ? 'ph_fadeUp 0.6s ease 0.15s both' : 'none' }}>
                            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: '1.8rem' }, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, lineHeight: 1.3 }}>
                                {subtitle}
                            </Typography>
                            <Box sx={{ position: 'absolute', bottom: -2, left: 0, height: 2, bgcolor: colors.secondary.main, borderRadius: 2, animation: visible ? 'ph_lineGrow 0.9s ease 0.6s both' : 'none', width: visible ? '100%' : 0 }} />
                        </Box>
                    )}

                    {/* Description */}
                    {description && (
                        <Typography sx={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.base,
                            color: 'rgba(255,255,255,0.55)',
                            lineHeight: 1.9, maxWidth: 620,
                            animation: visible ? 'ph_fadeUp 0.6s ease 0.25s both' : 'none',
                        }}>
                            {description}
                        </Typography>
                    )}
                </Container>
            </Box>
        </>
    );
};

export default PageHero;
import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { topLinks } from '../navbarData';
import { colors, typography } from '../../theme';

const socialIcons = {
    Facebook: <FacebookIcon sx={{ fontSize: 18 }} />,
    Instagram: <InstagramIcon sx={{ fontSize: 18 }} />,
    YouTube: <YouTubeIcon sx={{ fontSize: 18 }} />,
};

const TopBar = ({ socials, onMobileOpen }) => {
    return (
        <Box sx={{ bgcolor: colors.primary.dark }}>
            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.5 }}>

                    {/* ── Logo */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}>
                        <Box
                            sx={{
                                width: 56, height: 56,
                                bgcolor: 'white',
                                borderRadius: '10px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                            }}
                        >
                            <SchoolIcon sx={{ color: colors.primary.main, fontSize: 32 }} />
                        </Box>

                        <Box>
                            {/* School name uses accent font — Playfair Display from theme */}
                            <Typography
                                sx={{
                                    fontFamily: typography.fontFamily.accent,
                                    fontSize: typography.fontSize.xl,        // 1.5rem
                                    fontWeight: typography.fontWeight.bold,  // 700
                                    color: colors.text.light,
                                    lineHeight: 1,
                                }}
                            >
                                Preston
                            </Typography>
                            {/* Subtitle uses body font */}
                            <Typography
                                sx={{
                                    fontFamily: typography.fontFamily.body,
                                    fontSize: typography.fontSize.xs,             // 0.75rem
                                    fontWeight: typography.fontWeight.medium,     // 500
                                    color: colors.secondary.light,
                                    letterSpacing: 2.5,
                                    textTransform: 'uppercase',
                                    mt: 0.3,
                                }}
                            >
                                International School
                            </Typography>
                        </Box>
                    </Box>

                    {/* ── Quick Links + Socials (desktop) */}
                    <Stack direction="row" alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>

                        {topLinks.map((link, i) => (
                            <Box key={link} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button
                                    sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.sm,          // 0.875rem
                                        fontWeight: typography.fontWeight.medium,  // 500
                                        color: 'rgba(255,255,255,0.82)',
                                        px: 2, py: 0.6,
                                        borderRadius: 0,
                                        textTransform: 'none',
                                        '&:hover': { color: colors.secondary.light, bgcolor: 'rgba(255,255,255,0.07)' },
                                    }}
                                >
                                    {link}
                                </Button>
                                {i < topLinks.length - 1 && (
                                    <Box sx={{ width: '1px', height: 14, bgcolor: 'rgba(255,255,255,0.15)' }} />
                                )}
                            </Box>
                        ))}

                        {/* Vertical divider */}
                        <Box sx={{ width: '1px', height: 24, bgcolor: 'rgba(255,255,255,0.15)', mx: 2 }} />

                        {socials.map((s) => (
                            <IconButton
                                key={s.label} href={s.href} aria-label={s.label} size="small"
                                sx={{
                                    color: 'rgba(255,255,255,0.7)',
                                    mx: 0.2,
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        color: colors.secondary.main,
                                        bgcolor: 'rgba(212,160,23,0.12)',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            >
                                {socialIcons[s.label]}
                            </IconButton>
                        ))}
                    </Stack>

                    <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: colors.text.light }} onClick={onMobileOpen}>
                        <MenuIcon />
                    </IconButton>

                </Stack>
            </Container>
        </Box>
    );
};

export default TopBar;
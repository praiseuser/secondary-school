import { useState } from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { topLinks, socials } from '../navbarData';
import { colors, typography } from '../../theme';

const socialIcons = {
    Facebook:  <FacebookIcon  sx={{ fontSize: 15 }} />,
    Instagram: <InstagramIcon sx={{ fontSize: 15 }} />,
    YouTube:   <YouTubeIcon   sx={{ fontSize: 15 }} />,
};

const PortalLink = ({ label }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                display: 'flex', alignItems: 'center', gap: 0.6,
                px: 1.6, py: 0.8,
                cursor: 'pointer',
                borderRadius: '6px',
                border: `1px solid ${hovered ? colors.secondary.main + '55' : 'transparent'}`,
                bgcolor: hovered ? `${colors.secondary.main}18` : 'transparent',
                transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'all 0.25s ease',
            }}
        >
            <PersonOutlinedIcon sx={{ fontSize: 13, color: hovered ? colors.secondary.main : 'rgba(255,255,255,0.35)', transition: 'color 0.25s ease' }} />
            <Typography sx={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.xs,
                fontWeight: typography.fontWeight.medium,
                color: hovered ? colors.secondary.main : 'rgba(255,255,255,0.65)',
                transition: 'color 0.25s ease',
                whiteSpace: 'nowrap',
            }}>
                {label}
            </Typography>
        </Box>
    );
};

const TopBar = ({ onMobileOpen }) => (
    <Box sx={{
        bgcolor: colors.primary.dark,
        borderBottom: `1px solid rgba(255,255,255,0.06)`,
        position: 'relative',
        '&::after': {
            content: '""', position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
            background: `linear-gradient(90deg, transparent, ${colors.secondary.main}44, transparent)`,
        },
    }}>
        <Container maxWidth="xl">
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.2 }}>

                {/* Logo */}
                <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', flexShrink: 0 }}>
                    <Box sx={{ width: 48, height: 48, bgcolor: colors.secondary.main, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 14px ${colors.secondary.main}55`, flexShrink: 0 }}>
                        <SchoolIcon sx={{ fontSize: 26, color: colors.primary.dark }} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.1 }}>
                            Preston
                        </Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.medium, color: colors.secondary.main, letterSpacing: 2.5, textTransform: 'uppercase' }}>
                            International School
                        </Typography>
                    </Box>
                </Box>

                {/* Right side — desktop only */}
                <Stack direction="row" alignItems="center" gap={0} sx={{ display: { xs: 'none', md: 'flex' } }}>

                    {/* Portal links */}
                    {topLinks.map((link, i) => (
                        <Box key={link} sx={{ display: 'flex', alignItems: 'center' }}>
                            <PortalLink label={link} />
                            {i < topLinks.length - 1 && (
                                <Box sx={{ width: 1, height: 12, bgcolor: 'rgba(255,255,255,0.12)' }} />
                            )}
                        </Box>
                    ))}

                    {/* Divider */}
                    <Box sx={{ width: 1, height: 20, bgcolor: 'rgba(255,255,255,0.12)', mx: 2 }} />

                    {/* Social icons */}
                    {socials.map((s) => (
                        <IconButton key={s.label} href={s.href} aria-label={s.label} size="small"
                            sx={{ color: 'rgba(255,255,255,0.45)', mx: 0.3, transition: 'all 0.2s ease', '&:hover': { color: colors.secondary.main, bgcolor: `${colors.secondary.main}18`, transform: 'translateY(-2px)' } }}>
                            {socialIcons[s.label]}
                        </IconButton>
                    ))}
                </Stack>

                {/* Mobile hamburger */}
                <IconButton onClick={onMobileOpen} sx={{ display: { xs: 'flex', md: 'none' }, color: 'rgba(255,255,255,0.8)', '&:hover': { color: colors.secondary.main } }}>
                    <MenuIcon />
                </IconButton>

            </Stack>
        </Container>
    </Box>
);

export default TopBar;
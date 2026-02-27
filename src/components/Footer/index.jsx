import {
    Box, Container, Typography, Grid, Divider,
    IconButton, Stack, Link as MuiLink
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors, typography } from '../../theme';

// ── Data
const footerLinks = ['About', 'Academics', 'Admissions', 'News', 'Contact'];

const socials = [
    { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
    { icon: <YouTubeIcon />, href: '#', label: 'YouTube' },
];

const contactItems = [
    { icon: <LocationOnIcon fontSize="small" />, text: '123 School Road, City, State' },
    { icon: <EmailIcon fontSize="small" />, text: 'info@schoolname.edu' },
    { icon: <PhoneIcon fontSize="small" />, text: '+234 000 000 0000' },
];

const Footer = () => {
    return (
        <Box sx={{ bgcolor: colors.primary.dark, color: colors.text.light, position: 'relative', overflow: 'hidden' }}>

            <Box
                sx={{
                    position: 'absolute',
                    width: 500, height: 500,
                    borderRadius: '50%',
                    bgcolor: colors.primary.main,
                    opacity: 0.05,
                    top: -100, right: -100,
                    pointerEvents: 'none',
                }}
            />

            {/* ── Main Footer Content */}
            <Container maxWidth="xl" sx={{ py: 7, position: 'relative', zIndex: 1 }}>
                <Grid container spacing={6}>

                    {/* ────────────────────────────
                        Brand Column
                    ──────────────────────────── */}
                    <Grid item xs={12} md={4}>

                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                            <Box
                                sx={{
                                    bgcolor: colors.primary.main,
                                    borderRadius: '10px',
                                    p: 1,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}
                            >
                                <SchoolIcon sx={{ color: colors.secondary.main, fontSize: 28 }} />
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: typography.fontFamily.heading,   // Merriweather
                                        fontSize: typography.fontSize.lg,            // 1.25rem
                                        fontWeight: typography.fontWeight.extraBold, // 800
                                        color: colors.text.light,
                                        lineHeight: 1.1,
                                    }}
                                >
                                    Preston
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.xs,           // 0.75rem
                                        fontWeight: typography.fontWeight.medium,
                                        color: colors.secondary.main,
                                        letterSpacing: 1.5,
                                    }}
                                >
                                    INTERNATIONAL SCHOOL
                                </Typography>
                            </Box>
                        </Box>

                        <Typography
                            sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.sm,       // 0.875rem
                                fontWeight: typography.fontWeight.regular,
                                color: 'rgba(255,255,255,0.5)',
                                lineHeight: 2,
                                mb: 3,
                            }}
                        >
                            Dedicated to nurturing academic excellence, strong values,
                            and lifelong leadership in every student since [Year].
                        </Typography>

                        {/* Motto Tag */}
                        <Box
                            sx={{
                                display: 'inline-block',
                                border: `1px solid ${colors.primary.main}`,
                                borderLeft: `4px solid ${colors.secondary.main}`,
                                px: 2, py: 1, mb: 3,
                                borderRadius: '0 6px 6px 0',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: typography.fontFamily.body,
                                    fontSize: typography.fontSize.xs,
                                    fontWeight: typography.fontWeight.bold,
                                    color: colors.secondary.main,
                                    letterSpacing: 2,
                                }}
                            >
                                EXCELLENCE · INTEGRITY · SERVICE
                            </Typography>
                        </Box>

                        {/* Social Icons */}
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: typography.fontFamily.body,
                                    fontSize: typography.fontSize.xs,
                                    fontWeight: typography.fontWeight.medium,
                                    color: 'rgba(255,255,255,0.3)',
                                    letterSpacing: 1,
                                    display: 'block',
                                    mb: 1.5,
                                }}
                            >
                                FOLLOW US
                            </Typography>
                            <Stack direction="row" gap={1}>
                                {socials.map((s) => (
                                    <IconButton
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        size="small"
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                            color: 'rgba(255,255,255,0.5)',
                                            border: `1px solid rgba(255,255,255,0.08)`,
                                            transition: 'all 0.25s ease',
                                            '&:hover': {
                                                bgcolor: colors.primary.main,
                                                color: colors.secondary.main,
                                                borderColor: colors.primary.main,
                                                transform: 'translateY(-3px)',
                                            },
                                        }}
                                    >
                                        {s.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* ────────────────────────────
                        Quick Links
                    ──────────────────────────── */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography
                            sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.xs,
                                fontWeight: typography.fontWeight.bold,
                                color: colors.secondary.main,
                                letterSpacing: 2,
                                mb: 3,
                                pb: 1.5,
                                borderBottom: `1px solid rgba(255,255,255,0.07)`,
                            }}
                        >
                            QUICK LINKS
                        </Typography>

                        <Stack gap={0.5}>
                            {footerLinks.map((item) => (
                                <MuiLink
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    underline="none"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.sm,        // 0.875rem
                                        fontWeight: typography.fontWeight.regular,
                                        color: 'rgba(255,255,255,0.5)',
                                        py: 0.9,
                                        borderBottom: `1px solid rgba(255,255,255,0.05)`,
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            color: colors.secondary.light,
                                            pl: 1,
                                        },
                                        '&:hover .arrow-icon': {
                                            opacity: 1,
                                            transform: 'translateX(0)',
                                        },
                                    }}
                                >
                                    <ArrowForwardIosIcon
                                        className="arrow-icon"
                                        sx={{
                                            fontSize: 10,
                                            color: colors.secondary.main,
                                            opacity: 0,
                                            transform: 'translateX(-6px)',
                                            transition: 'all 0.2s ease',
                                        }}
                                    />
                                    {item}
                                </MuiLink>
                            ))}
                        </Stack>
                    </Grid>

                    {/* ────────────────────────────
                        Contact Info
                    ──────────────────────────── */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography
                            sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.xs,
                                fontWeight: typography.fontWeight.bold,
                                color: colors.secondary.main,
                                letterSpacing: 2,
                                mb: 3,
                                pb: 1.5,
                                borderBottom: `1px solid rgba(255,255,255,0.07)`,
                            }}
                        >
                            CONTACT US
                        </Typography>

                        <Stack gap={2.5}>
                            {contactItems.map((item, i) => (
                                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                    <Box sx={{ color: colors.secondary.main, mt: 0.2, minWidth: 20 }}>
                                        {item.icon}
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontFamily: typography.fontFamily.body,
                                            fontSize: typography.fontSize.sm,
                                            fontWeight: typography.fontWeight.regular,
                                            color: 'rgba(255,255,255,0.5)',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                </Grid>
            </Container>

            {/* ── Bottom Bar */}
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)' }} />
            <Container maxWidth="xl">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    py={2.5}
                    gap={1}
                >
                    <Typography
                        sx={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.xs,
                            fontWeight: typography.fontWeight.regular,
                            color: 'rgba(255,255,255,0.25)',
                        }}
                    >
                        © {new Date().getFullYear()} School Name. All rights reserved.
                    </Typography>

                    <Stack direction="row" gap={2}>
                        {['Privacy Policy', 'Terms of Use'].map((item) => (
                            <MuiLink
                                key={item}
                                href="#"
                                underline="hover"
                                sx={{
                                    fontFamily: typography.fontFamily.body,
                                    fontSize: typography.fontSize.xs,
                                    fontWeight: typography.fontWeight.regular,
                                    color: 'rgba(255,255,255,0.25)',
                                    '&:hover': { color: colors.secondary.main },
                                }}
                            >
                                {item}
                            </MuiLink>
                        ))}
                    </Stack>
                </Stack>
            </Container>

        </Box>
    );
};

export default Footer;
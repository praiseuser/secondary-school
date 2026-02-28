import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes ft_shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }
  @keyframes ft_pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.6; }
  }
`;

const footerLinks = {
    'About Us': [
        { label: 'Our History', path: '/about/history' },
        { label: 'Vision & Mission', path: '/about/vision' },
        { label: 'Core Values', path: '/about/values' },
        { label: 'Meet the Staff', path: '/about/staff' },
        { label: 'Our Facilities', path: '/about/facilities' },
    ],
    'Academics': [
        { label: 'Curriculum Overview', path: '/academics/curriculum' },
        { label: 'Junior Secondary', path: '/academics/junior' },
        { label: 'Senior Secondary', path: '/academics/senior' },
        { label: 'Subject List', path: '/academics/subjects' },
        { label: 'Academic Calendar', path: '/academics/calendar' },
    ],
    'Admissions': [
        { label: 'How to Apply', path: '/admissions/apply' },
        { label: 'Entry Requirements', path: '/admissions/requirements' },
        { label: 'FAQs', path: '/admissions/faqs' },
        { label: 'Apply Now', path: '/admissions/apply' },
    ],
    'Quick Links': [
        { label: 'News & Events', path: '/news' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Home', path: '/' },
    ],
};

const socials = [
    { Icon: FacebookIcon, href: '#', label: 'Facebook' },
    { Icon: InstagramIcon, href: '#', label: 'Instagram' },
    { Icon: YouTubeIcon, href: '#', label: 'YouTube' },
    { Icon: TwitterIcon, href: '#', label: 'Twitter' },
];

const contactItems = [
    { Icon: LocationOnIcon, text: '123 Preston Avenue, Victoria Island, Lagos, Nigeria' },
    { Icon: PhoneIcon, text: '+234 800 000 0000 / +234 801 000 0000' },
    { Icon: EmailIcon, text: 'info@prestonschool.edu.ng' },
    { Icon: AccessTimeIcon, text: 'Mon – Fri: 7:30am – 4:30pm' },
];

const Footer = () => {
    return (
        <>
            <style>{keyframes}</style>

            {/* ── Top admissions strip */}
            <Box sx={{
                bgcolor: colors.secondary.main,
                py: 1.4,
                position: 'relative',
                overflow: 'hidden',
            }}>
                <Box sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary.dark}18 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                }} />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" gap={1}>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.primary.dark }}>
                            📞 Admissions Helpline: <strong>+234 800 000 0000</strong>
                        </Typography>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: colors.primary.dark, animation: 'ft_pulse 2s ease infinite' }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold, color: colors.primary.dark }}>
                                Applications Open — 2026/2027 Session
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            {/* ── Main footer body */}
            <Box
                component="footer"
                sx={{
                    bgcolor: colors.primary.dark,
                    color: 'white',
                    pt: { xs: 8, md: 10 },
                    pb: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    // Dot grid background
                    '&::before': {
                        content: '""',
                        position: 'absolute', inset: 0,
                        backgroundImage: `radial-gradient(rgba(255,255,255,0.04) 1.5px, transparent 1.5px)`,
                        backgroundSize: '28px 28px',
                        pointerEvents: 'none',
                    },
                    // Right side glow
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -100, right: -100,
                        width: 500, height: 500,
                        borderRadius: '50%',
                        bgcolor: colors.primary.main,
                        opacity: 0.15,
                        filter: 'blur(80px)',
                        pointerEvents: 'none',
                    },
                }}
            >
                {/* Gold shimmer top line */}
                <Box sx={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, transparent 0%, ${colors.secondary.dark} 20%, ${colors.secondary.main} 40%, ${colors.secondary.light} 50%, ${colors.secondary.main} 60%, ${colors.secondary.dark} 80%, transparent 100%)`,
                    backgroundSize: '600px 100%',
                    animation: 'ft_shimmer 4s linear infinite',
                }} />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                    {/* ── Top grid: brand + links */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.8fr 1fr 1fr 1fr 1fr' },
                        gap: { xs: 5, md: 5 },
                        pb: 6,
                        borderBottom: `1px solid rgba(255,255,255,0.07)`,
                    }}>

                        {/* Brand + contact */}
                        <Box>
                            {/* Logo */}
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2.5 }}>
                                <Box sx={{
                                    width: 46, height: 46,
                                    borderRadius: '12px',
                                    background: `linear-gradient(135deg, ${colors.secondary.dark}, ${colors.secondary.main})`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: `0 4px 16px rgba(212,160,23,0.4)`,
                                    flexShrink: 0,
                                }}>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.black, color: colors.primary.dark }}>P</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: 'white', lineHeight: 1.1 }}>Preston</Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.62rem', color: colors.secondary.main, letterSpacing: 2.5, textTransform: 'uppercase' }}>International School</Typography>
                                </Box>
                            </Stack>

                            {/* Motto */}
                            <Box sx={{
                                display: 'inline-block',
                                border: `1px solid ${colors.secondary.main}44`,
                                borderLeft: `3px solid ${colors.secondary.main}`,
                                px: 2, py: 1,
                                borderRadius: '0 6px 6px 0',
                                mb: 2.5,
                            }}>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 2, textTransform: 'uppercase' }}>
                                    Excellence · Integrity · Service
                                </Typography>
                            </Box>

                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, mb: 3, maxWidth: 270 }}>
                                Nurturing academic excellence, strong character and lifelong learning since 1999. Shaping Nigeria's next generation of leaders.
                            </Typography>

                            {/* Contact rows */}
                            <Stack gap={1.8} sx={{ mb: 3.5 }}>
                                {contactItems.map((item) => {
                                    const Icon = item.Icon;
                                    return (
                                        <Stack key={item.text} direction="row" alignItems="flex-start" gap={1.5}>
                                            <Box sx={{ width: 28, height: 28, borderRadius: '7px', bgcolor: `${colors.secondary.main}18`, border: `1px solid ${colors.secondary.main}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <Icon sx={{ fontSize: 13, color: colors.secondary.main }} />
                                            </Box>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, mt: 0.4 }}>{item.text}</Typography>
                                        </Stack>
                                    );
                                })}
                            </Stack>

                            {/* Social icons — using individual state per icon via CSS */}
                            <Box>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: 'rgba(255,255,255,0.25)', letterSpacing: 2, textTransform: 'uppercase', mb: 1.5 }}>
                                    Follow Us
                                </Typography>
                                <Stack direction="row" gap={1}>
                                    {socials.map(({ Icon, href, label }) => (
                                        <Box
                                            key={label}
                                            component="a"
                                            href={href}
                                            aria-label={label}
                                            sx={{
                                                width: 36, height: 36,
                                                borderRadius: '9px',
                                                bgcolor: 'rgba(255,255,255,0.05)',
                                                border: `1px solid rgba(255,255,255,0.08)`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                transition: 'all 0.25s ease',
                                                color: 'rgba(255,255,255,0.5)',
                                                '&:hover': {
                                                    bgcolor: colors.secondary.main,
                                                    borderColor: colors.secondary.main,
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: `0 8px 20px rgba(212,160,23,0.35)`,
                                                    color: colors.primary.dark,
                                                },
                                            }}
                                        >
                                            <Icon sx={{ fontSize: 16 }} />
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Box>

                        {/* Link columns */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <Box key={title}>
                                <Typography sx={{
                                    fontFamily: typography.fontFamily.heading,
                                    fontSize: typography.fontSize.xs,
                                    fontWeight: typography.fontWeight.bold,
                                    color: colors.secondary.main,
                                    letterSpacing: 2,
                                    textTransform: 'uppercase',
                                    mb: 2.5,
                                    pb: 1.5,
                                    borderBottom: `1px solid rgba(255,255,255,0.06)`,
                                }}>
                                    {title}
                                </Typography>
                                <Stack gap={0.2}>
                                    {links.map((link) => (
                                        <Box
                                            key={link.label}
                                            component={Link}
                                            to={link.path}
                                            sx={{
                                                fontFamily: typography.fontFamily.body,
                                                fontSize: typography.fontSize.sm,
                                                color: 'rgba(255,255,255,0.4)',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0,
                                                py: 0.8,
                                                borderBottom: `1px solid rgba(255,255,255,0.03)`,
                                                transition: 'all 0.2s ease',
                                                '& .ft-arrow': {
                                                    fontSize: 9,
                                                    opacity: 0,
                                                    transform: 'translateX(-6px)',
                                                    transition: 'all 0.2s ease',
                                                    color: colors.secondary.main,
                                                    mr: 0,
                                                },
                                                '&:hover': {
                                                    color: colors.secondary.main,
                                                    pl: 1,
                                                    '& .ft-arrow': {
                                                        opacity: 1,
                                                        transform: 'translateX(0)',
                                                        mr: 0.8,
                                                    },
                                                },
                                            }}
                                        >
                                            <ArrowForwardIosIcon className="ft-arrow" />
                                            {link.label}
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        ))}
                    </Box>

                    {/* ── Bottom bar */}
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap={2}
                        sx={{ py: 3 }}
                    >
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.2)', textAlign: { xs: 'center', md: 'left' } }}>
                            © {new Date().getFullYear()} Preston International School. All rights reserved. | RC No. 000000
                        </Typography>
                        <Stack direction="row" gap={3}>
                            {[
                                { label: 'Privacy Policy', path: '/contact' },
                                { label: 'Terms of Use', path: '/contact' },
                                { label: 'Sitemap', path: '/' },
                            ].map((item) => (
                                <Box
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.xs,
                                        color: 'rgba(255,255,255,0.2)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                        '&:hover': { color: colors.secondary.main },
                                    }}
                                >
                                    {item.label}
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
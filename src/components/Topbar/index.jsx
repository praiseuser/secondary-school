import { useState } from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { topLinks, socials } from "../navbarData";
import { colors, typography } from "../../theme";

const socialIcons = { Facebook: FacebookIcon, Instagram: InstagramIcon, YouTube: YouTubeIcon };

const PortalLink = ({ label, path }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={path}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px', borderRadius: '6px',
                background: hovered ? '#D4A017' : 'rgba(255,255,255,0.06)',
                color: hovered ? '#0F2447' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none', cursor: 'pointer',
                minHeight: '32px', border: '1px solid transparent',
                transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'all 0.25s ease',
            }}
        >
            <PersonOutlinedIcon style={{ fontSize: 15, color: hovered ? '#0F2447' : 'rgba(255,255,255,0.5)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>{label}</span>
        </a>
    );
};

const SocialBtn = ({ href, Icon, label }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={href}
            aria-label={label}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 30, height: 30, borderRadius: '6px',
                color: hovered ? '#D4A017' : 'rgba(255,255,255,0.45)',
                background: hovered ? 'rgba(212,160,23,0.18)' : 'transparent',
                margin: '0 2px', cursor: 'pointer',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.25s ease', textDecoration: 'none',
            }}
        >
            <Icon style={{ fontSize: 16 }} />
        </a>
    );
};

const TopBar = ({ onMobileOpen }) => (
    <Box sx={{
        bgcolor: colors.primary.dark,
        borderBottom: `1px solid rgba(255,255,255,0.06)`,
        position: "relative",
        "&::after": {
            content: '""', position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
            background: `linear-gradient(90deg, transparent, ${colors.secondary.main}44, transparent)`,
        },
    }}>
        <Container maxWidth="xl">
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.2 }}>

                {/* Logo */}
                <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none", flexShrink: 0 }}>
                    <Box sx={{ width: 48, height: 48, bgcolor: colors.secondary.main, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px ${colors.secondary.main}55` }}>
                        <SchoolIcon sx={{ fontSize: 26, color: colors.primary.dark }} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.1 }}>Preston</Typography>
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: "0.65rem", fontWeight: typography.fontWeight.medium, color: colors.secondary.main, letterSpacing: 2.5, textTransform: "uppercase" }}>International School</Typography>
                    </Box>
                </Box>

                {/* Right side — desktop only */}
                <Stack direction="row" alignItems="center" sx={{ gap: 1, display: { xs: 'none', md: 'flex' } }}>

                    {topLinks.map((link, i) => (
                        <Stack key={link.label} direction="row" alignItems="center">
                            <PortalLink label={link.label} path={link.path} />
                            {i < topLinks.length - 1 && (
                                <Box sx={{ width: "1px", height: 14, bgcolor: "rgba(255,255,255,0.25)", mx: 1.2 }} />
                            )}
                        </Stack>
                    ))}

                    <Box sx={{ width: "1px", height: 20, bgcolor: "rgba(255,255,255,0.12)", mx: 2 }} />

                    {socials.map((s) => (
                        <SocialBtn key={s.label} href={s.href} Icon={socialIcons[s.label]} label={s.label} />
                    ))}
                </Stack>

                {/* Mobile hamburger */}
                <IconButton onClick={onMobileOpen} sx={{ display: { xs: "flex", md: "none" }, color: "rgba(255,255,255,0.8)", "&:hover": { color: colors.secondary.main } }}>
                    <MenuIcon />
                </IconButton>

            </Stack>
        </Container>
    </Box>
);

export default TopBar;
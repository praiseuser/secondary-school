import { useState } from 'react';
import {
  Box, Typography, Button, IconButton, Stack,
  Drawer, List, ListItem, ListItemText, Divider, Collapse
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from 'react-router-dom';
import { topLinks, mainNavLinks } from '../navbarData';
import { colors, typography } from '../../theme';

const socialIcons = {
  Facebook: <FacebookIcon sx={{ fontSize: 18 }} />,
  Instagram: <InstagramIcon sx={{ fontSize: 18 }} />,
  YouTube: <YouTubeIcon sx={{ fontSize: 18 }} />,
};

const MobileDrawer = ({ open, onClose, socials }) => {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);
  const toggle = (label) => setOpenSection(openSection === label ? null : label);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ zIndex: 1400 }}
      PaperProps={{
        sx: { width: 300, bgcolor: colors.primary.dark, color: colors.text.light }
      }}
    >
      {/* Header */}
      <Box sx={{ bgcolor: colors.primary.main, px: 2.5, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `2px solid ${colors.secondary.main}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 36, height: 36, bgcolor: colors.secondary.main, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SchoolIcon sx={{ color: colors.primary.dark, fontSize: 20 }} />
          </Box>
          <Box>
            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.1 }}>Preston</Typography>
            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', color: colors.secondary.main, letterSpacing: 2, textTransform: 'uppercase' }}>International School</Typography>
          </Box>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'rgba(255,255,255,0.7)', p: 0.5, '&:hover': { color: colors.secondary.main } }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Portal link pills */}
      <Box sx={{ px: 2, py: 1.5, bgcolor: 'rgba(0,0,0,0.2)' }}>
        <Stack direction="row" gap={1} flexWrap="wrap">
          {topLinks.map((link) => (
            <Button key={link} size="small" sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.75)', border: `1px solid rgba(255,255,255,0.15)`, px: 1.5, py: 0.4, borderRadius: '20px', textTransform: 'none', minWidth: 0, '&:hover': { bgcolor: colors.secondary.dark, borderColor: colors.secondary.main, color: 'white' } }}>
              {link}
            </Button>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />

      {/* Nav links */}
      <List dense sx={{ px: 1, py: 1.5, flexGrow: 1, overflowY: 'auto' }}>
        {mainNavLinks.map((link) => {
          const isActive = location.pathname === link.path || location.pathname.startsWith(link.path + '/');
          const hasDropdown = link.dropdown?.length > 0;
          const isOpen = openSection === link.label;

          return (
            <Box key={link.label}>
              <ListItem
                component={hasDropdown ? 'div' : Link}
                to={!hasDropdown ? link.path : undefined}
                onClick={hasDropdown ? () => toggle(link.label) : onClose}
                sx={{ borderRadius: '8px', mb: 0.3, px: 2, py: 1, bgcolor: isActive ? 'rgba(0,0,0,0.3)' : 'transparent', borderLeft: isActive ? `3px solid ${colors.secondary.main}` : '3px solid transparent', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: isActive ? typography.fontWeight.semiBold : typography.fontWeight.regular, color: link.highlight ? colors.secondary.light : isActive ? colors.text.light : 'rgba(255,255,255,0.8)' }}
                />
                {hasDropdown && <ExpandMoreIcon sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 18, transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />}
              </ListItem>

              {hasDropdown && (
                <Collapse in={isOpen}>
                  <List dense sx={{ pl: 3, pb: 0.5 }}>
                    {link.dropdown.map((sub) => (
                      <ListItem key={sub.label} component={Link} to={sub.path} onClick={onClose} sx={{ borderRadius: '6px', py: 0.8, textDecoration: 'none', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
                        <ListItemText primary={sub.label} primaryTypographyProps={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.62)' }} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>

      {/* Social icons */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mx: 2 }} />
      <Stack direction="row" gap={1.5} sx={{ px: 2.5, py: 2.5 }}>
        {socials.map((s) => (
          <IconButton key={s.label} href={s.href} size="small" sx={{ bgcolor: colors.primary.main, color: 'rgba(255,255,255,0.7)', border: `1px solid rgba(255,255,255,0.1)`, transition: 'all 0.2s ease', '&:hover': { bgcolor: colors.secondary.dark, color: 'white', transform: 'translateY(-2px)' } }}>
            {socialIcons[s.label]}
          </IconButton>
        ))}
      </Stack>
    </Drawer>
  );
};

export default MobileDrawer;
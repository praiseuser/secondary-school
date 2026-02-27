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
  Facebook:  <FacebookIcon  sx={{ fontSize: 18 }} />,
  Instagram: <InstagramIcon sx={{ fontSize: 18 }} />,
  YouTube:   <YouTubeIcon   sx={{ fontSize: 18 }} />,
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
      PaperProps={{ sx: { width: 300, bgcolor: colors.primary.dark, color: colors.text.light } }}
    >
      {/* ── Header */}
      <Box
        sx={{
          bgcolor: colors.primary.main,
          px: 2.5, py: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: `2px solid ${colors.secondary.main}`,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SchoolIcon sx={{ color: colors.secondary.light, fontSize: 22 }} />
          <Typography
            sx={{
              fontFamily: typography.fontFamily.heading,   // Merriweather
              fontSize: typography.fontSize.base,          // 1rem
              fontWeight: typography.fontWeight.bold,      // 700
              color: colors.text.light,
            }}
          >
            Preston Int'l School
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'rgba(255,255,255,0.7)', p: 0.5 }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* ── Quick link pills */}
      <Box sx={{ px: 2, py: 1.5, bgcolor: 'rgba(0,0,0,0.2)' }}>
        <Stack direction="row" gap={1} flexWrap="wrap">
          {topLinks.map((link) => (
            <Button
              key={link}
              size="small"
              sx={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.xs,           // 0.75rem
                fontWeight: typography.fontWeight.medium,   // 500
                color: 'rgba(255,255,255,0.75)',
                border: `1px solid rgba(255,255,255,0.15)`,
                px: 1.5, py: 0.4,
                borderRadius: '20px',
                textTransform: 'none',
                '&:hover': { bgcolor: colors.secondary.dark, borderColor: colors.secondary.main, color: colors.text.light, boxShadow: 'none' },
              }}
            >
              {link}
            </Button>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />

      {/* ── Nav links */}
      <List dense sx={{ px: 1, py: 1.5, flexGrow: 1, overflowY: 'auto' }}>
        {mainNavLinks.map((link) => {
          const isActive    = location.pathname === link.path;
          const hasDropdown = link.dropdown?.length > 0;
          const isOpen      = openSection === link.label;

          return (
            <Box key={link.label}>
              <ListItem
                component={hasDropdown ? Box : Link}
                to={!hasDropdown ? link.path : undefined}
                onClick={hasDropdown ? () => toggle(link.label) : onClose}
                sx={{
                  borderRadius: '8px',
                  mb: 0.3, px: 2, py: 1,
                  bgcolor: isActive ? 'rgba(0,0,0,0.3)' : 'transparent',
                  borderLeft: isActive ? `3px solid ${colors.secondary.main}` : '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.2)' },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.sm,
                    fontWeight: isActive ? typography.fontWeight.semiBold : typography.fontWeight.regular,
                    color: link.highlight
                      ? colors.secondary.light
                      : isActive
                      ? colors.text.light
                      : 'rgba(255,255,255,0.8)',
                  }}
                />
                {hasDropdown && (
                  <ExpandMoreIcon
                    sx={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: 18,
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  />
                )}
              </ListItem>

              {/* Sub-menu items */}
              {hasDropdown && (
                <Collapse in={isOpen}>
                  <List dense sx={{ pl: 3, pb: 0.5 }}>
                    {link.dropdown.map((sub) => (
                      <ListItem
                        key={sub.label}
                        component={Link}
                        to={sub.path}
                        onClick={onClose}
                        sx={{ borderRadius: '6px', py: 0.8, textDecoration: 'none', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}
                      >
                        <ListItemText
                          primary={sub.label}
                          primaryTypographyProps={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.xs,           // 0.75rem
                            fontWeight: typography.fontWeight.regular,
                            color: 'rgba(255,255,255,0.62)',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>

      {/* ── Social icons */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mx: 2 }} />
      <Stack direction="row" gap={1.5} sx={{ px: 2.5, py: 2.5 }}>
        {socials.map((s) => (
          <IconButton
            key={s.label}
            href={s.href}
            size="small"
            sx={{
              bgcolor: colors.primary.main,
              color: 'rgba(255,255,255,0.7)',
              border: `1px solid rgba(255,255,255,0.1)`,
              transition: 'all 0.2s ease',
              '&:hover': { bgcolor: colors.secondary.dark, color: colors.text.light, transform: 'translateY(-2px)', boxShadow: 'none' },
            }}
          >
            {socialIcons[s.label]}
          </IconButton>
        ))}
      </Stack>
    </Drawer>
  );
};

export default MobileDrawer;
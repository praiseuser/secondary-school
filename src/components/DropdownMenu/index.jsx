import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Link } from 'react-router-dom';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes dd_itemIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes dd_panelIn {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const DropdownMenu = ({ items, visible, label, onClose }) => {
    return (
        <>
            <style>{keyframes}</style>
            <Box
                sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    zIndex: 1300,
                    overflow: 'hidden',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(-8px)',
                    pointerEvents: visible ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
                }}
            >
                <Container maxWidth="xl" disableGutters>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '260px 1fr' }}>

                        {/* ── LEFT DARK PANEL */}
                        <Box
                            sx={{
                                bgcolor: colors.primary.dark,
                                px: 4, py: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                borderRight: `1px solid rgba(255,255,255,0.05)`,
                                animation: visible ? 'dd_panelIn 0.4s ease both' : 'none',
                            }}
                        >
                            <Box>
                                <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 2 }}>
                                    <Box sx={{
                                        width: 7, height: 7, borderRadius: '50%',
                                        bgcolor: colors.secondary.main,
                                        boxShadow: `0 0 8px ${colors.secondary.main}`,
                                    }} />
                                    <Typography sx={{
                                        fontFamily: typography.fontFamily.body,
                                        fontSize: typography.fontSize.xs,
                                        fontWeight: typography.fontWeight.bold,
                                        color: colors.secondary.main,
                                        letterSpacing: 2.5,
                                        textTransform: 'uppercase',
                                    }}>
                                        {label}
                                    </Typography>
                                </Stack>

                                <Typography sx={{
                                    fontFamily: typography.fontFamily.accent,
                                    fontSize: typography.fontSize['2xl'],
                                    fontWeight: typography.fontWeight.bold,
                                    color: colors.text.light,
                                    lineHeight: 1.2,
                                    mb: 2,
                                }}>
                                    Explore<br />{label}
                                </Typography>

                                <Box sx={{ width: 40, height: 3, bgcolor: colors.secondary.main, borderRadius: 2, mb: 2.5 }} />

                                <Typography sx={{
                                    fontFamily: typography.fontFamily.body,
                                    fontSize: typography.fontSize.xs,
                                    color: 'rgba(255,255,255,0.35)',
                                    lineHeight: 1.8,
                                }}>
                                    {items.length} sections available
                                </Typography>
                            </Box>

                            {/* Bottom view-all button */}
                            <Box
                                component={Link}
                                to="#"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    mt: 4,
                                    px: 2, py: 1,
                                    borderRadius: '6px',
                                    border: `1px solid ${colors.secondary.main}44`,
                                    textDecoration: 'none',
                                    width: 'fit-content',
                                    transition: 'all 0.25s ease',
                                    '&:hover': {
                                        bgcolor: colors.secondary.main,
                                        borderColor: colors.secondary.main,
                                        '& .va-text': { color: colors.primary.dark },
                                        '& .va-icon': { color: colors.primary.dark, transform: 'translate(2px, -2px)' },
                                    },
                                }}
                            >
                                <Typography className="va-text" sx={{
                                    fontFamily: typography.fontFamily.body,
                                    fontSize: typography.fontSize.xs,
                                    fontWeight: typography.fontWeight.bold,
                                    color: colors.secondary.main,
                                    letterSpacing: 1.5,
                                    textTransform: 'uppercase',
                                    transition: 'color 0.25s ease',
                                }}>
                                    View All
                                </Typography>
                                <NorthEastIcon className="va-icon" sx={{
                                    fontSize: 12,
                                    color: colors.secondary.main,
                                    transition: 'all 0.25s ease',
                                }} />
                            </Box>
                        </Box>

                        {/* ── RIGHT WHITE PANEL */}
                        <Box
                            sx={{
                                bgcolor: colors.background.paper,
                                px: 4, py: 4,
                                backgroundImage: `radial-gradient(${colors.primary.dark}0F 1.5px, transparent 1.5px)`,
                                backgroundSize: '22px 22px',
                            }}
                        >
                            <Grid container rowSpacing={0} columnSpacing={2}>
                                {items.map((item, i) => (
                                    <Grid item xs={12} sm={6} md={items.length > 4 ? 3 : 4} key={item.label}>
                                        <Box
                                            component={Link}
                                            to={item.path}
                                            onClick={onClose}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2,
                                                px: 2, py: 1.8,
                                                textDecoration: 'none',
                                                borderRadius: '10px',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                transition: 'all 0.25s ease',
                                                animation: visible ? `dd_itemIn 0.4s ease ${i * 0.07}s both` : 'none',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: 0, top: '15%', bottom: '15%',
                                                    width: 3,
                                                    borderRadius: 2,
                                                    bgcolor: colors.secondary.main,
                                                    transform: 'scaleY(0)',
                                                    transition: 'transform 0.25s ease',
                                                },
                                                '&:hover': {
                                                    bgcolor: `${colors.primary.dark}08`,
                                                    pl: 3,
                                                    '&::before': { transform: 'scaleY(1)' },
                                                    '& .dd-num': { color: colors.secondary.main, transform: 'scale(1.1)' },
                                                    '& .dd-label': { color: colors.primary.main },
                                                    '& .dd-arrow': { opacity: 1, transform: 'translate(0, 0)' },
                                                },
                                            }}
                                        >
                                            <Typography className="dd-num" sx={{
                                                fontFamily: typography.fontFamily.accent,
                                                fontSize: '0.7rem',
                                                fontWeight: typography.fontWeight.extraBold,
                                                color: `${colors.primary.main}50`,
                                                minWidth: 22,
                                                lineHeight: 1,
                                                transition: 'all 0.25s ease',
                                                flexShrink: 0,
                                            }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </Typography>

                                            <Typography className="dd-label" sx={{
                                                fontFamily: typography.fontFamily.body,
                                                fontSize: typography.fontSize.sm,
                                                fontWeight: typography.fontWeight.semiBold,
                                                color: colors.text.primary,
                                                flexGrow: 1,
                                                lineHeight: 1.4,
                                                transition: 'color 0.25s ease',
                                            }}>
                                                {item.label}
                                            </Typography>

                                            <NorthEastIcon className="dd-arrow" sx={{
                                                fontSize: 12,
                                                color: colors.secondary.main,
                                                opacity: 0,
                                                transform: 'translate(-5px, 5px)',
                                                transition: 'all 0.25s ease',
                                                flexShrink: 0,
                                            }} />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Container>

                {/* Bottom shimmer bar */}
                <Box sx={{
                    height: 3,
                    background: `linear-gradient(90deg, ${colors.primary.dark}, ${colors.secondary.dark}, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, ${colors.secondary.dark}, ${colors.primary.dark})`,
                }} />
            </Box>
        </>
    );
};

export default DropdownMenu;
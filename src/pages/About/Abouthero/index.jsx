import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';
import StarIcon from '@mui/icons-material/Star';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes ab_heroIn {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ab_lineGrow {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes ab_tabPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,160,23,0.4); }
    50%       { box-shadow: 0 0 0 8px rgba(212,160,23,0); }
  }
  @keyframes ab_float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }
`;

export const tabs = [
    { id: 'history', label: 'Our History', icon: HistoryEduIcon },
    { id: 'vision', label: 'Vision & Mission', icon: VisibilityIcon },
    { id: 'staff', label: 'Meet the Staff', icon: GroupsIcon },
    { id: 'facilities', label: 'Facilities', icon: ApartmentIcon },
];

const AboutHero = ({ activeTab, onTabChange }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    return (
        <>
            <style>{keyframes}</style>

            {/* ── Hero Banner */}
            <Box
                ref={ref}
                sx={{
                    position: 'relative',
                    bgcolor: colors.primary.dark,
                    overflow: 'hidden',
                    pt: { xs: 8, md: 12 },
                    pb: { xs: 0, md: 0 },
                }}
            >
                {/* Decorative rings */}
                <Box sx={{
                    position: 'absolute', top: -100, right: -100,
                    width: 500, height: 500, borderRadius: '50%',
                    border: `1px solid ${colors.secondary.main}15`,
                    pointerEvents: 'none',
                }} />
                <Box sx={{
                    position: 'absolute', top: -40, right: -40,
                    width: 320, height: 320, borderRadius: '50%',
                    border: `1px solid ${colors.secondary.main}08`,
                    pointerEvents: 'none',
                }} />
                {/* Bottom left glow */}
                <Box sx={{
                    position: 'absolute', bottom: 0, left: -80,
                    width: 360, height: 360, borderRadius: '50%',
                    bgcolor: colors.primary.main, opacity: 0.2,
                    filter: 'blur(60px)', pointerEvents: 'none',
                }} />

                {/* Faded watermark */}
                <Typography sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: typography.fontFamily.accent,
                    fontSize: { xs: '8rem', md: '16rem' },
                    fontWeight: typography.fontWeight.black,
                    color: colors.primary.light, opacity: 0.04,
                    whiteSpace: 'nowrap', userSelect: 'none',
                    pointerEvents: 'none', lineHeight: 1, zIndex: 0,
                }}>
                    ABOUT
                </Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Breadcrumb */}
                    <Stack direction="row" alignItems="center" gap={1}
                        sx={{ mb: 3, animation: visible ? 'ab_heroIn 0.6s ease 0.1s both' : 'none' }}
                    >
                        <Typography sx={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.xs,
                            color: 'rgba(255,255,255,0.35)',
                            letterSpacing: 1,
                        }}>Home</Typography>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.xs,
                            color: colors.secondary.main,
                            fontWeight: typography.fontWeight.semiBold,
                            letterSpacing: 1,
                        }}>About Us</Typography>
                    </Stack>

                    {/* Heading */}
                    <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'ab_heroIn 0.6s ease 0.2s both' : 'none' }}>
                        <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                        <Typography sx={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.xs,
                            fontWeight: typography.fontWeight.bold,
                            color: colors.secondary.main,
                            letterSpacing: 3,
                            textTransform: 'uppercase',
                        }}>
                            Who We Are
                        </Typography>
                    </Stack>

                    <Typography sx={{
                        fontFamily: typography.fontFamily.accent,
                        fontSize: { xs: typography.fontSize['3xl'], md: '3.8rem' },
                        fontWeight: typography.fontWeight.bold,
                        color: colors.text.light,
                        lineHeight: 1.15,
                        mb: 1,
                        animation: visible ? 'ab_heroIn 0.6s ease 0.3s both' : 'none',
                    }}>
                        The Story Behind
                    </Typography>
                    <Box sx={{ position: 'relative', display: 'inline-block', mb: 3, animation: visible ? 'ab_heroIn 0.6s ease 0.35s both' : 'none' }}>
                        <Typography sx={{
                            fontFamily: typography.fontFamily.accent,
                            fontSize: { xs: typography.fontSize['3xl'], md: '3.8rem' },
                            fontWeight: typography.fontWeight.bold,
                            color: colors.secondary.main,
                            lineHeight: 1.15,
                        }}>
                            Preston International.
                        </Typography>
                        <Box sx={{
                            position: 'absolute', bottom: -2, left: 0,
                            height: 3, bgcolor: colors.secondary.main, borderRadius: 2,
                            animation: visible ? 'ab_lineGrow 0.9s ease 0.7s both' : 'none',
                            width: visible ? '100%' : 0,
                        }} />
                    </Box>

                    <Typography sx={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.base,
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1.9,
                        maxWidth: 580,
                        mb: 6,
                        animation: visible ? 'ab_heroIn 0.6s ease 0.45s both' : 'none',
                    }}>
                        For over 25 years, Preston International School has stood as a beacon
                        of academic excellence and character development in Nigeria.
                        Explore our story, values, people and spaces.
                    </Typography>
                </Container>

                {/* ── TABS — sits at the bottom of the hero, overlapping into content */}
                <Box sx={{ position: 'relative', zIndex: 2, mt: 2 }}>
                    <Container maxWidth="xl">
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 0,
                                overflowX: 'auto',
                                '&::-webkit-scrollbar': { display: 'none' },
                                animation: visible ? 'ab_heroIn 0.6s ease 0.55s both' : 'none',
                            }}
                        >
                            {tabs.map((tab, i) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <Box
                                        key={tab.id}
                                        onClick={() => onTabChange(tab.id)}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            px: { xs: 2.5, md: 3.5 },
                                            py: 2.2,
                                            cursor: 'pointer',
                                            position: 'relative',
                                            flexShrink: 0,
                                            transition: 'all 0.25s ease',
                                            bgcolor: isActive ? colors.background.paper : 'transparent',
                                            borderRadius: isActive ? '12px 12px 0 0' : 0,
                                            // Active top gold border
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0, left: 0, right: 0,
                                                height: 3,
                                                bgcolor: isActive ? colors.secondary.main : 'transparent',
                                                borderRadius: '12px 12px 0 0',
                                                transition: 'background 0.25s ease',
                                            },
                                            '&:hover': {
                                                bgcolor: isActive ? colors.background.paper : 'rgba(255,255,255,0.06)',
                                                '& .tab-label': { color: isActive ? colors.primary.main : colors.text.light },
                                            },
                                        }}
                                    >
                                        <Icon sx={{
                                            fontSize: 16,
                                            color: isActive ? colors.secondary.main : 'rgba(255,255,255,0.45)',
                                            transition: 'color 0.25s ease',
                                        }} />
                                        <Typography
                                            className="tab-label"
                                            sx={{
                                                fontFamily: typography.fontFamily.body,
                                                fontSize: typography.fontSize.sm,
                                                fontWeight: isActive ? typography.fontWeight.semiBold : typography.fontWeight.regular,
                                                color: isActive ? colors.primary.dark : 'rgba(255,255,255,0.65)',
                                                whiteSpace: 'nowrap',
                                                transition: 'color 0.25s ease',
                                            }}
                                        >
                                            {tab.label}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default AboutHero;
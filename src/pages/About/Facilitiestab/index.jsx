import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import SportsIcon from '@mui/icons-material/Sports';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ComputerIcon from '@mui/icons-material/Computer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes fc_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fc_scaleIn {
    from { opacity: 0; transform: scale(0.93); }
    to   { opacity: 1; transform: scale(1); }
  }
`;

// Save facility images as /facility1.jpg etc in public folder
const facilities = [
    { icon: ScienceIcon, title: 'Science Laboratories', src: '/faci1.jpg', tag: 'Sciences', desc: '4 fully-equipped labs for Biology, Chemistry, Physics and Integrated Science — supporting hands-on learning at every level.' },
    { icon: ComputerIcon, title: 'ICT Centre', src: '/faci2.jpg', tag: 'Technology', desc: '60-seat computer lab with high-speed internet, coding stations and smart projectors for digital learning.' },
    { icon: LocalLibraryIcon, title: 'Library & Resource Hub', src: '/faci3.jpg', tag: 'Learning', desc: 'Over 10,000 volumes, digital reading stations and quiet study rooms open to students daily from 7am to 8pm.' },
    { icon: SportsIcon, title: 'Sports Complex', src: '/faci4.jpg', tag: 'Sports', desc: 'Full-size football pitch, basketball court, athletics track, swimming pool and a multipurpose indoor arena.' },
    { icon: HotelIcon, title: 'Boarding House', src: '/faci5.jpg', tag: 'Boarding', desc: 'Safe, supervised dormitories for 500 students with 24/7 security, housemasters and dedicated study time.' },
    { icon: RestaurantIcon, title: 'Dining Hall', src: '/faci6.jpg', tag: 'Wellness', desc: 'Nutritionally balanced meals served three times daily in a 600-seat dining hall managed by professional catering staff.' },
];

const tagColors = {
    Sciences: colors.primary.main,
    Technology: colors.secondary.dark,
    Learning: colors.primary.dark,
    Sports: '#2E7D32',
    Boarding: colors.primary.light,
    Wellness: colors.secondary.main,
};

const FacilityCard = ({ item, index, visible }) => {
    const [hovered, setHovered] = useState(false);
    const Icon = item.icon;
    const tagColor = tagColors[item.tag];

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                bgcolor: colors.background.paper,
                boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.07)',
                transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.35s ease',
                border: `1px solid ${hovered ? tagColor + '55' : colors.divider}`,
                animation: visible ? `fc_scaleIn 0.7s ease ${index * 0.1 + 0.1}s both` : 'none',
                cursor: 'default',
            }}
        >
            {/* Image */}
            <Box sx={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                <Box
                    component="img"
                    src={item.src}
                    alt={item.title}
                    sx={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                        transform: hovered ? 'scale(1.07)' : 'scale(1)',
                    }}
                />
                <Box sx={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(180deg, transparent 30%, rgba(10,20,50,0.8) 100%)`,
                    opacity: hovered ? 1 : 0.5,
                    transition: 'opacity 0.35s ease',
                }} />

                {/* Tag */}
                <Box sx={{
                    position: 'absolute', top: 12, left: 12,
                    bgcolor: tagColor, px: 1.5, py: 0.5, borderRadius: '4px',
                }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1, textTransform: 'uppercase' }}>
                        {item.tag}
                    </Typography>
                </Box>

                {/* Icon bottom-right on image */}
                <Box sx={{
                    position: 'absolute', bottom: 12, right: 12,
                    width: 40, height: 40, borderRadius: '10px',
                    bgcolor: hovered ? tagColor : 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    transform: hovered ? 'rotate(8deg)' : 'rotate(0)',
                }}>
                    <Icon sx={{ fontSize: 20, color: 'white' }} />
                </Box>
            </Box>

            {/* Content */}
            <Box sx={{ p: 3 }}>
                <Typography sx={{
                    fontFamily: typography.fontFamily.heading,
                    fontSize: typography.fontSize.md,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.primary.dark,
                    mb: 0.6,
                }}>
                    {item.title}
                </Typography>
                <Box sx={{ width: hovered ? 40 : 24, height: 2, bgcolor: tagColor, mb: 1.5, transition: 'width 0.3s ease' }} />
                <Typography sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.sm,
                    color: colors.text.secondary,
                    lineHeight: 1.75,
                }}>
                    {item.desc}
                </Typography>
            </Box>
        </Box>
    );
};

const FacilitiesTab = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>

            {/* ── Dark intro strip */}
            <Box sx={{
                bgcolor: colors.primary.main,
                py: { xs: 5, md: 7 },
                position: 'relative',
                overflow: 'hidden',
            }}>
                <Box sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary.light}18 1px, transparent 1px)`,
                    backgroundSize: '28px 28px',
                }} />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{
                        display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 4, alignItems: 'center',
                    }}>
                        <Box>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                    Our Facilities
                                </Typography>
                            </Stack>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: { xs: typography.fontSize['2xl'], md: '2.8rem' },
                                fontWeight: typography.fontWeight.bold,
                                color: colors.text.light,
                                lineHeight: 1.2,
                            }}>
                                Built for World-Class Learning
                            </Typography>
                        </Box>
                        <Typography sx={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.base,
                            color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.9,
                        }}>
                            Our campus is designed to inspire — every space is intentional, every facility
                            is maintained to the highest standard to support students academically,
                            physically and socially.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* ── Facilities grid */}
            <Box ref={ref} sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                <Container maxWidth="xl">

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                        gap: 3,
                    }}>
                        {facilities.map((item, i) => (
                            <FacilityCard key={item.title} item={item} index={i} visible={visible} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default FacilitiesTab;
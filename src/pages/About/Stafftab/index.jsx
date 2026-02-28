import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes st_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes st_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`;
const staff = [
    { name: 'Mr. Emmanuel Okafor', role: 'Principal', dept: 'Administration', src: '/staff1.webp', bio: 'Over 20 years in education leadership. Former WAEC examiner and Cambridge-trained educator.' },
    { name: 'Mr. Sonnic Adeyemi', role: 'Vice Principal (Acad.)', dept: 'Administration', src: '/staff2.jpeg', bio: 'BSc Education, MSc Curriculum Development. Passionate about transformative learning.' },
    { name: 'Mr. Chukwuma Eze', role: 'Head of Sciences', dept: 'Sciences', src: '/staff3.jpg', bio: 'PhD Chemistry, University of Lagos. Award-winning science teacher of the year 2022.' },
    { name: 'Mrs. Amina Bello', role: 'Head of Languages', dept: 'Humanities', src: '/staff4.jpg', bio: 'MA English Literature. Dedicated to nurturing voice, expression and critical thinking.' },
    { name: 'Mr. Femi Adewale', role: 'Head of Mathematics', dept: 'Sciences', src: '/staff5.jpg', bio: 'BSc Mathematics, MSc Statistics. Brings mathematical thinking alive for every student.' },
    { name: 'Mrs. Chidinma Obi', role: 'Head of Arts & Culture', dept: 'Creative Arts', src: '/staff6.jpg', bio: 'Celebrated visual artist and educator. Has led our cultural day programme for 10 years.' },
    { name: 'Mr. Yusuf Ibrahim', role: 'Director of Sports', dept: 'Sports', src: '/staff7.jpeg', bio: 'Former national athlete. Coaches our championship-winning football and athletics teams.' },
    { name: 'Mrs. Blessing Nwosu', role: 'School Counsellor', dept: 'Student Welfare', src: '/staff8.jpeg', bio: 'MSc Psychology. Committed to every student\'s mental health and personal development.' },
];

const deptColors = {
    Administration: colors.primary.main,
    Sciences: colors.secondary.dark,
    Humanities: colors.primary.dark,
    'Creative Arts': colors.primary.light,
    Sports: '#2E7D32',
    'Student Welfare': colors.secondary.main,
};

const StaffCard = ({ member, index, visible }) => {
    const [hovered, setHovered] = useState(false);
    const deptColor = deptColors[member.dept] || colors.primary.main;

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                bgcolor: colors.background.paper,
                border: `1px solid ${hovered ? deptColor + '55' : colors.divider}`,
                boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.12)` : '0 4px 16px rgba(0,0,0,0.06)',
                transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.35s ease',
                animation: visible ? `st_fadeUp 0.7s ease ${index * 0.08 + 0.1}s both` : 'none',
                cursor: 'default',
            }}
        >
            {/* Photo */}
            <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                <Box
                    component="img"
                    src={member.src}
                    alt={member.name}
                    sx={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'top',
                        transition: 'transform 0.5s ease',
                        transform: hovered ? 'scale(1.06)' : 'scale(1)',
                    }}
                />
                {/* Overlay on hover */}
                <Box sx={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(180deg, transparent 40%, ${deptColor}DD 100%)`,
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.35s ease',
                }} />

                {/* Social icons appear on hover */}
                <Stack
                    direction="row" gap={1}
                    sx={{
                        position: 'absolute', bottom: 12, left: 0, right: 0,
                        justifyContent: 'center',
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.3s ease',
                    }}
                >
                    {[LinkedInIcon, EmailIcon].map((Icon, i) => (
                        <Box key={i} sx={{
                            width: 36, height: 36, borderRadius: '50%',
                            bgcolor: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'bgcolor 0.2s ease',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.35)' },
                        }}>
                            <Icon sx={{ fontSize: 16, color: 'white' }} />
                        </Box>
                    ))}
                </Stack>

                {/* Dept badge */}
                <Box sx={{
                    position: 'absolute', top: 12, left: 12,
                    bgcolor: deptColor,
                    px: 1.5, py: 0.5, borderRadius: '4px',
                }}>
                    <Typography sx={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: '0.65rem',
                        fontWeight: typography.fontWeight.bold,
                        color: 'white',
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                    }}>
                        {member.dept}
                    </Typography>
                </Box>
            </Box>

            {/* Info */}
            <Box sx={{ p: 2.5 }}>
                <Typography sx={{
                    fontFamily: typography.fontFamily.heading,
                    fontSize: typography.fontSize.base,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.primary.dark,
                    mb: 0.3,
                }}>
                    {member.name}
                </Typography>
                <Typography sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.xs,
                    fontWeight: typography.fontWeight.semiBold,
                    color: deptColor,
                    letterSpacing: 0.5,
                    mb: 1.2,
                }}>
                    {member.role}
                </Typography>
                <Box sx={{ width: 24, height: 2, bgcolor: deptColor, mb: 1.5, transition: 'width 0.3s ease', ...(hovered && { width: 40 }) }} />
                <Typography sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.xs,
                    color: colors.text.secondary,
                    lineHeight: 1.7,
                }}>
                    {member.bio}
                </Typography>
            </Box>
        </Box>
    );
};

const StaffTab = () => {
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
            <Box ref={ref} sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                <Container maxWidth="xl">

                    {/* Header */}
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, animation: visible ? 'st_fadeUp 0.7s ease both' : 'none' }}>
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                Our People
                            </Typography>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.4, flex: 1, maxWidth: 60 }} />
                        </Stack>
                        <Typography sx={{
                            fontFamily: typography.fontFamily.accent,
                            fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' },
                            fontWeight: typography.fontWeight.bold,
                            color: colors.primary.dark,
                            mb: 1.5,
                        }}>
                            The Faces Behind Preston
                        </Typography>
                        <Typography sx={{
                            fontFamily: typography.fontFamily.body,
                            fontSize: typography.fontSize.base,
                            color: colors.text.secondary,
                            maxWidth: 500, mx: 'auto', lineHeight: 1.8,
                        }}>
                            Our dedicated staff are the heartbeat of Preston — experts in their fields and
                            passionate about every student's success.
                        </Typography>
                    </Box>

                    {/* Note about photos */}
                    <Box sx={{
                        bgcolor: `${colors.secondary.main}15`,
                        border: `1px solid ${colors.secondary.main}44`,
                        borderLeft: `4px solid ${colors.secondary.main}`,
                        borderRadius: '0 8px 8px 0',
                        px: 3, py: 1.5, mb: 5,
                        animation: visible ? 'st_fadeUp 0.6s ease 0.1s both' : 'none',
                    }}>
                    </Box>

                    {/* Grid */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                        gap: 3,
                    }}>
                        {staff.map((member, i) => (
                            <StaffCard key={member.name} member={member} index={i} visible={visible} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default StaffTab;
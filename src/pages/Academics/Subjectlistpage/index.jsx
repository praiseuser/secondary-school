import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { colors, typography } from '../../../theme';
import PageHero from '../../../components/common/PageHero';

const keyframes = `
  @keyframes sl_fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const subjectData = [
    {
        arm: 'All Students (Core)', color: colors.primary.dark,
        subjects: ['English Language', 'Mathematics', 'Civic Education', 'Computer Studies', 'Physical & Health Education', 'French'],
    },
    {
        arm: 'Sciences', color: colors.primary.main, 
        subjects: ['Biology', 'Chemistry', 'Physics', 'Further Mathematics', 'Agricultural Science', 'Technical Drawing', 'Food & Nutrition'],
    },
    {
        arm: 'Arts', color: colors.secondary.dark, 
        subjects: ['Literature in English', 'Government', 'History', 'Geography', 'CRS / IRS', 'Fine Art', 'Music', 'Yoruba', 'Igbo', 'Hausa'],
    },
    {
        arm: 'Commercials', color: '#2E7D32',
        subjects: ['Economics', 'Accounting', 'Commerce', 'Office Practice', 'Marketing', 'Business Studies'],
    },
    {
        arm: 'Junior Secondary Only', color: colors.primary.light,
        subjects: ['Basic Science', 'Basic Technology', 'Social Studies', 'Home Economics', 'Cultural & Creative Arts', 'Security Education'],
    },
];

const SubjectListPage = () => {
    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState('All');
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const filters = ['All', ...subjectData.map((s) => s.arm)];
    const displayed = filter === 'All' ? subjectData : subjectData.filter((s) => s.arm === filter);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                <PageHero
                    label="Subject List"
                    title="Every Subject We Offer"
                    description="Browse our full catalogue of subjects across all academic arms — from JSS1 to SS3."
                    backLabel="Back to Academics"
                    backPath="/academics"
                    visible={visible}
                />

                {/* Filter + Subject cards */}
                <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
                    <Container maxWidth="xl">

                        {/* Filter bar */}
                        <Box sx={{ overflowX: 'auto', pb: 1, mb: 5, animation: visible ? 'sl_fadeUp 0.6s ease 0.2s both' : 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
                            <Stack direction="row" gap={1.5} sx={{ width: 'max-content' }}>
                                {filters.map((f) => (
                                    <Box key={f} onClick={() => setFilter(f)}
                                        sx={{
                                            px: 2.5, py: 1, borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap',
                                            bgcolor: filter === f ? colors.primary.dark : 'transparent',
                                            border: `1.5px solid ${filter === f ? colors.primary.dark : colors.divider}`,
                                            transition: 'all 0.2s ease',
                                            '&:hover': { borderColor: colors.primary.dark },
                                        }}>
                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold, color: filter === f ? 'white' : colors.text.secondary, transition: 'color 0.2s ease' }}>
                                            {f}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        {/* Subject groups */}
                        <Stack gap={4}>
                            {displayed.map((group, gi) => (
                                <Box key={group.arm} sx={{ animation: visible ? `sl_fadeUp 0.6s ease ${gi * 0.1 + 0.2}s both` : 'none' }}>
                                    {/* Group header */}
                                    <Stack direction="row" alignItems="center" gap={2} sx={{ mb: 2.5 }}>
                                        <Typography sx={{ fontSize: '1.4rem' }}>{group.icon}</Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>{group.arm}</Typography>
                                        <Box sx={{ flex: 1, height: 1, bgcolor: group.color, opacity: 0.25 }} />
                                        <Box sx={{ bgcolor: group.color, px: 1.5, py: 0.4, borderRadius: '4px' }}>
                                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1 }}>
                                                {group.subjects.length} subjects
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    {/* Subject pills */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                        {group.subjects.map((s, si) => (
                                            <Box key={s}
                                                sx={{
                                                    px: 2.5, py: 1.2,
                                                    borderRadius: '8px',
                                                    bgcolor: colors.background.paper,
                                                    border: `1px solid ${colors.divider}`,
                                                    transition: 'all 0.25s ease',
                                                    animation: visible ? `sl_fadeUp 0.5s ease ${gi * 0.1 + si * 0.04 + 0.3}s both` : 'none',
                                                    '&:hover': {
                                                        bgcolor: group.color,
                                                        borderColor: group.color,
                                                        transform: 'translateY(-3px)',
                                                        boxShadow: `0 8px 20px rgba(0,0,0,0.12)`,
                                                        '& .subj-label': { color: 'white' },
                                                    },
                                                }}>
                                                <Typography className="subj-label" sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: colors.text.primary, transition: 'color 0.25s ease' }}>
                                                    {s}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default SubjectListPage;
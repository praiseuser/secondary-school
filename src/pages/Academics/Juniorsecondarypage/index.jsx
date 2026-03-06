import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { colors, typography } from '../../../theme';
import PageHero from '../../../components/common/PageHero';


const keyframes = `
  @keyframes js_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const jssClasses = [
  { level: 'JSS 1', color: colors.primary.main,  desc: 'Introduction to secondary school. Students settle in, build confidence and develop strong study habits.', subjects: ['English Language', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'CRS/IRS', 'French', 'Yoruba/Igbo/Hausa', 'Agricultural Science', 'Home Economics', 'Physical Education', 'Computer Studies'] },
  { level: 'JSS 2', color: colors.secondary.dark, desc: 'Building on foundations. Students deepen subject knowledge and begin exploring areas of interest.', subjects: ['English Language', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'CRS/IRS', 'French', 'Local Language', 'Agricultural Science', 'Home Economics', 'Physical Education', 'Computer Studies'] },
  { level: 'JSS 3', color: colors.primary.dark,   desc: 'Preparation for BECE and transition to Senior Secondary. Focus intensifies on core subjects.', subjects: ['English Language', 'Mathematics', 'Basic Science', 'Basic Technology', 'Social Studies', 'CRS/IRS', 'French', 'Local Language', 'Agricultural Science', 'Home Economics', 'Physical Education', 'Computer Studies'] },
];

const JuniorSecondaryPage = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const [activeClass, setActiveClass] = useState(0);

  return (
    <>
      <style>{keyframes}</style>
      <Box ref={ref}>

        <PageHero
          label="Junior Secondary"
          title="JSS 1 — JSS 3"
          description="The Junior Secondary years lay the foundation for every student's academic journey. We build strong habits, deep curiosity and unshakeable confidence."
          backLabel="Back to Academics"
          backPath="/academics"
          visible={visible}
        />

        <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
          <Container maxWidth="xl">

            {/* Class tabs */}
            <Stack direction="row" gap={2} sx={{ mb: 5, flexWrap: 'wrap', animation: visible ? 'js_fadeUp 0.7s ease 0.2s both' : 'none' }}>
              {jssClasses.map((cls, i) => (
                <Box key={cls.level} onClick={() => setActiveClass(i)} sx={{ px: 3, py: 1.5, borderRadius: '10px', cursor: 'pointer', bgcolor: activeClass === i ? cls.color : 'transparent', border: `2px solid ${activeClass === i ? cls.color : colors.divider}`, transition: 'all 0.25s ease', '&:hover': { borderColor: cls.color } }}>
                  <Typography sx={{ fontFamily: typography.fontFamily.body, fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize.sm, color: activeClass === i ? 'white' : colors.text.secondary, transition: 'color 0.25s ease' }}>{cls.level}</Typography>
                </Box>
              ))}
            </Stack>

            {/* Active class content */}
            <Box key={activeClass} sx={{ animation: 'js_fadeUp 0.4s ease both' }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
                <Box>
                  <Box sx={{ bgcolor: jssClasses[activeClass].color, display: 'inline-block', px: 2, py: 0.6, borderRadius: '6px', mb: 2 }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1, textTransform: 'uppercase' }}>{jssClasses[activeClass].level}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: typography.fontSize['2xl'] }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1.5 }}>
                    What to Expect in {jssClasses[activeClass].level}
                  </Typography>
                  <Box sx={{ width: 36, height: 3, bgcolor: jssClasses[activeClass].color, mb: 2 }} />
                  <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9 }}>{jssClasses[activeClass].desc}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 2.5 }}>Subjects Offered</Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                    {jssClasses[activeClass].subjects.map((s) => (
                      <Stack key={s} direction="row" alignItems="center" gap={1}>
                        <CheckCircleIcon sx={{ fontSize: 14, color: jssClasses[activeClass].color, flexShrink: 0 }} />
                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.primary }}>{s}</Typography>
                      </Stack>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>

          </Container>
        </Box>
      </Box>
    </>
  );
};

export default JuniorSecondaryPage;
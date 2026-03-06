import { Box, Typography, Stack, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { colors, typography } from '../../../theme';
import PageHero from '../../../components/common/PageHero';
import SectionHeader from '../../../components/common/SectionHeader';
import HoverCard from '../../../components/common/Hovercard';
import { useEffect, useRef, useState } from 'react';

const keyframes = `
  @keyframes cu_fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cu_fadeLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes cu_fadeRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
`;

const frameworks = [
  { title: 'WAEC / NECO', color: colors.primary.main, desc: 'Our primary national examination framework. Students are fully prepared for WASSCE and SSCE across all subjects.', points: ['Strong past-question training', 'Mock examinations every term', 'Expert WAEC-accredited teachers', '98% average pass rate'] },
  { title: 'Cambridge IGCSE', color: colors.secondary.dark, desc: 'Cambridge-aligned curriculum offering internationally recognised qualifications that open doors worldwide.', points: ['Internationally benchmarked', 'Critical thinking focus', 'Cambridge-certified instructors', 'Recognised in 160+ countries'] },
  { title: 'Nigerian National Curriculum', color: colors.primary.dark, desc: 'Full compliance with the Federal Ministry of Education guidelines ensuring all students meet national standards.', points: ['FME curriculum-aligned', 'Cultural context integration', 'Civic and values education', 'National identity emphasis'] },
];

const arms = [
  { label: 'Sciences', color: colors.primary.main, desc: 'Biology, Chemistry, Physics, Mathematics, Further Maths' },
  { label: 'Arts', color: colors.secondary.dark, desc: 'Literature, History, Government, CRS/IRS, Fine Art' },
  { label: 'Commercials', color: colors.primary.dark, desc: 'Accounting, Economics, Commerce, Office Practice, Marketing' },
];

const CurriculumPage = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <Box ref={ref}>

        <PageHero
          label="Curriculum"
          title="Curriculum Overview"
          subtitle="Built for Nigeria. Ready for the World."
          description="Our curriculum blends the Nigerian National Curriculum with Cambridge's internationally recognised framework — creating graduates who are both rooted in Nigerian values and globally competitive."
          backLabel="Back to Academics"
          backPath="/academics"
          visible={visible}
        />

        <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
          <Container maxWidth="xl">

            {/* Image + intro */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'center', mb: { xs: 8, md: 12 } }}>
              <Box sx={{ animation: visible ? 'cu_fadeLeft 0.8s ease 0.2s both' : 'none' }}>
                <Box component="img" src="/academics-curriculum.jpg" alt="Curriculum"
                  sx={{ width: '100%', height: { xs: 260, md: 400 }, objectFit: 'cover', borderRadius: '16px', boxShadow: '0 24px 60px rgba(0,0,0,0.15)', display: 'block' }}
                />
              </Box>
              <Box sx={{ animation: visible ? 'cu_fadeRight 0.8s ease 0.3s both' : 'none' }}>
                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.2, mb: 2 }}>
                  A Curriculum Designed to Develop the Whole Student
                </Typography>
                <Box sx={{ width: 40, height: 3, bgcolor: colors.secondary.main, mb: 2.5 }} />
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9, mb: 2 }}>
                  At Preston, we believe education goes beyond passing exams. Our curriculum is deliberately designed to develop critical thinkers, ethical leaders and innovative problem-solvers.
                </Typography>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9 }}>
                  From JSS1 through SS3, every subject is taught within a framework that builds on previous knowledge, challenges students to think deeper and connects learning to the real world.
                </Typography>
              </Box>
            </Box>

            {/* Frameworks */}
            <Box sx={{ mb: { xs: 8, md: 12 } }}>
              <SectionHeader label="Frameworks" title="Three Frameworks. One Purpose." centered animation={visible ? 'cu_fadeUp 0.7s ease 0.3s both' : 'none'} />
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                {frameworks.map((f, i) => (
                  <HoverCard key={f.title} color={f.color} animation={visible ? `cu_fadeUp 0.7s ease ${i * 0.12 + 0.3}s both` : 'none'}>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: f.color, mb: 1 }}>{f.title}</Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7, mb: 2.5 }}>{f.desc}</Typography>
                    <Stack gap={1}>
                      {f.points.map((p) => (
                        <Stack key={p} direction="row" alignItems="center" gap={1}>
                          <CheckCircleIcon sx={{ fontSize: 15, color: f.color, flexShrink: 0 }} />
                          <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.text.primary }}>{p}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </HoverCard>
                ))}
              </Box>
            </Box>

            {/* Arms */}
            <Box>
              <SectionHeader label="Senior Arms" title="Three Pathways to Excellence" centered animation={visible ? 'cu_fadeUp 0.7s ease 0.4s both' : 'none'} mb={5} />
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                {arms.map((arm, i) => (
                  <Box key={arm.label} sx={{ bgcolor: arm.color, borderRadius: '14px', p: 3.5, animation: visible ? `cu_fadeUp 0.7s ease ${i * 0.12 + 0.4}s both` : 'none', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' } }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: 'rgba(255,255,255,0.15)', lineHeight: 1, mb: 1 }}>{String(i + 1).padStart(2, '0')}</Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: 'white', mb: 1 }}>{arm.label}</Typography>
                    <Box sx={{ width: 30, height: 2, bgcolor: colors.secondary.main, mb: 1.5 }} />
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{arm.desc}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

          </Container>
        </Box>
      </Box>
    </>
  );
};

export default CurriculumPage;
import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import GavelIcon from '@mui/icons-material/Gavel';
import PaletteIcon from '@mui/icons-material/Palette';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes sl_fadeUp { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
  @keyframes sl_shimmer { 0% { background-position:-400px 0; } 100% { background-position:400px 0; } }
`;

const clubs = [
  { icon: ScienceIcon,      color: colors.primary.main,  name: 'Science Club',      desc: 'Experiments, innovation fairs and inter-school competitions.'                   },
  { icon: GavelIcon,        color: colors.secondary.dark, name: 'Debate Society',    desc: 'Critical thinking, public speaking and national debate tournaments.'            },
  { icon: PaletteIcon,      color: '#C62828',             name: 'Art & Design Club', desc: 'Painting, sculpture, graphic design and annual exhibitions.'                    },
  { icon: MusicNoteIcon,    color: '#6A1B9A',             name: 'Music & Drama',     desc: 'Choir, instruments, school productions and cultural performances.'              },
  { icon: CameraAltIcon,    color: colors.primary.dark,  name: 'Photography Club',  desc: 'Visual storytelling, darkroom techniques and photo exhibitions.'                },
  { icon: LocalFloristIcon, color: '#2E7D32',             name: 'Eco & Garden Club', desc: 'Sustainability projects, school garden and environmental awareness.'            },
];

const values = [
  'Leadership development at every level',
  'Peer mentoring and buddy programmes',
  'Student council with real school influence',
  'House system building team spirit',
  'Annual cultural and inter-house competitions',
  'Community service and outreach projects',
];

const events = [
  { month: 'Sept', title: 'Welcome Assembly',          type: 'Community' },
  { month: 'Oct',  title: 'Inter-House Sports Day',    type: 'Sports'    },
  { month: 'Nov',  title: 'Science & Innovation Fair', type: 'Academic'  },
  { month: 'Dec',  title: 'Cultural Day & Prize Giving', type: 'Culture' },
  { month: 'Feb',  title: "Founders' Day Celebration", type: 'Culture'   },
  { month: 'May',  title: "Children's Day Celebration",type: 'Community' },
  { month: 'Jul',  title: 'Graduation & Valedictory',  type: 'Milestone' },
];

const typeColors = { Community: colors.primary.main, Sports: '#2E7D32', Academic: colors.secondary.dark, Culture: '#C62828', Milestone: colors.secondary.main };

const stats = [
  { value: '15+',    label: 'Active Clubs'          },
  { value: '20+',    label: 'Annual Events'          },
  { value: '3,000+', label: 'Students'               },
  { value: '100%',   label: 'Student Participation'  },
];

const StudentLifePage = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeClub, setActiveClub] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <Box ref={ref}>

        {/* Hero */}
        <Box sx={{ bgcolor: colors.primary.dark, py: { xs: 8, md: 11 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' } }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, transparent)` }} />
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
            <Stack direction="row" alignItems="center" gap={1} onClick={() => {}} sx={{ mb: 3, cursor: 'pointer', width: 'fit-content' }} component={Link} to="/campus-life" style={{ textDecoration: 'none' }}>
              <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main, transform: 'rotate(180deg)' }} />
              <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: colors.secondary.main, fontWeight: typography.fontWeight.semiBold, letterSpacing: 1 }}>Back to Campus Life</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'sl_fadeUp 0.6s ease both' : 'none' }}>
              <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
              <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Student Life</Typography>
            </Stack>
            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: '2.2rem', md: '3.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.text.light, lineHeight: 1.15, mb: 1, animation: visible ? 'sl_fadeUp 0.6s ease 0.1s both' : 'none' }}>Where Every Student Finds Their Place</Typography>
            <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize.xl, md: '1.8rem' }, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, mb: 2, animation: visible ? 'sl_fadeUp 0.6s ease 0.15s both' : 'none' }}>Community. Creativity. Character.</Typography>
            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 620, animation: visible ? 'sl_fadeUp 0.6s ease 0.25s both' : 'none' }}>
              Preston's student life is a rich tapestry of clubs, events, leadership opportunities and friendships that last a lifetime.
            </Typography>
          </Container>
        </Box>

        <Box sx={{ bgcolor: colors.background.default, py: { xs: 8, md: 12 } }}>
          <Container maxWidth="xl">

            {/* Values + image */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'center', mb: { xs: 8, md: 12 } }}>
              <Box sx={{ animation: visible ? 'sl_fadeUp 0.7s ease 0.1s both' : 'none' }}>
                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                  <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                  <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Our Community</Typography>
                </Stack>
                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.2, mb: 3 }}>More Than a School — A Family</Typography>
                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.9, mb: 3 }}>
                  From the first day of JSS1 to graduation, every Preston student is part of a community that celebrates individuality, encourages collaboration and champions growth.
                </Typography>
                <Stack gap={1.5}>
                  {values.map((v) => (
                    <Stack key={v} direction="row" alignItems="flex-start" gap={1.5}>
                      <CheckCircleIcon sx={{ fontSize: 16, color: colors.secondary.main, flexShrink: 0, mt: 0.2 }} />
                      <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.primary, lineHeight: 1.6 }}>{v}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
              <Box sx={{ animation: visible ? 'sl_fadeUp 0.7s ease 0.2s both' : 'none', position: 'relative' }}>
                <Box
                  component="img"
                  src="/student-life.jpeg"
                  alt="Student Life at Preston"
                  sx={{ width: '100%', height: { xs: 280, md: 420 }, objectFit: 'cover', borderRadius: '20px', display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.15)' }}
                />
                <Box sx={{ position: 'absolute', top: 20, left: -20, right: 20, bottom: -20, border: `2px solid ${colors.secondary.main}33`, borderRadius: '20px', zIndex: -1 }} />
              </Box>
            </Box>

            {/* Clubs */}
            <Box sx={{ mb: { xs: 8, md: 12 } }}>
              <Box sx={{ textAlign: 'center', mb: 6, animation: visible ? 'sl_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                  <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.45, flex: '1 1 0', maxWidth: 80 }} />
                  <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Clubs & Societies</Typography>
                  <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.45, flex: '1 1 0', maxWidth: 80 }} />
                </Stack>
                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>Find Your Passion</Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2.5 }}>
                {clubs.map((club, i) => {
                  const Icon = club.icon;
                  const isActive = activeClub === i;
                  return (
                    <Box key={club.name} onClick={() => setActiveClub(isActive ? null : i)} sx={{ p: 3, borderRadius: '14px', border: `1px solid ${isActive ? club.color + '66' : colors.divider}`, bgcolor: isActive ? club.color + '0D' : colors.background.paper, cursor: 'pointer', transition: 'all 0.25s ease', animation: visible ? `sl_fadeUp 0.6s ease ${i * 0.08 + 0.3}s both` : 'none', '&:hover': { borderColor: club.color + '55', transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' } }}>
                      <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
                        <Box sx={{ width: 42, height: 42, borderRadius: '10px', bgcolor: club.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon sx={{ fontSize: 22, color: club.color }} />
                        </Box>
                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>{club.name}</Typography>
                      </Stack>
                      <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7 }}>{club.desc}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Events */}
            <Box sx={{ mb: { xs: 8, md: 12 } }}>
              <Box sx={{ textAlign: 'center', mb: 6, animation: visible ? 'sl_fadeUp 0.6s ease 0.2s both' : 'none' }}>
                <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                  <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.45, flex: '1 1 0', maxWidth: 80 }} />
                  <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>Key Events</Typography>
                  <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.45, flex: '1 1 0', maxWidth: 80 }} />
                </Stack>
                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.4rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark }}>A Year Full of Highlights</Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
                {events.map((ev, i) => {
                  const c = typeColors[ev.type];
                  return (
                    <Box key={ev.title} sx={{ p: 2.5, borderRadius: '12px', bgcolor: colors.background.paper, border: `1px solid ${colors.divider}`, borderLeft: `3px solid ${c}`, animation: visible ? `sl_fadeUp 0.6s ease ${i * 0.07 + 0.3}s both` : 'none', transition: 'all 0.25s ease', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' } }}>
                      <Box sx={{ display: 'inline-block', bgcolor: c + '18', border: `1px solid ${c}33`, px: 1.2, py: 0.3, borderRadius: '4px', mb: 1.5 }}>
                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: c }}>{ev.month}</Typography>
                      </Box>
                      <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, lineHeight: 1.4, mb: 0.8 }}>{ev.title}</Typography>
                      <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.65rem', fontWeight: typography.fontWeight.bold, color: c, letterSpacing: 1, textTransform: 'uppercase' }}>{ev.type}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Stats */}
            <Box sx={{ bgcolor: colors.primary.dark, borderRadius: '20px', p: { xs: 4, md: 5 }, position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' } }}>
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`, backgroundSize: '400px 100%', animation: 'sl_shimmer 3s linear infinite' }} />
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4,1fr)' }, gap: { xs: 4, md: 0 }, position: 'relative', zIndex: 1, textAlign: 'center' }}>
                {stats.map((s, i) => (
                  <Box key={s.label} sx={{ borderRight: { sm: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }, px: { sm: 3 }, animation: visible ? `sl_fadeUp 0.6s ease ${i * 0.1 + 0.2}s both` : 'none' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' }, fontWeight: 900, color: colors.secondary.main, lineHeight: 1, mb: 0.5 }}>{s.value}</Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.45)', letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</Typography>
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

export default StudentLifePage;
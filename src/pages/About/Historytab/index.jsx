import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes hs_fadeLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes hs_fadeRight {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes hs_dotIn {
    from { opacity: 0; transform: scale(0); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes hs_lineDown {
    from { height: 0; }
    to   { height: '100%'; }
  }
`;

const milestones = [
    { year: '1999', title: 'The Beginning', desc: 'Preston International School was founded with just 12 students and a vision — to provide world-class education in Nigeria.' },
    { year: '2004', title: 'First WAEC Results', desc: 'Our pioneer SS3 set recorded a 100% pass rate in WAEC, putting Preston on the national academic map for the first time.' },
    { year: '2008', title: 'Cambridge Accreditation', desc: 'We became one of the first schools in the region to receive full Cambridge International certification, expanding our curriculum.' },
    { year: '2013', title: 'New Campus Launch', desc: 'Our state-of-the-art campus was inaugurated — featuring modern labs, a sports complex and boarding facilities for 500 students.' },
    { year: '2018', title: 'National Excellence Award', desc: 'Preston was awarded the National School of Excellence Award by the Federal Ministry of Education for academic achievement.' },
    { year: '2024', title: 'Today & Beyond', desc: 'With over 3,000 students and 25 years of excellence, we continue to shape the next generation of Nigeria\'s leaders.' },
];

const HistoryTab = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref} sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.background.default }}>
                <Container maxWidth="xl">

                    {/* Section intro */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: { xs: 4, md: 10 },
                        alignItems: 'center',
                        mb: { xs: 8, md: 12 },
                    }}>
                        <Box sx={{ animation: visible ? 'hs_fadeLeft 0.8s ease both' : 'none' }}>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                    Our Story
                                </Typography>
                            </Stack>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: { xs: typography.fontSize['2xl'], md: '2.8rem' },
                                fontWeight: typography.fontWeight.bold,
                                color: colors.primary.dark,
                                lineHeight: 1.2, mb: 3,
                            }}>
                                25 Years of Shaping Futures
                            </Typography>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.base,
                                color: colors.text.secondary,
                                lineHeight: 1.9, mb: 2,
                            }}>
                                What started as a humble dream in 1999 has grown into one of Nigeria's most respected secondary schools.
                                Our founder believed that every Nigerian child deserved access to a world-class education — and that
                                belief has never wavered.
                            </Typography>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.base,
                                color: colors.text.secondary,
                                lineHeight: 1.9,
                            }}>
                                From 12 students in a single classroom to a thriving community of over 3,000,
                                every chapter of our story has been written by the students, staff and families who dared to dream big.
                            </Typography>
                        </Box>

                        {/* Right — decorative image block */}
                        <Box
                            sx={{
                                position: 'relative',
                                animation: visible ? 'hs_fadeRight 0.8s ease 0.2s both' : 'none',
                            }}
                        >
                            <Box
                                component="img"
                                src="/about-history.jpg"
                                alt="School history"
                                sx={{
                                    width: '100%', height: { xs: 280, md: 420 },
                                    objectFit: 'cover', borderRadius: '16px',
                                    display: 'block',
                                    boxShadow: '0 24px 60px rgba(0,0,0,0.15)',
                                }}
                            />
                            {/* Gold frame */}
                            <Box sx={{
                                position: 'absolute',
                                top: 20, left: -20, right: 20, bottom: -20,
                                border: `2px solid ${colors.secondary.main}`,
                                borderRadius: '16px', zIndex: -1, opacity: 0.35,
                            }} />
                            {/* Founded badge */}
                            <Box sx={{
                                position: 'absolute', top: -16, right: -16,
                                bgcolor: colors.secondary.main,
                                borderRadius: '50%',
                                width: 90, height: 90,
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', justifyContent: 'center',
                                boxShadow: `0 8px 24px rgba(212,160,23,0.4)`,
                            }}>
                                <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.black, color: colors.primary.dark, lineHeight: 1 }}>
                                    1999
                                </Typography>
                                <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: '0.6rem', fontWeight: typography.fontWeight.bold, color: colors.primary.dark, letterSpacing: 1 }}>
                                    FOUNDED
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Timeline */}
                    <Box sx={{ animation: visible ? 'hs_fadeLeft 0.8s ease 0.3s both' : 'none' }}>
                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 6 }}>
                            <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 3, textTransform: 'uppercase' }}>
                                Key Milestones
                            </Typography>
                        </Stack>

                        <Box sx={{ position: 'relative' }}>
                            {/* Vertical centre line */}
                            <Box sx={{
                                display: { xs: 'none', md: 'block' },
                                position: 'absolute',
                                left: '50%', top: 0, bottom: 0,
                                width: 2,
                                background: `linear-gradient(180deg, ${colors.secondary.main}, ${colors.secondary.dark}44)`,
                                transform: 'translateX(-50%)',
                                zIndex: 0,
                            }} />

                            <Stack gap={0}>
                                {milestones.map((m, i) => {
                                    const isLeft = i % 2 === 0;
                                    return (
                                        <Box
                                            key={m.year}
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { xs: '1fr', md: '1fr 60px 1fr' },
                                                gap: 0,
                                                alignItems: 'center',
                                                mb: 2,
                                                animation: visible ? `${isLeft ? 'hs_fadeLeft' : 'hs_fadeRight'} 0.7s ease ${0.1 * i + 0.4}s both` : 'none',
                                            }}
                                        >
                                            {/* Left content */}
                                            <Box sx={{
                                                display: { xs: 'flex', md: isLeft ? 'flex' : 'none' },
                                                justifyContent: { md: 'flex-end' },
                                                pr: { md: 4 },
                                            }}>
                                                {isLeft || true ? (
                                                    <Box sx={{
                                                        bgcolor: colors.background.paper,
                                                        border: `1px solid ${colors.divider}`,
                                                        borderRadius: '12px',
                                                        p: 3,
                                                        maxWidth: 360,
                                                        width: '100%',
                                                        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                                        transition: 'all 0.25s ease',
                                                        '&:hover': {
                                                            boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                                                            transform: 'translateY(-3px)',
                                                            borderColor: colors.secondary.main + '44',
                                                        },
                                                        display: isLeft ? 'block' : { xs: 'block', md: 'none' },
                                                    }}>
                                                        <Typography sx={{
                                                            fontFamily: typography.fontFamily.accent,
                                                            fontSize: typography.fontSize.xl,
                                                            fontWeight: typography.fontWeight.bold,
                                                            color: colors.secondary.main,
                                                            mb: 0.5,
                                                        }}>
                                                            {m.year}
                                                        </Typography>
                                                        <Typography sx={{
                                                            fontFamily: typography.fontFamily.heading,
                                                            fontSize: typography.fontSize.base,
                                                            fontWeight: typography.fontWeight.bold,
                                                            color: colors.primary.dark,
                                                            mb: 1,
                                                        }}>
                                                            {m.title}
                                                        </Typography>
                                                        <Typography sx={{
                                                            fontFamily: typography.fontFamily.body,
                                                            fontSize: typography.fontSize.sm,
                                                            color: colors.text.secondary,
                                                            lineHeight: 1.7,
                                                        }}>
                                                            {m.desc}
                                                        </Typography>
                                                    </Box>
                                                ) : null}
                                            </Box>

                                            {/* Centre dot */}
                                            <Box sx={{
                                                display: { xs: 'none', md: 'flex' },
                                                alignItems: 'center', justifyContent: 'center',
                                                zIndex: 1,
                                            }}>
                                                <Box sx={{
                                                    width: 18, height: 18, borderRadius: '50%',
                                                    bgcolor: colors.secondary.main,
                                                    border: `3px solid ${colors.background.default}`,
                                                    boxShadow: `0 0 0 3px ${colors.secondary.main}55`,
                                                    animation: visible ? `hs_dotIn 0.4s ease ${0.1 * i + 0.5}s both` : 'none',
                                                }} />
                                            </Box>

                                            {/* Right content */}
                                            <Box sx={{
                                                display: { xs: 'none', md: !isLeft ? 'flex' : 'flex' },
                                                pl: { md: 4 },
                                                justifyContent: 'flex-start',
                                            }}>
                                                {!isLeft && (
                                                    <Box sx={{
                                                        bgcolor: colors.background.paper,
                                                        border: `1px solid ${colors.divider}`,
                                                        borderRadius: '12px',
                                                        p: 3,
                                                        maxWidth: 360,
                                                        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                                        transition: 'all 0.25s ease',
                                                        '&:hover': {
                                                            boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                                                            transform: 'translateY(-3px)',
                                                            borderColor: colors.secondary.main + '44',
                                                        },
                                                    }}>
                                                        <Typography sx={{ fontFamily: typography.fontFamily.accent, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, mb: 0.5 }}>
                                                            {m.year}
                                                        </Typography>
                                                        <Typography sx={{ fontFamily: typography.fontFamily.heading, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1 }}>
                                                            {m.title}
                                                        </Typography>
                                                        <Typography sx={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.7 }}>
                                                            {m.desc}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default HistoryTab;
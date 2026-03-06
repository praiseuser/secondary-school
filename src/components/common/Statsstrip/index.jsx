import { Box, Typography } from '@mui/material';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes ss_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
  @keyframes ss_fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
const StatsStrip = ({ stats = [], visible = true, rounded = true }) => {
    return (
        <>
            <style>{keyframes}</style>
            <Box sx={{
                bgcolor: colors.primary.dark,
                borderRadius: rounded ? '20px' : 0,
                p: { xs: 4, md: 5 },
                position: 'relative',
                overflow: 'hidden',
                // Dot grid background
                '&::before': {
                    content: '""',
                    position: 'absolute', inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary.light}12 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px',
                },
            }}>
                {/* Gold shimmer top line */}
                <Box sx={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, transparent, ${colors.secondary.main}, ${colors.secondary.light}, ${colors.secondary.main}, transparent)`,
                    backgroundSize: '400px 100%',
                    animation: 'ss_shimmer 3s linear infinite',
                }} />

                {/* Stats grid */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: stats.length <= 2 ? `repeat(${stats.length}, 1fr)` : '1fr 1fr',
                        sm: `repeat(${stats.length}, 1fr)`,
                    },
                    gap: { xs: 4, md: 0 },
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                }}>
                    {stats.map((stat, i) => (
                        <Box
                            key={stat.label}
                            sx={{
                                borderRight: {
                                    sm: i < stats.length - 1 ? `1px solid rgba(255,255,255,0.08)` : 'none',
                                },
                                px: { sm: 3 },
                                animation: visible ? `ss_fadeUp 0.6s ease ${i * 0.1 + 0.2}s both` : 'none',
                            }}
                        >
                            <Typography sx={{
                                fontFamily: typography.fontFamily.accent,
                                fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' },
                                fontWeight: typography.fontWeight.black,
                                color: colors.secondary.main,
                                lineHeight: 1,
                                mb: 0.5,
                            }}>
                                {stat.value}
                            </Typography>
                            <Typography sx={{
                                fontFamily: typography.fontFamily.body,
                                fontSize: typography.fontSize.xs,
                                color: 'rgba(255,255,255,0.45)',
                                letterSpacing: 1,
                                textTransform: 'uppercase',
                            }}>
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default StatsStrip;
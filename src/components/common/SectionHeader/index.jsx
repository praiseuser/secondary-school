import { Box, Typography, Stack } from '@mui/material';
import { colors, typography } from '../../../theme';

const SectionHeader = ({
    label,
    title,
    subtitle,
    centered = false,
    light = false,
    mb = 6,
    titleSize,
    animation,
}) => {
    const defaultTitleSize = titleSize || { xs: typography.fontSize['2xl'], md: '2.4rem' };
    const titleColor = light ? colors.text.light : colors.primary.dark;

    return (
        <Box
            sx={{
                textAlign: centered ? 'center' : 'left',
                mb,
                ...(animation ? { animation } : {}),
            }}
        >
            {/* Label row — left has a short gold bar, centered has lines on both sides */}
            {label && (
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={centered ? 'center' : 'flex-start'}
                    gap={centered ? 2 : 1.5}
                    sx={{ mb: 2 }}
                >
                    {/* Left line (always shown) */}
                    <Box sx={{
                        height: centered ? 1 : 2,
                        bgcolor: colors.secondary.main,
                        opacity: centered ? 0.45 : 1,
                        width: centered ? undefined : 36,
                        flex: centered ? '1 1 0' : undefined,
                        maxWidth: centered ? 80 : undefined,
                        flexShrink: centered ? 0 : undefined,
                    }} />

                    <Typography sx={{
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.xs,
                        fontWeight: typography.fontWeight.bold,
                        color: colors.secondary.main,
                        letterSpacing: 3,
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                    }}>
                        {label}
                    </Typography>

                    {/* Right line — only in centered mode */}
                    {centered && (
                        <Box sx={{
                            height: 1,
                            bgcolor: colors.secondary.main,
                            opacity: 0.45,
                            flex: '1 1 0',
                            maxWidth: 80,
                            flexShrink: 0,
                        }} />
                    )}
                </Stack>
            )}

            {/* Title */}
            <Typography sx={{
                fontFamily: typography.fontFamily.accent,
                fontSize: defaultTitleSize,
                fontWeight: typography.fontWeight.bold,
                color: titleColor,
                lineHeight: 1.2,
                mb: subtitle ? 1.5 : 0,
            }}>
                {title}
            </Typography>

            {/* Optional subtitle */}
            {subtitle && (
                <Typography sx={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.base,
                    color: light ? 'rgba(255,255,255,0.55)' : colors.text.secondary,
                    lineHeight: 1.8,
                    maxWidth: centered ? 520 : undefined,
                    mx: centered ? 'auto' : undefined,
                }}>
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};

export default SectionHeader;
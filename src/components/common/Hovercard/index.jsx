import { useState } from 'react';
import { Box } from '@mui/material';
import { colors } from '../../../theme';

const HoverCard = ({
    color = colors.primary.main,
    children,
    p = 3.5,
    animation,
    topBar = true,
    topBarSize = 4,
    onClick,
    sx = {},
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            sx={{
                bgcolor: colors.background.paper,
                borderRadius: '16px',
                overflow: 'hidden',
                border: `1px solid ${hovered ? color + '55' : colors.divider}`,
                boxShadow: hovered
                    ? `0 20px 50px rgba(0,0,0,0.12), 0 0 0 1px ${color}22`
                    : '0 4px 20px rgba(0,0,0,0.06)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
                cursor: onClick ? 'pointer' : 'default',
                ...(animation ? { animation } : {}),
                ...sx,
            }}
        >
            {/* Colored top bar */}
            {topBar && (
                <Box sx={{
                    height: topBarSize,
                    background: `linear-gradient(90deg, ${color}, ${color}88)`,
                    width: hovered ? '100%' : '40%',
                    transition: 'width 0.4s ease',
                }} />
            )}

            {/* Card content */}
            <Box sx={{ p }}>
                {children}
            </Box>
        </Box>
    );
};

export default HoverCard;
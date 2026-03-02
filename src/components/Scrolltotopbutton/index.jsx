import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { colors } from '../../theme';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <Box
            onClick={scrollUp}
            sx={{
                position: 'fixed',
                bottom: 32,
                right: 32,
                zIndex: 9999,
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: colors.secondary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: `0 8px 24px rgba(212,160,23,0.45)`,
                border: `2px solid ${colors.secondary.light}`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                transition: 'all 0.3s ease',
                pointerEvents: visible ? 'auto' : 'none',
                '&:hover': {
                    bgcolor: colors.secondary.light,
                    transform: 'translateY(-4px) scale(1.08)',
                    boxShadow: `0 12px 32px rgba(212,160,23,0.6)`,
                },
            }}
        >
            <KeyboardArrowUpIcon sx={{ fontSize: 26, color: colors.primary.dark, fontWeight: 'bold' }} />
        </Box>
    );
};

export default ScrollToTopButton;
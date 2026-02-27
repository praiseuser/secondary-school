import { createTheme } from '@mui/material/styles';

export const colors = {
    primary: {
        main: '#800000',
        light: '#A52020',
        dark: '#4D0000',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#C9A84C',
        light: '#F0C060',
        dark: '#9A7A2A',
        contrastText: '#1A1A1A',
    },
    background: {
        default: '#F9F6F2',
        paper: '#FFFFFF',
    },
    text: {
        primary: '#1A1A1A',
        secondary: '#5A4A4A',
        light: '#FFFFFF',
    },
};

export const typography = {
    fontFamily: {
        main: '"Merriweather", "Georgia", serif',
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
    },
};

const theme = createTheme({
    palette: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
    },

    typography: {
        fontFamily: typography.fontFamily.main,

        h1: { fontWeight: typography.fontWeight.extraBold, fontSize: typography.fontSize['4xl'] },
        h2: { fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['3xl'] },
        h3: { fontWeight: typography.fontWeight.bold, fontSize: typography.fontSize['2xl'] },
        h4: { fontWeight: typography.fontWeight.semiBold, fontSize: typography.fontSize.xl },
        h5: { fontWeight: typography.fontWeight.semiBold, fontSize: typography.fontSize.lg },
        h6: { fontWeight: typography.fontWeight.semiBold, fontSize: typography.fontSize.base },
        body1: { fontWeight: typography.fontWeight.regular, fontSize: typography.fontSize.base, lineHeight: 1.8 },
        body2: { fontWeight: typography.fontWeight.regular, fontSize: typography.fontSize.sm, lineHeight: 1.7 },
        button: {
            fontWeight: typography.fontWeight.semiBold,
            textTransform: 'none',
            fontSize: typography.fontSize.sm,
        },
    },

    shape: { borderRadius: 8 },
});

export default theme;